
// const temperatura = 35;

// if (temperatura > 30) {
//     console.log("Está calor!");
// }

// console.log("Fim do programa!");

// const idade = Number(prompt("Sua idade:"))

// if (Number.isNaN(idade) || idade < 0) {
//     console.log("Idade inválida!");
// } else {
//     if (idade >= 18) {
//         console.log("Maior de idade!!");
//     } else {
//         console.log("Menor de idade");
//     }
// }

// -----------

//else if  -------

// const temp = Number(prompt("Temperatura atual (C):"));

// if (Number.isNaN(temp)) {
//     console.log("Valor inválido!");
// } else if (temp < 0) {
//     console.log("Muito frio!!");
// } else if (temp <=20) {
//     console.log("frio");
// } else if (temp <= 30) {
//     console.log("Agradável!!");
// } else {
//     console.log("Quente!!")
// }

// const nota = 95;

// if (nota >= 60) {
// } else if (nota >= 90) {
//     console.log("Execelente");   
// }

// Operadores lógicos: && (E), // <reta> (OU) ---------

// const temCarteira = true;
// const temCartao = false;

// console.log(temCarteira && temCartao);



// const dinheiro = Number(prompt("Dinheiro na carteira:"));

// const temCartao = prompt("Tem cartão? (s/n)") === "s";

// if ((dinheiro >= 10 || temCartao) && dinheiro >= 0) {
//     console.log("Você consegue comprar o lanche.");
// } else {
//     console.log("Não vai rolar nada agora");
// }

// ------------

// Operador ternário ----------

// const idade = 20;
// const situacao = idade >= 18 ? "Maior" : "Menor"; ------ // "?" significa if / ":" significa else

// const situacao2 = Number(prompt("Digite sua idade."));

// if (situacao2 >= 18) {
//     console.log("Você é maior de idade!");
// } else {
//     console.log("Você é menor de idade");
// }


// switch

// const dia = prompt("Dia da semana (seg, terça, quarta...:");

// switch (dia) {
//     case "Segunda":
//         console.log("Hoje é dia útil");
//         break;
//     case "Terça":
//         console.log("Hoje é dia útil");
//         break;
//     case "Quarta":
//         console.log("Hoje é dia útil");
//     default:
//         console.log("Dia inválido");
// }