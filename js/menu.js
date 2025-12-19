
let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

const products = [
  {id:1, name:"Classic T‑Shirt", price:25, category:"T‑Shirts", image:"https://via.placeholder.com/400"},
  {id:2, name:"Denim Jacket", price:60, category:"Jackets", image:"https://via.placeholder.com/400"},
  {id:3, name:"Slim Fit Jeans", price:45, category:"Jeans", image:"https://via.placeholder.com/400"},
  {id:4, name:"Warm Hoodie", price:40, category:"Hoodies", image:"https://via.placeholder.com/400"}
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const cartCount = document.getElementById("cartCount");

function saveCart() {
  localStorage.setItem("cartItems", JSON.stringify(cart));
  cartCount.innerText = cart.length;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
}

function renderProducts(items) {
  productList.innerHTML = "";
  items.forEach(p => {
    productList.innerHTML += `
    <div class="product">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>`;
  });
}

function filterProducts() {
  const text = searchInput.value.toLowerCase();
  const category = categorySelect.value;

  const filtered = products.filter(p => {
    const matchCat = category === "All" || p.category === category;
    const matchText = p.name.toLowerCase().includes(text);
    return matchCat && matchText;
  });

  renderProducts(filtered);
}

searchInput.addEventListener("keyup", filterProducts);
categorySelect.addEventListener("change", filterProducts);

cartCount.innerText = cart.length;
renderProducts(products);
