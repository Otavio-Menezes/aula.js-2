// Peça a cor do semáfaro (`"verde"`, `"amarelo"`, `"vermelho"`) e diga a ação.

// const farol = prompt("Cor do semáforo (verde/amarelo/vermelho");

// if (farol === "verde" || farol === "Verde") {
//     console.log("Pode ir!");

// } else if (farol === "amarelo" ||  farol === "Amarelo") {
//     console.log("Tenha cuidado");

// } else if (farol === "vermelho" || farol === "Vermelho") {
//     console.log("Pare e espere o farol abrir");
// } else {
//     console.log("Cor inválida");
// }

// --------------

// const nota = Number(prompt("Digite sua nota:"));

// if (nota < 0 || nota < 60) {
//     console.log("Você foi reprovado, que pena!");
// } else if (nota >= 60 && nota <= 79) {
//     console.log("Você está de recuperação, boa sorte!");
// } else if (nota >= 80 && nota <= 100) {
//     console.log("Parabéns, você foi aprovado");
// } else  {
//     console.log("Nota Inválida.");
// }

/* -----------
Login com && e ||
Acesso liberado se (usuário é `admin` OU `gerente`) E senha é `1234`.
**Exemplo:** `admin` e `1234` → `Acesso liberado` · `admin` e `0000` → `Acesso negado`
*/

// const user = prompt("Usúario: ");
// const pass = prompt("Digite sua senha");

// const perfilOk = (user === "Admin" || user === "Gerente");

// const senhaOk = (pass === "1234");

// if (perfilOk && senhaOk) {
//     console.log("Ben-vindo: "+ user);
// } else {
//     console.log("Acesso negado");
// }

//  const idade =Number(prompt("Qual é a sua idade?"));

// if (Number.isNaN(idade)) {
//     console.log("Idade inválida.");
// } else if (idade >= 18) {
//     console.log("Você pode tirar a carteira de motorista.");
// } else if (idade < 18) {
//     console.log("Você ainda não tem idade para dirigir.");
// } 


//----------

//Use o resto da divisão (`%`) para dizer se um número é par ou ímpar. ---------

//**Exemplo:** `10` → `O número é par.` · `7` → `O número é ímpar.` · `abc` → `Número inválido.` --------- 

// const numero2 = Number(prompt("Digite um número:"));

// if (Number.isNaN(numero2)) {
//     console.log("Número inválido!");
// } else if (numero2 % 2 === 0) {
//     console.log("O número é par!");
// } else {
//     console.log("O número é ímpar!")
// }

// -----------------

// Peça peso e altura, calcule o IMC e classifique:  ------- 
// <18.5 abaixo do peso, 18.5–24.9 normal, 25–29.9 sobrepeso, -------- 
// >=30 obesidade. Valide entradas inválidas. ---------

// **Exemplo:** peso `70` e altura `1.75` → `Seu IMC é: 22.86` e `Classificação: Peso normal` -----------

// const peso = Number(prompt("Digite seu peso:"));
// const altura = Number(prompt("Digite sua altura:"));

// const imc = peso / (altura ** 2);


// if (Number.isNaN(peso) || Number.isNaN(altura) ||imc < 18.5 || peso <= 0 || altura <= 0) {
//     console.log("Você está abaixo do peso.");
// } else if (imc >= 18.5 || imc <= 24.9) {
//     console.log("Seu imc é: " + imc.toFixed(2) + ", Está no seu peso ideal!");
// } else if (imc >= 25 || imc <= 29.9) {
//     console.log(`Seu imc é: ${imc.toFixed(2)}, Está com sobrepeso!`);
// } else {
//     console.log("Você está com obesidade, cuide-se.");
// }

//-----------

// Se o valor da compra for maior que R$ 100, aplicar 10% de desconto. ---------

// **Exemplo:** `150` → `Valor final com desconto: R$ 135` · `80` → `Valor final: R$ 80` -----------


//--------------

// const desconto = Number(prompt("Qual o valor da sua compra?"));



// if (Number.isNaN(desconto) || desconto < 0)  {
//     console.log(`O valor é inválido`);
// } else if (desconto > 100) {
//     const valor = desconto * 0.1;
//      console.log("O valor final com desconto é de: " + (desconto - valor));
// } else {
//     console.log("Valor final: R$ " + desconto);
// }

// ------------------

// Peça 3 números e diga qual é o maior.

// **Exemplo:** `4`, `9` e `7` → `O maior número é: 9`


// const numero1 = Number(prompt("Digite um o primeiro valor:"));
// const numero2 = Number(prompt("Digite um o segundo valor:"));
// const numero3 = Number(prompt("Digite um o terceiro valor:"));

// if (Number.isNaN(numero1) || Number.isNaN(numero2) || Number.isNaN(numero3)) {
//     console.log("Numero invalido!");
// } else {
//     let maior = numero1;
//     if (numero2 > maior) maior = numero2;
//     if (numero3 > maior) maior = numero3;
//     console.log("O maior número é: " + maior);
// }

const nun1 = Number(prompt("Digite o primeiro número:"));
const nun2 = Number(prompt("Digite o segundo número:"));
const op = prompt("Digite a operação (+, -, *, /):");
let resultado;

if (Number.isNaN(nun1) || Number.isNaN(nun2)) {
    console.log("Entrada inválida.")
} else {

    switch (op) {
        case "+":
            resultado = nun1 + nun2;
            console.log(`Resultado; ${resultado}`);
            break;
        case "-":
            resultado = nun1 - nun2;
            console.log(`Resultado; ${resultado}`);
        break;
        case "*":
            resultado = nun1 * nun2;
            console.log(`Resultado: ${resultado}`);
            break;
        case "/":
            if (nun2 === 0) {
                console.log("Divisão por zero não é permitida");
            } else {
                resultado = nun1 / nun2;
                console.log(`Resultado ${resultado}`);
            }
            break;

        default:
            console.log("Operação inválida");
    }
}