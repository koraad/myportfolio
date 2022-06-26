// light mode

const lightMode = document.getElementById('light-mode');


lightMode.onclick = () => {
    document.body.classList.toggle('active');

    let images = document.querySelectorAll('.project-content img')

    if(document.body.classList.contains('active')) {
        images.forEach(image => {
            image.src = './Images/project-dark.png';
        })
    } else {
        images.forEach(image => {
            image.src = './Images/project-light.png';
        })
    }
    
}


//   loader js and signup popup js

const loader = document.querySelector('.loader');

window.onload = () => {
	setInterval(fadeOut, 6000);
	setTimeout(typer,6000);
	scrollTo(0,0);

}

function fadeOut() {
	loader.classList.add('fade');
} 

function typer() {
	// hero typing animation

    let typed = new Typed('.typing', {
        strings: ["HEllO THERE!", "I'M DON PASINDU", "I'M A FRONT END WEB DEVELOPER", "A GRAPHIC DESIGNER", "SOCIAL MEDIA MARKETER", "AND A CONTENT CREATOR"],
        typeSpeed: 100,
        backSpeed: 15,
        loop: true
    })
}

// sticky social hide

document.onscroll = function() {
    if (window.innerHeight + window.scrollY > document.body.clientHeight) {
        document.querySelector('.sticky-social').style.left='-100%';
        document.querySelector('.sticky-social').style.opacity='0';
    } else {
        document.querySelector('.sticky-social').style.left='0';
        document.querySelector('.sticky-social').style.opacity='1'; 
    }
}

// popup close

const openButton = document.getElementById('popup-open');
const closeButton = document.getElementById('popup-close');
const popupSection = document.querySelector('.about-popup');
const popup = document.querySelector('.popup-container');

openButton.onclick = ()=> {
    popupSection.style.bottom = '0';
    popup.style.opacity = '1'

}
closeButton.onclick = ()=> {
    popupSection.style.bottom = '-100%';
    popup.style.opacity = '0'
}

window.onscroll = () => {
    popupSection.style.bottom = '-100%';
    popup.style.opacity = '0'
} 