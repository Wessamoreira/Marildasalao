document.addEventListener("DOMContentLoaded", function () {
    const listaProdutos = document.getElementById("lista-produtos");

    fetch("http://localhost:5000/produtos")
        .then(response => response.json())
        .then(data => {
            listaProdutos.innerHTML = ""; // Limpa a lista antes de carregar os produtos
            data.forEach(produto => {
                const produtoItem = document.createElement("div");
                produtoItem.classList.add("produto-item");
                
                produtoItem.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h3>${produto.nome}</h3>
                    <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                    <button onclick="adicionarAoCarrinho('${produto.id}')">Adicionar ao Carrinho</button>
                    <button onclick="comprarPeloWhatsApp('${produto.nome}', ${produto.preco})">Comprar via WhatsApp</button>
                `;
                
                listaProdutos.appendChild(produtoItem);
            });
        })
        .catch(error => console.error("Erro ao carregar os produtos:", error));
});

function adicionarAoCarrinho(id) {
    alert(`Produto ${id} adicionado ao carrinho!`);
}

function comprarPeloWhatsApp(nome, preco) {
    const mensagem = encodeURIComponent(`Olá, gostaria de comprar o produto: ${nome} por R$ ${preco.toFixed(2)}`);
    window.open(`https://wa.me/seunumerodewhatsapp?text=${mensagem}`, "_blank");
}
