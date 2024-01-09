const menuNav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  menuNav.classList.toggle("navbar-scroll", window.scrollY > 0);
});
