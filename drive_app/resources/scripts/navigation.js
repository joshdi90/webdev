const primaryNav = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".menu-button");
// const menuItemToggle = document.querySelector(".menu-");

// Open / close with mobile-nav-toggle -------------------
//

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }

  console.log(visibility);
});
