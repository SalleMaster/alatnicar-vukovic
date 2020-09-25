// Navbar Toggle
burgerMenu = document.querySelector('.burger-menu');
menuResponsive = document.querySelector('.menu-responsive');
links = document.querySelectorAll('.link');
const navLogo = document.querySelector('.nav-logo');

const toggleNavbar = () => {
  burgerMenu.classList.toggle('active');
  menuResponsive.classList.toggle('active');
};

const removeNavbar = () => {
  burgerMenu.classList.remove('active');
  menuResponsive.classList.remove('active');
};

burgerMenu.addEventListener('click', toggleNavbar);
links.forEach((link) => {
  link.addEventListener('click', removeNavbar);
});

navLogo.addEventListener('click', removeNavbar);

// Submenu toggle
// Proizvodi
const proizvodiToggle = document.querySelector('.proizvodi-toggle');
const proizvodiSubmenu = document.querySelector('#proizvodi-submenu');
const proizvodiBack = document.querySelector('#proizvodi-submenu .back-button');

const toggleProizvodi = () => {
  proizvodiSubmenu.classList.add('active');
};

const removeProizvodi = () => {
  proizvodiSubmenu.classList.remove('active');
};

proizvodiToggle.addEventListener('click', toggleProizvodi);
proizvodiBack.addEventListener('click', removeProizvodi);

// Usluge
const uslugeToggle = document.querySelector('.usluge-toggle');
const uslugeSubmenu = document.querySelector('#usluge-submenu');
const uslugeBack = document.querySelector('#usluge-submenu .back-button');

const toggleUsluge = () => {
  uslugeSubmenu.classList.add('active');
};

const removeUsluge = () => {
  uslugeSubmenu.classList.remove('active');
};

uslugeToggle.addEventListener('click', toggleUsluge);
uslugeBack.addEventListener('click', removeUsluge);
