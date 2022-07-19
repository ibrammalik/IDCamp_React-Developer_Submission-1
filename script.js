const sideButton = document.getElementById("menu-label");
const sidebar = document.getElementsByClassName("sidebar")[0];
const arrow = document.getElementsByClassName("arrow")[0];
const arrow1 = document.getElementsByClassName("arrow1")[0];

sideButton.addEventListener("click", function () {
  sidebar.classList.toggle("show");
  arrow.classList.toggle("rotate");
  arrow1.classList.toggle("rotate1");
  console.log("ok");
});

//Menu Navigasi Breakpoint 768px
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-kanan");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
  sidebar.classList.toggle("active");
});

//Tutup Menu Navigasi Saat Klik Pilihan Menu
const clickedMenu = document.querySelectorAll(".nav-link");

clickedMenu.forEach((n) =>
  n.addEventListener("click", function () {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
    sidebar.classList.remove("active");
  })
);
