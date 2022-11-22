// -------------------------------------
// ------------------------------------
// ------- log in database----------------
const emailCheck = [
  "joshua.dicello@aurizon.com.au",
  "shane.butler@aurizon.com.au",
  "tim.annesley@aurizon.com.au",
  "natalie.bannatyne-rueda@aurizon.com.au",
];
const passwordCheck = ["Aurizon", "Aurizon1", "Aurizon2", "Aurizon3"];
// -------------------------------------
// -------------------------------------
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const login = document.querySelector(".login-btn");

login.addEventListener("click", () => {
  if (email.value == emailCheck[0] && password.value == passwordCheck[0]) {
    localStorage.setItem("AuthenticationState", "Authenticated");
    window.open("index.html", "_self");

    alert("welcome Josh");
  } else if (
    email.value == emailCheck[1] &&
    password.value == passwordCheck[1]
  ) {
    localStorage.setItem("AuthenticationState", "Authenticated");
    console.log("welcome Shane");
  } else if (
    email.value == emailCheck[2] &&
    password.value == passwordCheck[2]
  ) {
    localStorage.setItem("AuthenticationState", "Authenticated");
    console.log("welcome Tim");
  } else if (
    email.value == emailCheck[3] &&
    password.value == passwordCheck[3]
  ) {
    localStorage.setItem("AuthenticationState", "Authenticated");
    console.log("welcome Nat");
  }
  // expire in 1 hour ---------------
});

const logOutBtn = document.querySelector(".logout-btn");

logOutBtn.addEventListener("click", () => {
  localStorage.clear();
  window.open("login.html", "_self");
});
