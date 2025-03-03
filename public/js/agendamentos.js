document.addEventListener("DOMContentLoaded", function () {
    // Simulação de produtos
    const produtos = [
        { nome: "Shampoo Profissional", preco: "R$ 29,90" },
        { nome: "Máscara Capilar", preco: "R$ 39,90" },
        { nome: "Óleo Reparador", preco: "R$ 19,90" }
    ];

    const servicos = [
        { nome: "Corte Feminino", descricao: "Corte profissional para todos os tipos de cabelo" },
        { nome: "Escova Progressiva", descricao: "Alisamento duradouro com brilho intenso" },
        { nome: "Hidratação Profunda", descricao: "Tratamento para cabelos ressecados e danificados" }
    ];

    const produtosContainer = document.getElementById("produtos-container");
    const servicosContainer = document.getElementById("servicos-container");

    // Exibir produtos em cards
    if (produtosContainer) {
        produtos.forEach(produto => {
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <h3>${produto.nome}</h3>
                <p>${produto.preco}</p>
                <button class="whatsapp-btn">Comprar no WhatsApp</button>
            `;
            produtosContainer.appendChild(card);
        });
    }

    // Exibir serviços em cards
    if (servicosContainer) {
        servicos.forEach(servico => {
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <h3>${servico.nome}</h3>
                <p>${servico.descricao}</p>
                <button class="agendar-btn">Agendar</button>
            `;
            servicosContainer.appendChild(card);
        });
    }

    // Integração com WhatsApp
    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("whatsapp-btn")) {
            let produto = event.target.parentElement.querySelector("h3").textContent;
            let mensagem = `Olá, gostaria de comprar o produto: ${produto}`;
            let url = `https://wa.me/SEU_NUMERO?text=${encodeURIComponent(mensagem)}`;
            window.open(url, "_blank");
        }
    });

    // Integração com WhatsApp para agendamento
    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("agendar-btn")) {
            let servico = event.target.parentElement.querySelector("h3").textContent;
            let mensagem = `Olá, gostaria de agendar o serviço: ${servico}`;
            let url = `https://wa.me/SEU_NUMERO?text=${encodeURIComponent(mensagem)}`;
            window.open(url, "_blank");
        }
    });

    // Botões flutuantes
    let whatsappBtn = document.createElement("a");
    whatsappBtn.href = "https://wa.me/SEU_NUMERO";
    whatsappBtn.classList.add("floating-btn", "whatsapp");
    whatsappBtn.innerHTML = "<img src='whatsapp-icon.png' alt='WhatsApp'>";
    document.body.appendChild(whatsappBtn);

    let instagramBtn = document.createElement("a");
    instagramBtn.href = "https://www.instagram.com/SEU_INSTAGRAM";
    instagramBtn.classList.add("floating-btn", "instagram");
    instagramBtn.innerHTML = "<img src='instagram-icon.png' alt='Instagram'>";
    document.body.appendChild(instagramBtn);
});
