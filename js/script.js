let sidebar = document.querySelector(".sidebar");
let menuButton = document.querySelector(".btn-menu");
let searchButton = document.querySelector(".search-icon");

menuButton.onclick = function () {
  sidebar.classList.toggle("active");
};
searchButton.onclick = function () {
  sidebar.classList.toggle("active");
};
