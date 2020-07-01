var modal = document.querySelector(".modal");
var button = document.querySelector(".search-form-button");
var form = document.querySelector(".search-form");
var checkinDate = document.querySelector(".check-in-date");
var checkoutDate = document.querySelector(".check-out-date");
var adults = document.querySelector(".number-of-adults");
var children = document.querySelector(".number-of-children");

button.addEventListener("click", function (evt) {
evt.preventDefault();
modal.classList.toggle("modal-hide");
modal.classList.toggle("modal-show"); 
});

form.addEventListener("submit", function (evt) {
if (!checkinDate.value || !checkoutDate.value || !adults.value || !children.value) {
evt.preventDefault();
modal.classList.add("modal-error");
} 
const refresh = function() { 
modal.classList.remove("modal-error"); }
setTimeout(refresh, 500)
});

