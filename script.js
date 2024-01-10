document.addEventListener('DOMContentLoaded', function () {
    // Récupérer les éléments du DOM
    var openModalBtn = document.getElementById('openModalBtn');
    var closeModalBtn = document.getElementById('closeModalBtn');
    var modal = document.getElementById('myModal');
  
    // Gérer l'événement clic pour ouvrir le modal
    openModalBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  
    // Gérer l'événement clic pour fermer le modal
    closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    // Gérer le clic en dehors du modal pour le fermer
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  