// Loading screen
const load = document.querySelector('.load');
const container = document.querySelector('.container');
setTimeout(showContent,2000);
function showContent() {
	load.style = "display:none";
	container.style = "display:relative";
}

const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction)=> {
	const sliderHeight = sliderContainer.clientHeight;
	
	// Go up a slide.
	if (direction === 'up') {
		activeSlideIndex++;
		if(activeSlideIndex > slidesLength - 1) {
			activeSlideIndex = 0;
		}
	}
	
	// Go down a slide.
	else if (direction === 'down') {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesLength - 1;
		}
	}
	
	slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
	slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}