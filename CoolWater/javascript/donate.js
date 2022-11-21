// Loading screen
const load = document.querySelector('.load');
const container = document.querySelector('.container');
setTimeout(showContent,2000);
function showContent() {
	load.style = "display:none";
	container.style = "display:relative";
}
