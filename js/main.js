'use strict';

// Header toggler
let toggler = document.querySelector('header nav .icon');
let links = document.querySelector('header nav ul');
let icon1 = document.querySelector('header nav .icon span:first-child');
let icon2 = document.querySelector('header nav .icon span:nth-child(2)');
let icon3 = document.querySelector('header nav .icon span:last-child');
let darkmodeIcon = document.querySelector('label.mode');
let rotate = 0;

toggler.addEventListener('click', function(){
	if(rotate == 0){
	icon1.style.transform = 'rotate(45deg) translate(5px)';
	icon2.style.display = 'none';
	icon3.style.transform = 'rotate(-45deg) translate(5px)';
	links.style.height = '100px';
	rotate = 1;
	} else{
	icon1.style.transform = 'rotate(0deg)';
	icon2.style.display = '';
	icon3.style.transform = 'rotate(0deg)';
	links.style.height ='0'; 
	rotate = 0;
}
whiteBorder();	
});

// Dark Mode Activator 
// dark-mode
let modeToggler = document.getElementById('mode');
let header = document.querySelector('header');
let blog = document.querySelector('.blog');
let blogContainer = document.querySelector('.blog .container');
let blogRow = document.querySelector('.blog .container .row');
let blogContent = document.querySelector('.blog-content');
let footer = document.querySelector('.footer');
let body = document.querySelector('body');
let darkMode = '';

// Check if the last mode was dark or not
if(window.localStorage.getItem("color")){
	modeToggler.checked = true;  //if so set the dark mode toggler to false
	// Add the dark moode
	addDarkMode();
// check for white border around the navbar menu
	
	whiteBorder();
}else{
	// Remove the dark mode
	removeDarkMode();

	// check for white border around the navbar menu
	whiteBorder();
}
//=============================================================================Event Listener======================

	modeToggler.addEventListener('change', function(){
	if (darkMode==0) {
	// Add the dark mode
	addDarkMode();

	// check for white border around the navbar menu
	whiteBorder();
	// set the dark mode to the storage
	window.localStorage.setItem('color','dark');
	
	}
	else{
	// Remove the dark mode
	removeDarkMode();

	// remove the dark mode from the storage
	window.localStorage.removeItem('color');
	}
	whiteBorder();
});

// a Function to draw a white border around the header ul in dark mood only
function whiteBorder(){
	if(rotate == 1 && darkMode==1){
		links.style.border = '1px white solid';
	}
	else if(rotate==0 || rotate==1 && darkMode==0){
		links.style.border = 'none';
	}
}

// A function to add the dark mood 
function addDarkMode(){
	darkmodeIcon.classList.remove('off');
	darkmodeIcon.classList.add('on');
	body.classList.add('dark-mode');
	header.classList.add('dark-mode');
	blog.classList.add('dark-mode');
	blogContainer.classList.add('dark-mode');
	blogRow.classList.add('dark-mode');
	blogContent.classList.add('dark-mode');
	footer.classList.add('dark-mode');
	darkMode = 1;
}

// A function to remove the dark mode
function removeDarkMode(){
	darkmodeIcon.classList.remove('on');
	darkmodeIcon.classList.add('off');
	body.classList.remove('dark-mode');
	header.classList.remove('dark-mode');
	blog.classList.remove('dark-mode');
	blogContainer.classList.remove('dark-mode');
	blogRow.classList.remove('dark-mode');
	blogContent.classList.remove('dark-mode');
	footer.classList.remove('dark-mode');
	modeToggler.checked = false;  //set the first dark mode toggler to false
	darkMode = 0;
}