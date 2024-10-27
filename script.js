const loginForm = document.querySelector("#loginForm");
const signupForm = document.querySelector("#signupForm");

const signInBtnLink = document.querySelector(".signInBtn-link");
const signUpBtnLink = document.querySelector(".signUpBtn-link");
const wrapper = document.querySelector(".wrapper");

signUpBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

signInBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

signInBtnLink.addEventListener("click", (event) => {
  event.preventDefault();
  signupForm.parentElement.classList.remove("active");
  loginForm.parentElement.classList.add("active");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (loginForm.checkValidity()) {
    window.location.href = "game.html";
  }
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (signupForm.checkValidity()) {
    window.location.href = "game.html";
  }
});