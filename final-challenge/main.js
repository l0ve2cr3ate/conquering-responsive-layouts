const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  navToggle.classList.toggle("open");
  if (navToggle.classList.contains("open")) {
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "close navigation");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "open navigation");
  }
});
