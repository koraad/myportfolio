// light mode

const lightMode = document.getElementById("light-mode");
const heroImage = document.getElementById("home");

lightMode.onclick = () => {
  if (document.body.classList.contains("active")) {
    document.body.classList.remove("active");
    localStorage.setItem("theme", "light");
    projectImg("Hero-light");
  } else {
    document.body.classList.add("active");
    localStorage.setItem("theme", "dark");

    projectImg("Hero-dark");
  }
};

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("active");
  projectImg("Hero-dark");
}

function projectImg(mode) {
  heroImage.style.backgroundImage = `url(./Images/${mode}.jpg)`;
}

// social mobile

const socialMobile = document.getElementById("social-mobile");
const stickySocial = document.querySelector(".sticky-social");

socialMobile.onclick = () => {
  if (stickySocial.classList.contains("hide")) {
    stickySocial.classList.remove("hide");
  } else {
    stickySocial.classList.add("hide");
  }
};

// menu toggle

const menuToggle = document.getElementById("menu-toggle");

menuToggle.onclick = () => {
  if (menuToggle.classList.contains("fa-bars")) {
    menuToggle.classList.replace("fa-bars", "fa-xmark");

    document.querySelector("header nav").classList.add("active");
    navBar.style.backgroundColor = "#303236";
  } else {
    menuToggle.classList.replace("fa-xmark", "fa-bars");
    document.querySelector("header nav").classList.remove("active");
    navBarBg();
  }
};

//   loader js and signup popup js

const loader = document.querySelector(".loader");

window.onload = () => {
  setInterval(fadeOut, 4500);
  setTimeout(typer, 4500);
  scrollTo(0, 0);
  scrollProgress();
};

function fadeOut() {
  loader.classList.add("fade");
}

function typer() {
  // hero typing animation

  let typed = new Typed(".typing", {
    strings: [
      "HEllO THERE!",
      "I'M DON PASINDU",
      "I'M A FRONT END WEB DEVELOPER",
      "A GRAPHIC DESIGNER",
      "SOCIAL MEDIA MARKETER",
      "AND A CONTENT CREATOR",
    ],
    typeSpeed: 100,
    backSpeed: 15,
    loop: true,
  });
}

// navbar hide

const navBar = document.querySelector("header");

document.onscroll = function () {
  // menu bar hide

  menuToggle.classList.replace("fa-xmark", "fa-bars");
  document.querySelector("header nav").classList.remove("active");

  // scroll progress js
  scrollProgress();

  // navbar backgroung change

  navBarBg();

  // back to top

  backToTop();
};

function backToTop() {
  if (window.scrollY > 500) {
    document.querySelector(".top-btn").style.display = "flex";
  } else {
    document.querySelector(".top-btn").style.display = "none";
  }
}
function navBarBg() {
  if (window.scrollY > 100) {
    navBar.style.backgroundColor = "#303236";
  } else {
    navBar.style.backgroundColor = "transparent";
  }
}

function scrollProgress() {
  const scrollProgress = document.querySelector(".scroll-highlight");
  let documentHeight = document.body.scrollHeight;
  let distanceFromTop = document.documentElement.scrollTop;
  let sectionHeight = document.documentElement.clientHeight;

  let scrollBarWidth =
    (distanceFromTop / (documentHeight - sectionHeight)) * 100;

  scrollProgress.style.width = Math.round(scrollBarWidth) + "%";
}

// popup close

const openButton = document.getElementById("popup-open");
const closeButton = document.getElementById("popup-close");
const popupSection = document.querySelector(".about-popup");
const popup = document.querySelector(".popup-container");
const profileImg = document.querySelector(".profile .img");

openButton.onclick = () => {
  popupOpen();
};
profileImg.onclick = () => {
  popupOpen();
};

closeButton.onclick = () => {
  popupClose();
};

window.onscroll = () => {
  popupClose();
};

function popupClose() {
  popupSection.style.left = "-100%";
  popup.style.opacity = "0";
}
function popupOpen() {
  popupSection.style.left = "0";
  popup.style.opacity = "1";
}

// load more

let loadButton = document.querySelector("#load-more");
let card = document.querySelectorAll("#projects .project-content");

let loadCount = 2;

loadButton.onclick = () => {
  for (let i = loadCount; i < loadCount + 2; i++) {
    card[i].style.display = "flex";
  }
  loadCount += 2;

  if (loadCount == 10) {
    loadButton.style.display = "none";
  }
};

// video section

const videoClose = document.getElementById("video-close");
const videoSection = document.querySelector(".video");
const playVideo = document.querySelector(".play-button");
const iFrame = document.querySelector("iframe");

playVideo.onclick = () => {
  videoSection.style.display = "flex";
  iFrame.playVideo();
};

videoClose.onclick = () => {
  videoSection.style.display = "none";
  iFrame.pauseVideo();
};

// contact section

// form validation

const username = document.getElementById("name");
const sub = document.getElementById("sub");
const email = document.getElementById("email");
const check = document.getElementById("check");
const reset = document.getElementById("reset");
const message = document.getElementById("message");
const submitMessage = document.getElementById("submit-message");
const submitMessageClose = document.getElementById("submit-close");

let nameSuccess, subSuccess, emailSuccess, messageSuccess;

check.addEventListener("click", (e) => {
  e.preventDefault();

  checkInputs();

  if (
    nameSuccess == 1 &&
    subSuccess == 1 &&
    emailSuccess == 1 &&
    messageSuccess == 1
  ) {
    submitMessage.style.display = "flex";
  } else {
    submitMessage.style.display = "none";
  }
});

submitMessageClose.onclick = () => {
  submitMessage.style.display = "none";
};
reset.onclick = () => {
  let inputs = document.querySelectorAll(".input-wrapper input");
  message.value = "";

  inputs.forEach((input) => {
    input.value = "";
  });

  let formControls = document.querySelectorAll(".form-control");
  formControls.forEach((control) => {
    control.classList.remove("success");
  });

  nameSuccess = 0;
  subSuccess = 0;
  emailSuccess = 0;
  messageSuccess = 0;
};

document.onload = () => {
  message.value = "";
  username.value = "";
  email.value = "";
  sub.value = "";
};

function checkInputs() {
  const usernameValue = username.value.trim();
  const subValue = sub.value.trim();
  const emailValue = email.value.trim();

  const messageValue = message.value.trim();

  if (usernameValue == "") {
    setErrorFor(username, "Name cannot be blank");
    nameSuccess = 0;
  } else if (usernameValue.length < 3) {
    setErrorFor(username, "Name cannot be less than 3 letters");
    nameSuccess = 0;
  } else {
    setSuccessFor(username);
    nameSuccess = 1;
  }

  if (subValue == "") {
    setErrorFor(sub, "Subject cannot be empty");
    subSuccess = 0;
  } else {
    setSuccessFor(sub);
    subSuccess = 1;
  }
  if (emailValue == "") {
    setErrorFor(email, "Email cannot be blank");
    emailSuccess = 0;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
    emailSuccess = 0;
  } else {
    setSuccessFor(email);
    emailSuccess = 1;
  }

  if (messageValue == "") {
    setErrorFor(message, "Message cannot be blank");
    messageSuccess = 0;
  } else if (messageValue.length < 5) {
    setErrorFor(message, "Message cannot be less than 5 characters");
    messageSuccess = 0;
  } else {
    setSuccessFor(message);
    messageSuccess = 1;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
