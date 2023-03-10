const mobileMenu = document.querySelector('.mobile-menu i');

const setBg = (on) => {
  if (on) {
    mobileMenu.style.background = '#fff';
    mobileMenu.style.padding = '0.5rem';
    mobileMenu.style.borderRadius = '50%';
  } else {
    mobileMenu.style.background = 'none';
  }
};

window.addEventListener('scroll', () =>
  window.scrollY > 60 ? setBg(true) : setBg()
);
