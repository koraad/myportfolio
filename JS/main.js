// light mode

const lightMode = document.getElementById('light-mode');
const heroImage = document.getElementById('home')

lightMode.onclick = () => {

    if (document.body.classList.contains('active')) {
        document.body.classList.remove('active');
        localStorage.setItem("theme", "light");
        projectImg('Hero-light');
        
      } else {
        document.body.classList.add('active');
        localStorage.setItem("theme", "dark");
        
        projectImg('Hero-dark');
      }
    
}


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add('active');
    // projectImg('project-dark');
    projectImg('Hero-dark');

  }

function projectImg(mode) {

    heroImage.style.backgroundImage = `url(../Images/${mode}.jpg)`;

}


// menu toggle 


const menuToggle = document.getElementById('menu-toggle');
// const mobileToggle = document.getElementById('mobile-toggle');

menuToggle.onclick = () => {
  if (menuToggle.classList.contains('fa-bars')) {
	menuToggle.classList.replace('fa-bars', 'fa-xmark');
	
    document.querySelector('header nav').classList.add('active');
    navBar.style.backgroundColor = '#303236';
    
  } else {
    menuToggle.classList.replace('fa-xmark', 'fa-bars');
    document.querySelector('header nav').classList.remove('active');
    navBarBg();

  }
}


//   loader js and signup popup js

const loader = document.querySelector('.loader');

// window.onload = () => {
// 	setInterval(fadeOut, 6000);
// 	setTimeout(typer,6000);
// 	scrollTo(0,0);
//     scrollProgress();

// }


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



// sticky social 

const navBar = document.querySelector('header')

document.onscroll = function() {

    // menu bar hide

    menuToggle.classList.replace('fa-xmark', 'fa-bars');
    document.querySelector('header nav').classList.remove('active');

    // sticky social icons hide
    if (window.innerHeight + window.scrollY > document.body.clientHeight) {
        document.querySelector('.sticky-social').style.left='-100%';
        document.querySelector('.sticky-social').style.opacity='0';
    } else {
        document.querySelector('.sticky-social').style.left='0';
        document.querySelector('.sticky-social').style.opacity='1'; 
    }
    // scroll progress js
    scrollProgress();

    // navbar backgroung change

    navBarBg();

    
    
}

function navBarBg() {
    if (window.scrollY > 100) {
        navBar.style.backgroundColor = '#303236';
        
    } else {
        navBar.style.backgroundColor = 'transparent';
    }
}


function scrollProgress() {
    const scrollProgress = document.querySelector('.scroll-highlight')
    let documentHeight = document.body.scrollHeight
    let distanceFromTop = document.documentElement.scrollTop
    let sectionHeight = document.documentElement.clientHeight

    let scrollBarWidth = ((distanceFromTop)/(documentHeight-sectionHeight)) *100

    scrollProgress.style.width = Math.round(scrollBarWidth) + '%'
}

// popup close

const openButton = document.getElementById('popup-open');
const closeButton = document.getElementById('popup-close');
const popupSection = document.querySelector('.about-popup');
const popup = document.querySelector('.popup-container');
const profileImg = document.querySelector('.profile .img');

openButton.onclick = ()=> {
    popupOpen()
}
profileImg.onclick = ()=> {
    popupOpen()
}


closeButton.onclick = ()=> {
    popupClose()
}

window.onscroll = () => {
    popupClose()
} 

function popupClose() {
    popupSection.style.bottom = '-100%';
    popup.style.opacity = '0'
}
function popupOpen() {
    popupSection.style.bottom = '0';
    popup.style.opacity = '1'

}

// load more

let loadButton = document.querySelector('#load-more');
let card = document.querySelectorAll('#projects .project-content');

let loadCount = 2;

loadButton.onclick = ()=> {
    for(let i=loadCount; i<loadCount + 2;i++) {
        card[i].style.display = 'flex';
    }
    loadCount += 2

	if(loadCount == 8) {
		loadButton.style.display = 'none';
	}
	
}

// form validation

// var check = document.getElementById('check');
// var username = document.getElementById('name');
// var tel = document.getElementById('tel');
// var email = document.getElementById('email');
// var address = document.getElementById('address');
// var message = document.getElementById('message');


// check.addEventListener('click', (e) => {
// 	e.preventDefault();
	
// 	checkInputs();

// 	if (nameSuccess == 1 && telSuccess == 1 && emailSuccess == 1 && addressSuccess == 1 && messageSuccess == 1) {
// 		popupWindow();
// 	} 
// });


// function checkInputs() {
// 	const usernameValue = username.value.trim();
// 	const telValue = tel.value.trim();
// 	const emailValue = email.value.trim();
// 	const addressValue = address.value.trim();
// 	const messageValue = message.value.trim();	
	
	
// 	if(usernameValue == '') {
// 		setErrorFor(username, 'Name cannot be blank');
// 	} else if (usernameValue.length < 3) {
// 		setErrorFor(username, 'Name cannot be less than 3 letters');
// 	} else {
// 		setSuccessFor(username);
// 		nameSuccess = 1;
// 	}
	
// 	if(telValue == '') {
// 		setErrorFor(tel, 'Tel number cannot be blank');
// 	} else if (telValue.length < 10) {
// 		setErrorFor(tel, 'Tel number cannot be less than 10 digits');
// 	}else {
// 		setSuccessFor(tel);
// 		telSuccess = 1;
// 	}
// 	if(emailValue == '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
// 		emailSuccess = 1;
// 	}
// 	if(addressValue == '') {
// 		setErrorFor(address, 'Address cannot be blank');
// 	} else if (addressValue.length < 20) {
// 		setErrorFor(address, 'Address cannot be less than 20 characters');
// 	} else {
// 		setSuccessFor(address);
// 		addressSuccess = 1;
// 	}
// 	if(messageValue == '') {
// 		setErrorFor(message, 'Message cannot be blank');
// 	} else if (addressValue.length < 5) {
// 		setErrorFor(tel, 'Message cannot be less than 5 characters');
// 	} else {
// 		setSuccessFor(message);
// 		messageSuccess = 1;
		
// 	}

	
// 	document.getElementById('output-name').innerHTML = usernameValue
// 	document.getElementById('output-tel').innerHTML = telValue
// 	document.getElementById('output-email').innerHTML = emailValue
// 	document.getElementById('output-address').innerHTML = addressValue
// 	document.getElementById('output-message').innerHTML = messageValue
// 	document.getElementById('output-category').innerHTML = document.querySelector('input[name="Query Type"]:checked').value;
	


// }

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }
