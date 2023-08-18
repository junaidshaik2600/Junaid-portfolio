// function onClickMenu() {
//   document.getElementById("menu").classList.toggle("icon");
//   document.getElementById("nav").classList.toggle("icon");
// }

function onClickMenu() {
  const menuIcon = document.getElementById("menu");
  const navList = document.getElementById("nav");

  menuIcon.classList.toggle("icon");
  navList.classList.toggle("icon");
}
