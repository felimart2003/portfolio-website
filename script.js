function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// $('html, body').animate({
//     scrollTop: $("#about").offset().top
// }, 100000);

const showOnPx = 150;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

backToTopButton.addEventListener("click", goToTop);
