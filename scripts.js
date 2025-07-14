function displaymenu() {
  const menuItems = document.getElementById("menu");
  menuItems.classList.toggle("hidden");
}

const hamburger = document.getElementById("hamburgerl");
hamburger.addEventListener("click", displaymenu);

document.getElementById("contactform").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = document.getElementById("contactform");

  emailjs.sendForm("service_0mdpjz9", "template_dl8a11r", this).then(
    () => {
      alert("le formulaire a été soumis avec succès!");
      form.reset();
    },
    (error) => {
      alert("Failed to send message: " + error);
    }
  );
});
