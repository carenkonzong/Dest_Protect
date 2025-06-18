function displaymenu() {
  const menuItems = document.getElementById("menu");
  menuItems.classList.toggle("hidden");
}

const hamburger = document.getElementById("hamburgerl");
hamburger.addEventListener("click", displaymenu);
