// Linguagem Interpretada
/*let minhaVariavel = 10;

console.log(minhaVariavel);

minhaVariavel = "Olá, mundo!!";

console.log(minhaVariavel);

minhaVariavel = true;
console.log(minhaVariavel);

let numero = 10;
let texto = "20";
let resultado = numero + texto;

console.log(resultado);
*/

//Variável

//let Palavra que cria a variável
//const
//var


/*let nome = "Lucas";
let idade1 = 35;

console.log(nome);
console.log(idade1);
console.log(idade1 + 1);
console.log("Olá, " + nome + "!");

idade1 = 30;

const idade2 = 35;
idade2 = 30;
*/


//Case Sensitive = sensivel a maiuscula 

/*
let nome = "Lucas";
let Nome = "Maria";
let NOME = "Otavio";

console.log(nome);
console.log(Nome);
console.log(NOME);
*/

//Palavras Reservadas
// let, const, var, if, else, for, while, function, return, class, new, switch, case

// let if = "teste";

//Regras de Nomenclatura
// Pode Começar com letra, _ ou $
//Pode conter: letras, números, _ ou $

/*
let idade = 20;
idade = 21;
console.log(idade);

const PI = 3.14169;

const total = 150;

if(total > 100){
    var desconto = 10;
    let frete = 0;
}

console.log(frete);
*/

 //Tipos Primitivos
 /*
 const preco = 19.9;
 console.log(typeof preco);

const nome = "Lucas";
console.log(typeof nome);

const ativo = true;
console.log(typeof ativo);

const vazio = null;
console.log(typeof vazio);

let indefinido;
console.log(typeof indefinido);
*/
/*
const nome1 = "Lucas";
const nome2 = 'Maria';
const nome3 = `João`;
const idade = 22;

const nomeCompleto = "Otávio Fernandes de Oliveira Menezes";

console.log(nomeCompleto.length); //contas letra por letra e espaços
console.log(nomeCompleto.toUpperCase()); //letras maiusculas
console.log(nomeCompleto.toLowerCase()); //letras minusculas

console.log(`Olá, meu nome é ${nomeCompleto} e tenho ${idade} anos`);
*/

//Conversão de Tipos

/*
console.log(Number("123"));

console.log(parseInt("10.9")); //numero inteiro

console.log(parseFloat("10;9")); //numero quebrado

console.log(String(123)); //trasforma em string

console.log(Boolean(0)); // 0 é falso e 1 é verdadeiro

console.log(Boolean("")); //string vazia é falso

const texto1 = prompt("Digite um número: ")
const texto = Number(prompt("Digite um número: "));

console.log(texto + 5);
*/

//Arredondamento e Formatado números

/*
const preco = 19.987;

console.log(preco.toFixed(2)); // fixa o números que quero deixar na tela 
console.log(Math.round(preco)); // valor mais proximo
console.log(Math.floor(preco)); //arredondar para baixo
console.log(Math.ceil(preco)); //arredondar para cima 
*/


//Operadores Aritméticos

// console.log(2 + 3);
// console.log(5 - 2);
// console.log(4 * 2);
// console.log(10 / 2);
// console.log(10 % 3);
// console.log(2 ** 3);

//Operadoresde Comparação
// console.log(5 == "5"); //igual frouxo
// console.log(5 == 5); //igual frouxo

// console.log(5 === "5") //igual estrito

// console.log(5 != "5"); //diferente frouxo

// console.log(5 != 7); // diferente frouxo

// console.log(5 !== "7"); // diferente estrito
// console.log(5 !== 7); // diferente estrito

//Média de duas notas

// const n1 = Number(prompt("Primeira nota: "));
// const n2 = Number(prompt("Segunda nota:"));

// const media = (n1 + n2) / 2;
// console.log(`Média: ${media.toFixed(1)}`);

//IMC (Índice de Massa Comporal)

// const peso = Number(prompt("Digite o seu peso (kg):"));

// const altura = Number(prompt("Altura (m):"));

// const imc = peso / (altura ** 2);
// alert(`IMC ${imc.toFixed(2)}`);