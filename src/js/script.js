//Obsługa wyświetlania menu
const button = document.querySelector(".menu svg");
const menu = document.querySelector(".menu .menu__nav");
const hamburgerIcons = [
  `<path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>`,
  `<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>`
];
//pokazywanie i ukrywanie menu
const displayMenu = () => {
  menu.classList.toggle("menu__nav--hidden");
  if (button.getAttribute("data-icon") === "bars") {
    button.innerHTML = hamburgerIcons[1];
    button.setAttribute("data-icon", "times");
  } else if (button.getAttribute("data-icon") === "times") {
    button.innerHTML = hamburgerIcons[0];
    button.setAttribute("data-icon", "bars");
  }
};
button.addEventListener("click", () => displayMenu());
//Płynne scrollowanie do elemetu
const scrollToElement = (element, margin = 0) => {
  if ("scrollBehavior" in document.documentElement.style) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop - margin
    });
  } else {
    window.scroll(0, element.offsetTop - margin);
  }
};

// Scrollowanie po kliknknięciu strzałki
const angleDown = document.querySelector(".home svg");
const about = document.querySelector(".about");
angleDown.addEventListener("click", () => scrollToElement(about, 25));
//Obsługa menu
const menuItems = [...document.querySelectorAll(".list__item")];
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const target = document.querySelector(
      `.${item.getAttribute("data-target")}`
    );
    if (item.getAttribute("data-target") === "home") {
      scrollToElement(target, 50);
    } else {
      scrollToElement(target, 25);
    }
    displayMenu();
  });
});
//wyświetalnie logo i obsługa
const logo = document.querySelector(".menu__logo");
logo.addEventListener("click", () => scrollToElement(0, 50));

window.addEventListener("scroll", () => {
  if (
    logo.getAttribute("class") === "menu__logo" &&
    window.pageYOffset > window.innerHeight / 2
  )
    return;
  if (window.pageYOffset > window.innerHeight / 2.5) {
    logo.classList.remove("menu__logo--hidden");
  } else {
    logo.classList.add("menu__logo--hidden");
  }
});
//Animacja
