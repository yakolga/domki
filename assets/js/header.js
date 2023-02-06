window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__ul"),
    menuItem = document.querySelectorAll(".header__li"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("header__hamburger_active");
    menu.classList.toggle("header__nav_active");
  });


  menuItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      hamburger.classList.toggle("header__hamburger_active");
      menu.classList.toggle("header__nav_active");
    });
  });

  window.onscroll = function changeHeader() {
    const header = document.querySelector('.header'),
      headerWrapper = document.querySelector('.header__wrapper'),
      logo = document.querySelector('.header__logo'),
      logoImage = logo.querySelector('img');

    if (window.pageYOffset > 200) {
      headerWrapper.style.flexDirection = 'row',
        headerWrapper.style.justifyContent = 'space-between';
      headerWrapper.style.padding = '10px 0 10px 0';
      header.style.backgroundColor = 'var(--main-color)';
      logo.style.marginBottom = '0';
      logoImage.style.width = '60px';
    } else {
      headerWrapper.style.flexDirection = 'column';
      header.style.backgroundColor = 'transparent';
      headerWrapper.style.padding = '20px 0 20px 0';
      logo.style.marginBottom = '30px';
      logoImage.style.width = '100%';
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});