const modal = document.getElementById('modal-arma-tu-viaje');
const closeModal = document.getElementById('close-modal');
const openModal = document.getElementById('open-modal');

openModal.addEventListener('click', () => {
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
});