'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar-dark');
  } else {
    navbar.classList.remove('navbar-dark');
  }
});

// handle
const navbarMenu = document.querySelector('.navbar-menu');
navbarMenu.addEventListener('click', (event) => {  
  const target = event.target;
  const link = target.dataset.link;
  if(link == null) {
    return;
  }
  console.log(event.target.dataset.link);
  scrollIntoView(link);
});

// handle button
const homeContactBtn = document.querySelector('.home-contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

function scrollIntoView(selector){
  const scrollTO = document.querySelector(selector);
  scrollTO.scrollIntoView({behavior: "smooth"});
}
