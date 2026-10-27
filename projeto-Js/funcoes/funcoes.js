// const precoA = 100;
// console.log("Preço final A: ", precoA - precoA * 0.1);

// const precoB = 150;
// console.log("Preço final B: ", precoB - precoB * 0.1);

// const precoC = 200;
// console.log("Preço final C: ", precoC - precoC * 0.1);

// function aplicarDesconto(preco) {
//     return preco - preco * 0.1;
// }

// console.log("Preço final A:", aplicarDesconto(100));
// console.log("Preço final B:", aplicarDesconto(150));
// console.log("Preço final C:", aplicarDesconto(200));

// ------------------

// function saudar () {
//     console.log("Olá, bem-vindo ao curso!");
// }

// function saudar(nome) {
//     console.log("Olá, " + nome + "!");
// }

// saudar("tatavio!");

// ---------------------

// function apresentar(nome, idade) {
//     console.log(`${nome} tem ${idade} anos.`);
// }

// apresentar ("Otavio", 22);

// apresentar(35, "tatavio");

// -------------------

// function cumprimentar(nome = "Visitante") {
//     console.log(`Bem-vindo, ${nome}`);
// }

// cumprimentar("Lucas");
// cumprimentar();

//----------------------

// function somar (a, b) {
//     console.log(a + b);
// }

// somar(2, 3);
// somar(2);
// somar(2, 3, 4);

// -----------------------

// function dobroMostra(n) {
//     console.log(n * 2);
// }

// function dobroDevolve(n) {
//     return n * 2;
// }

// dobroMostra(5);
// const b = dobroDevolve(5);

// -----------------------

// function classificar(idade) {
//     if (idade < 0) {
//         return "Idade inválida!"  //return termina a função, morre
//     }

//     if (idade >= 18) {
//         return "Maior de idade!"
//     }
//     return "Menor de idade!"
// }

// console.log(classificar(20));
// console.log(classificar(-5));
// console.log(classificar(10));
// console.log(classificar(50));

// ----------------------

// function estatistica(a, b) {
//     return {
//         soma: a + b,
//         media: (a + b) / 2,
//     };
// }

// const resultado = estatistica(4, 10);

// console.log(resultado.soma);
// console.log(resultado.media);

// ----------------------

// function ehPar(n) {
//     return n % 2 === 0;
// }

// function descrever(n) {
//     return ehPar(n) ? "Par" : "Ímpar";
// }

// console.log(descrever(4));
// console.log(descrever(7));

// -------------------------

const dobro = function (n) {
    return n * 2;
};

console.log(dobro(4));

function quadrado1(n) {
    return n * n;
};


const quadrado2 = function (n) {
    return n * n;
};

const quadrado3 = (n) => { //ligação anonima
    return n * n;
};

const quadrado4 = n => n * n;

const somar = (a, b) => a + b;

const oi = () => "OI!!";

const criarAluno = nome => ({nome: nome, ativo: true});
console.log(criarAluno("Otavio"));


const criarAlunoErrado = nome => {nome: nome};
console.log(criarAlunoErrado("Otavio"));