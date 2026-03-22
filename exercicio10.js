// Função que verifica se o número é positivo, negativo ou neutro
function isPositiveOrNegative(numero) {

    // Se o número for maior que 0 → positivo
    if (numero > 0) {
        console.log("positivo");

    // Se for menor que 0 → negativo
    } else if (numero < 0) {
        console.log("negativo");

    // Se não for nenhum dos dois → é zero
    } else {
        console.log("neutro");
    }
}


// Chamando a função (igual o professor fez)
isPositiveOrNegative(1);      // positivo
isPositiveOrNegative(100);    // positivo
isPositiveOrNegative(-1000);  // negativo
isPositiveOrNegative(0);      // neutro


// Pede um valor para o usuário
let numero = prompt("Digite um número");

// Converte para número (importante!)
numero = Number(numero);

// Chama a função com o valor digitado
isPositiveOrNegative(numero);