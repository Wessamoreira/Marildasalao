document.addEventListener("DOMContentLoaded", function () {
    const listaServicos = document.getElementById("lista-servicos");

    fetch("http://localhost:5000/servicos")
        .then(response => response.json())
        .then(data => {
            data.forEach(servico => {
                const servicoItem = document.createElement("div");
                servicoItem.classList.add("servico-item");
                
                servicoItem.innerHTML = `
                    <h3>${servico.nome}</h3>
                    <p>${servico.descricao}</p>
                    <p><strong>Preço: R$ ${servico.preco}</strong></p>
                    <button onclick="agendarWhatsApp('${servico.nome}')">Agendar pelo WhatsApp</button>
                `;
                
                listaServicos.appendChild(servicoItem);
            });
        })
        .catch(error => console.error("Erro ao carregar os serviços:", error));
});

function agendarWhatsApp(servico) {
    const telefone = "+5599999999999"; // Substituir pelo número real
    const mensagem = `Olá, gostaria de agendar um horário para o serviço: ${servico}.`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}
