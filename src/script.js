window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// let navbar = document.querySelector(".navigation");

// document.querySelector("#menu-bar").onclick = () => {
//   navbar.classList.toggle("active");
// };
