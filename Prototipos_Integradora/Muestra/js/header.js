function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
  }
  
  const secondaryNav = document.querySelector('.secondary-navxd');
  let prevScrollPos = window.pageYOffset;
  
  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      // Scroll hacia arriba
      secondaryNav.classList.remove('hidden');
    } else {
      // Scroll hacia abajo
      secondaryNav.classList.remove('hidden'); // Quitamos la clase "hidden" para que la barra aparezca al desplazarse hacia abajo
    }
  
    if (currentScrollPos > 85) {
      // 85px es la altura del header
      secondaryNav.classList.add('fixed');
    } else {
      secondaryNav.classList.remove('fixed');
    }
    prevScrollPos = currentScrollPos;
  });
  