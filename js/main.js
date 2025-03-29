
// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.mobile-menu-button');
  const mobileNav = document.querySelector('.mobile-nav');
  const menuIcon = document.querySelector('.menu-icon');
  
  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      
      // Animation de l'icône du menu
      if (menuIcon) {
        if (mobileNav.classList.contains('active')) {
          menuIcon.style.backgroundColor = 'transparent';
          menuIcon.style.transform = 'rotate(45deg)';
          if (menuIcon.previousElementSibling) menuIcon.previousElementSibling.style.transform = 'rotate(45deg)';
          if (menuIcon.nextElementSibling) menuIcon.nextElementSibling.style.transform = 'rotate(-45deg)';
        } else {
          menuIcon.style.backgroundColor = 'var(--wolf-brown)';
          menuIcon.style.transform = 'rotate(0)';
          if (menuIcon.previousElementSibling) menuIcon.previousElementSibling.style.transform = 'rotate(0)';
          if (menuIcon.nextElementSibling) menuIcon.nextElementSibling.style.transform = 'rotate(0)';
        }
      }
    });
    
    // Fermer le menu mobile quand on clique sur un lien
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        menuIcon.style.backgroundColor = 'var(--wolf-brown)';
        menuIcon.style.transform = 'rotate(0)';
        if (menuIcon.previousElementSibling) menuIcon.previousElementSibling.style.transform = 'rotate(0)';
        if (menuIcon.nextElementSibling) menuIcon.nextElementSibling.style.transform = 'rotate(0)';
      });
    });
  }
  
  // Changement de header au scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.backgroundColor = 'var(--white)';
      } else {
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
          header.style.boxShadow = 'none';
          header.style.backgroundColor = 'transparent';
        }
      }
    });
  }
  
  // Sélecteur de langue
  const languageSelect = document.getElementById('language-select');
  if (languageSelect) {
    languageSelect.addEventListener('change', function() {
      // Simulation de changement de langue
      console.log('Langue changée en: ' + this.value);
      // Ici, vous pourriez rediriger vers une version traduite de la page
    });
  }
  
  // Formulaire de contact
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Simuler l'envoi d'un formulaire
      alert('Votre message a bien été envoyé. Nous vous contacterons bientôt.');
      this.reset();
    });
  }
  
  // Gestion de la galerie produit
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('main-product-image');
  
  if (thumbnails.length > 0 && mainImage) {
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        // Changer l'image principale
        const imgSrc = this.getAttribute('data-image');
        mainImage.src = imgSrc;
        
        // Mettre à jour la classe active
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
});
