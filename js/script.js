function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
	document.getElementById("html").classList.toggle("_overflow");
}
document.getElementById("copyright").textContent = new Date().getFullYear();