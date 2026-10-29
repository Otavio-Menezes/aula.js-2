// const notas =  [7, 8.5, 6]; // apenas array

// const aluno = { //array de objetos || mais usado
//     nome: "Otavio", idade: 22
// }

// const turma = [
//     {nome: "Otávio", idade: 22},
//     {nome: "tata", idade: 10}
// ]

// console.log(notas[1]); // array começa com 0

// console.log(aluno.nome); // chamar um array / usar muito

// console.log(turma[1].nome) // chamar um array com um valor dentro

// --------------- Estudar muito

// const frutas = ["Maça", "Banana", "Laranja"]; //usando um exemplo de outro arquivo "js"

// console.log(frutas[0]); // puxa o array
// console.log([frutas.length]); // pega o comprimento do array

// console.log(frutas[frutas.length -1]); // pega o ultimo array dalista

// console.log(frutas.at(-1)); // um atalho que puxa o ultimo array da lista

// console.log(frutas[10]); // indefinido

// frutas[1] = "Pera"; // alterou o item 1 do array, no caso a segunda fruta

// console.log(frutas);

// ------------

/*
const fila = ["Ana", "tata"];
fila.push("vitor"); // adiciona no final do array
fila.unshift("Zeca"); // adiciona no começo do array
console.log(fila);

const atendido = fila.shift(); // remove o primeiro elemento do array 
const saiu = fila.pop(); // remove o elemento fim do array // usa bastante

console.log(fila);
console.log(atendido, saiu);
*/

// -------------

// const letras = ["a", "b", "c", "d", "e"];

// função splice - primeiro elemento seleciona o array por ordem.
// segundo elemento ira remover do array os elementos selecionados
// terceiro elemento adiciona um elemento ao array no lugar dos removidos

// letras.splice(1, 2); // remove elementos, segundo elemento remove

// console.log(letras);

// letras.splice(1, 0, "x", "y"); // terceiro elemento adiciona, aonde foi removido

// console.log(letras);

// letras.splice(0, 1, "z" ); //primeiro elemento é o inicio, ira remover o primeiro elemento do array (0)

// console.log(letras);

// -------------

// const nums = [1, 2, 3, 4, 5];

// console.log(nums.slice(1, 3)); // seleciona o intervalo entre os arrays

// console.log(nums.slice(-2)); // contagem negativa do array

// console.log(nums.includes(3)); //verefica se ja tem no array e mostra true ou false

// console.log(nums.includes(100)); // dará false pois não tem no array

// console.log(nums.indexOf(4));
// console.log(nums.indexOf(99));

// console.log(nums.join("-")); //ira juntar o array e colocar um traço ou outro coisa que esta dentro de aspas

// console.log(nums);

// const a = [1, 2];
// const b = [3, 4];

// console.log(a.concat(b)); // função "concat", concatena entre variaveis

// console.log([...a, ...b]); // três pontos significa todos os elementos do array, puxar todos os elementos

// console.log([0, ...a, 99, ...b]); //adicona no inicio dos arrays

// -----------------

// const aluno = {nome: "Otávio", idade: 22};

// aluno.idade = 21;

// aluno.cidade = "Sp";


// console.log(aluno);

// delete aluno.cidade;

// console.log(aluno);

// Filter, map, Find, Reduce

// function dobro(n) { // junior
//     return n * 2;
// }

// const dobroArrow = (n) => { //function  função anonima // pleno
//     return n * 1; 
// }


// const dobroCurto = n => n * 2; // sênior // estudar mais

// ---------

// filter /////

const lucas = { name: "Lucas", lastName: "Garcez", age: 20 };
const maria = { name: "Maria", lastName: "Oliveira", age: 17 };
const joao = { name: "João", lastName: "Silva", age: 18 };
const ana = { name: "Ana", lastName: "Santos", age: 22 };

const people = [lucas, maria, joao, ana];
// FILTER // pega um array original e transforma ele, entrega um array novo


console.log("=== FILTER ====");

const maiores = people.filter((value, index, array) => {
    console.log("Index", index);
    console.log("Value", value.name);
    console.log("--------")

    return value.age >= 18;
});

console.log("Resultado filter", maiores);

// Função MAP
// Usa bastante 

console.log("======MAP=======");

const nomes = people.map((value, index, array) => {
    console.log("Index", index);
    console.log("Value", value.name);
    console.log("===================");
    return value.name;
}) 

console.log("Resultado map:", nomes);

// --------------

console.log("=======FIND======");

const mariaEncontrada = people.find((value, index, array) =>{
    console.log("Index", index);
    console.log("Index", value.name);
    return value.name === "Maria";
})

console.log("Resultado find:", mariaEncontrada);

const pedro = people.find(p => p.name === "Pedro");

console.log(pedro);
if (pedro === undefined) {
    console.log("Pessoa não encontrada");
}

// -----------

console.log("===== Reduce =====");

// array.reduce((acumulador, elementoAtual, indice, arrayOriginal) => {

// }, valorOriginal);

const somaIdades = people.reduce((acc, value, index, array) => {
    console.log("Index", index);
    console.log("Value", value.name, value.age);
    console.log("Acumulador antes:", acc);
    return acc + value.age;
}, 0) // (acc) > acumulador

console.log("Resultado Reduce", somaIdades);

// ----

const nomesMaiores = people
.filter(p => p.age >= 18)
.map(p => p.name.toUpperCase()); // letras maiusculas

console.log(nomesMaiores);

// ----

// 18 ou mais

const somarMaiores = people
.filter(p => p.age >= 18)
.reduce((acc, p) => acc + p.age, 0);

console.log(somarMaiores);