let lastScrollTop = 0;

navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	
	lastScrollTop = scrollTop;
});
