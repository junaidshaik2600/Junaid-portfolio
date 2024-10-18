const nav = document.querySelector(".right");
const navHtml = `
    <div id="menu" class="menu-button" onclick="onClickMenu()">
        <div id="bar1" class="bar"></div>
        <div id="bar2" class="bar"></div>
        <div id="bar3" class="bar"></div>
    </div>
    <ul class="nav" id="nav">
        <li><a href="/junaid-portfolio/index.html">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="/junaid-portfolio/pages/projects.html">Projects</a></li>
        <li><a href="/junaid-portfolio/pages/team.html">Team</a></li>
        <li><a href="/junaid-portfolio/pages/contact.html">Contact Me</a></li>
    </ul>`;

if (nav) {
  nav.innerHTML = navHtml;
}

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
  