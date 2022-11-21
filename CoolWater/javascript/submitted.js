// Loading screen
const load = document.querySelector('.load');
const container = document.querySelector('.container');
setTimeout(showContent,2000);
function showContent() {
	load.style = "display:none";
	container.style = "display:relative";
	setTimeout(getData,2000);
}

// Content card holder
const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name1');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');

function getData() {
	header.innerHTML = '<img src="https://t3.ftcdn.net/jpg/02/75/08/68/360_F_275086816_PV09dztx3AsyhlUrSHss3oqB36S4oQ74.jpg" />';
	title.innerHTML = 'Thank you for donating!';
	excerpt.innerHTML = 'Every dollar helps someone get the water that everyone needs. Thank you for doing your part!';
	profile_img.innerHTML = '<img src="https://i.natgeofe.com/n/d794859c-86e7-4662-8d48-5aa132039a76/01-waterbottlesun_20190719_0023_3x4.jpg" />';
	name.innerHTML = 'CoolWater Team';
	date.innerHTML = 'Saving lives since November 2022';
	
	animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
	animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}