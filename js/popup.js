var modal = document.querySelector(".modal");
var button = document.querySelector(".search-form-button");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle('modal-hide');
  modal.classList.toggle('modal-show');
});