
// Gestion du formulaire de connexion admin
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  const loginMessage = document.getElementById('login-message');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulation d'une tentative de connexion
      loginMessage.textContent = "Échec de la connexion. Fonctionnalités d'administration en développement.";
      loginMessage.style.color = '#e74c3c';
      
      // Réinitialiser le formulaire après quelques secondes
      setTimeout(() => {
        loginForm.reset();
      }, 3000);
    });
  }
});
