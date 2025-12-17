
fetch("header.html")
.then(res => res.text())
.then(data => {
	document.getElementById("header").innerHTML = data;
    let currentPage = window.location.pathname.split("/").pop();
    if ( !currentPage || currentPage == "#" ) {
		currentPage = "index.html";
    }
    // menu me anchor tak pahuchne ka tareeka
    let links = document.querySelectorAll(".menu .menubar ul li a");
        
	// hr anchor tag ko process karenge
    links.forEach(link => {
		//pehle  anchor tag ka href ki value save karenge
    	let linkPage = link.getAttribute("href");
		
        if(!linkPage) return;
  
        if (linkPage == currentPage) {
      		link.closest("li").classList.add("underline_current");
    	} 
	});

}) // end then
.catch(err => {
    console.error("Header load failed:", err);
});
