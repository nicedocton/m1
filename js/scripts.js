jQuery(document).ready(function ($) {
	$('.gallery').slick({
		speed: 5000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
	});
});

//Tabs
window.addEventListener('load', function () {
	let myTabs = document.querySelectorAll('ul.nav-tabs > li');

	function myTabClicks(tabClickEvent) {
		for (let i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove('active');
		}

		let clickedTab = tabClickEvent.currentTarget;

		clickedTab.classList.add('active');

		tabClickEvent.preventDefault();

		let myContentPanes = document.querySelectorAll('.tab-pane');

		for (let j = 0; j < myContentPanes.length; j++) {
			myContentPanes[j].classList.remove('active');
		}

		let anchorReference = tabClickEvent.target;
		let activePaneId = anchorReference.getAttribute('href');
		let activePane = document.querySelector(activePaneId);

		activePane.classList.add('active');
	}

	for (let l = 0; l < myTabs.length; l++) {
		myTabs[l].addEventListener('click', myTabClicks);
	}
});
