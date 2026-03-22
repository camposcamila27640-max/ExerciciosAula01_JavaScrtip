// O professor criou uma função para evitar repetir código.
// A função recebe nome, valor e quantidade.
// Ela calcula o total e mostra a mensagem no console.
// Depois, a função é chamada várias vezes com valores diferentes.

// Função que gera e exibe a mensagem do produto
function geraMensagem(nomeProduto, valor, quantidade) {
    console.log(`${nomeProduto}, valor unitário: ${valor}, total da compra: ${valor * quantidade}`);
}

// Chamando a função com diferentes produtos
geraMensagem("iphone 13", 999.99, 5);
geraMensagem("Samsung Galaxy S21", 799.99, 3);
geraMensagem("Google Pixel 6", 599.99, 2);