let modalOverlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let button = document.querySelector('.button_open');
let closeButton = document.querySelector('.modal__button_close');

button.addEventListener('click', function() {
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
});
