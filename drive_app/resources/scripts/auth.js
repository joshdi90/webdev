// Is the user authenticated?
if (localStorage.getItem("AuthenticationState") === null) {
  window.open("index.html", "_self");
}
// Is their authentication token still valid?
else if (Date.now > new Date(localStorage.getItem("AuthenticationExpires"))) {
  window.open("index.html", "_self");
} else {
  //The user is authenticated and the authentication has not expired.
}

const logOutBtn = document.querySelector(".logout-btn");

logOutBtn.addEventListener("click", () => {
  localStorage.clear();

  window.open("login.html", "_self");
});
