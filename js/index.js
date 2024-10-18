// typed script
var typed = new Typed("#element", {
  strings: ["Java Developer", " And ", "Web Developer"],
  typeSpeed: 80,
});

// for nav menu
function onClickMenu() {
  const menuIcon = document.getElementById("menu");
  const navList = document.getElementById("nav");
  
  menuIcon.classList.toggle("icon");
  navList.classList.toggle("icon");
}

// Get references to the menu icon and navigation element
const menuIcon = document.getElementById("menu");
const navList = document.getElementById("nav");

// Function to close the navigation menu
function closeNavMenu() {
  menuIcon.classList.remove("icon");
  navList.classList.remove("icon");
}

// Event listener for clicks on the document
document.addEventListener("click", function (event) {
  // Check if the clicked element is outside the navigation area
  if (!menuIcon.contains(event.target) && !navList.contains(event.target)) {
    closeNavMenu(); // Close the navigation menu
  }
});

// Event listener for scrolls on the document
document.addEventListener("scroll", function (event) {
  // Check if the scroll occurred outside the navigation area
  if (!menuIcon.contains(event.target) && !navList.contains(event.target)) {
    closeNavMenu(); // Close the navigation menu
  }
});

// Function to toggle the navigation menu when the menu icon is clicked
function onClickMenu() {
  menuIcon.classList.toggle("icon");
  navList.classList.toggle("icon");
}


// Slide buttons action
document.addEventListener('DOMContentLoaded', function () {
  // Slide buttons action
  const slideBox = document.querySelector('.grid');
  const slideLeftButton = document.getElementById('left-btn');
  const slideRightButton = document.getElementById('right-btn');

  let currentPosition = 0;

  slideLeftButton.addEventListener('click', () => {
    currentPosition -= 100; // Adjust this value based on how far you want to slide
    slideBox.style.left = currentPosition + 'px';
  });

  slideRightButton.addEventListener('click', () => {
    currentPosition += 100; // Adjust this value based on how far you want to slide
    slideBox.style.left = currentPosition + 'px';
  });

});
