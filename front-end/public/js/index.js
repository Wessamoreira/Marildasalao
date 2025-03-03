document.addEventListener("DOMContentLoaded", function () {
    // Botões flutuantes do WhatsApp e Instagram
    const whatsappButton = document.createElement("a");
    whatsappButton.href = "https://wa.me/seu-numero";
    whatsappButton.classList.add("floating-button", "whatsapp");
    whatsappButton.innerHTML = "<i class='fab fa-whatsapp'></i>";
    document.body.appendChild(whatsappButton);

    const instagramButton = document.createElement("a");
    instagramButton.href = "https://instagram.com/seu-perfil";
    instagramButton.classList.add("floating-button", "instagram");
    instagramButton.innerHTML = "<i class='fab fa-instagram'></i>";
    document.body.appendChild(instagramButton);

    // Ajuste de posição dos botões
    const buttons = document.querySelectorAll(".floating-button");
    buttons.forEach((button, index) => {
        button.style.bottom = `${20 + index * 60}px`;
    });

    // Botão "Agendar" nos cards
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        const agendarButton = document.createElement("a");
        agendarButton.href = "agendamento.html";
        agendarButton.classList.add("agendar-button");
        agendarButton.textContent = "Agendar";
        card.appendChild(agendarButton);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Ativar animação nos cards
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });

    // Ajustar botões flutuantes
    const floatingButtons = document.querySelector(".floating-buttons");
    if (floatingButtons) {
        floatingButtons.style.opacity = "1";
    }
});
