const btnNav = document.querySelector(".btn-nav");
const nav = document.querySelector("#nav-list");
const navMain = document.querySelector(".nav__list");

btnNav.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
  }
});

navMain.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
  }
});
