// Saudações personalizada -----

// const nome = prompt("Olá, qual seu nome?");
// alert(`Olá, ${nome}!`);

// Leia dois números, some e mostre com 2 casas decimais. ----

/*
const n1 = 10;
const n2 = 5.5;

const resultado = n1 + n2;

alert(`O valor total é: ${resultado.toFixed(2)}`);
*/

//Converter centímetros para polegadas (1 in = 2,54 cm) ----

// const centimetro = Number(prompt("Qual é a medida em (cm)?"));
// const polegadas = centimetro / 2.54;

// console.log(`${centimetro} cm = ${polegadas.toFixed(2)} polegadas`);

// Converter anos em meses, dias, horas e minutos (use 365 dias por ano como simplificado) ----

const anos = Number(prompt("Digite a sua idade em anos: "));
const meses = anos * 12;
const dias = anos * 365;
const horas = dias * 24;
const minutos = horas * 60;

console.log(`Idade informada: ${anos} anos:`);
console.log("----------");
console.log(`${meses} meses`);
console.log(`${dias} dias`);
console.log(`${horas} horas`);
console.log(`${minutos} minutos`);