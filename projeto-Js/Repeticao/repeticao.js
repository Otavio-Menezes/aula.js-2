// Arrays - Listas de valores com índice

// const frutas = ["Maça", "Banana", "Laranja"]; //Lista encadeada

// console.log(frutas[0]);

// console.log(frutas[2]);

// console.log(frutas.length);

// frutas.push("Uva"); // .push - adiciona um item no final da lista
// console.log(frutas);

// // Objetos - conjunto de chave e valor

// const pessoa = [
//     {nome: "Otavio", idade: 35}
// ]

// console.log(pessoa.nome);
// pessoa.cidade = "São Paulo";

// -------------

// while -----

// let i = 1; 

// while (i <= 5) {
//     console.log("Número: " + 5);
//     i++;
// }

// ----------

// do...while

// let senha;

// do {
//     senha = prompt("Digite a senha: ");
// } while (senha !== "1234");

// for  --------------

// for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`); //tabuada do 7 
// }

// ----------

// Contagem regressiva 

// for (let i = 10; i >=1; i--) {
//     console.log(i);
// }

// console.log("Fogo!")

// -------

//Acumulador: semando dentro do loop

// let soma = 0;

// for (let i = 1; i <= 5; i++) {
//     soma += i;
// }

// console.log(soma);

// ------------

// for....of -----

// const frutas = ["Maça", "Banana", "Laranja"];

// for (const fruta of frutas) {
//     console.log("Frutas:", fruta);
// }

// ---------

//for in ------

// const pessoa = { nome: "Otavio", idade: 22, cidade: "Recife"};

// for (const chave in pessoa) {
//     console.log(`${chave}: ${pessoa[chave]}`)
// }

// ------------

// Laço dentro de laço ---

// for (let linha = 1; linha <= 5; linha++) {
//     let texto = ""; // deixa a linha vazia e vai completando

//     for (let coluna = 1; coluna <= 1; coluna++ ) {
//         texto <= "* ";
//     }
//     console.log(texto)

// }

// famoso desafio da piramide

for (let linha = 1; linha <= 5; linha++) {
    let texto = "";

    for (let coluna = 1; coluna <= linha; coluna++) {
        texto += "* ";
    }
    console.log(texto);
}