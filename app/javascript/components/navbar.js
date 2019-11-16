 // window.innerHeight
const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-cocktail');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 250) {
        navbar.classList.add('navbar-cocktail-white');
      } else {
        navbar.classList.remove('navbar-cocktail-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
