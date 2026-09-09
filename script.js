const cards = document.querySelectorAll(".person-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.setAttribute("aria-label", "Perfil de " + card.querySelector("h3").textContent.trim());
  });
});
