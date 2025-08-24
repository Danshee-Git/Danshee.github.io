// main.js - Interactividad básica para landing page

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    formMsg.textContent = "Enviando...";
    formMsg.style.color = "#235390";

    // Simulación de envío (puedes reemplazar por AJAX real)
    setTimeout(() => {
      formMsg.textContent =
        "¡Gracias por contactarnos! Te responderemos pronto.";
      formMsg.style.color = "#28a745";
      form.reset();
    }, 1200);
  });
});
