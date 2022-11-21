// Loading screen
const load = document.querySelector('.load');
const container = document.querySelector('.container');
setTimeout(showContent,2000);
function showContent() {
	load.style = "display:none";
	container.style = "display:relative";
	const counters = document.querySelectorAll('.counter')
	counters.forEach(counter => {
		counter.innerText = '0'
	
		// Updating total count
		const updateCounter = () => {
			const target = +counter.getAttribute('data-target');
			const c = +counter.innerText;
		
			const increment = target / 200;
		
			// Update the count every 1 millisecond.
			if (c < target) {
				counter.innerText = `${Math.ceil(c + increment)}`;
				setTimeout(updateCounter,1);
			}
		}
		updateCounter();
	});
}



