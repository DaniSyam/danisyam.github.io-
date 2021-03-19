const btnHamburger = document.querySelector('.hamburger');
const fixedToggler = document.querySelector('.fixedToggler');
const iconbars = document.querySelector('.fa-bars');
const iconTimes = document.querySelector('.fa-times');

function toggleMenu() {
    fixedToggler.classList.toggle('fixedTogglerShow');
    iconbars.classList.toggle('fa-barsHide');
    iconTimes.classList.toggle('fa-timesShow');
}

btnHamburger.addEventListener('click', toggleMenu);