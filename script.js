// Fonction pour ouvrir le modal
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

// Fonction pour fermer le modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Fermer le modal si l'utilisateur clique en dehors du contenu du modal
window.onclick = function(event) {
  const modal = document.getElementById('myModal');
  if (event.target == modal) {
      modal.style.display = 'none';
  }
}
