//Comece com uma fila vazia. Chegam Ana, Bia e Caio (nessa ordem). Atenda o primeiro da fila. Depois chega Duda com atendimento prioritário, que deve ir para o início. Mostre a fila a cada etapa.

//Saída esperada: `[ 'Ana', 'Bia', 'Caio' ]`, depois `[ 'Bia', 'Caio' ]`, depois `[ 'Duda', 'Bia', 'Caio' ]`

// const fila = [];

// fila.push("Ana");
// fila.push("Bia");
// fila.push("Caio");

// console.log(fila);

// // -- 

// fila.shift() // remove o primeiro array
// console.log(fila); // Tirou Ana do array

// // ----

// fila.unshift("DUda"); // adiciona em primeiro array
// console.log(fila);

// ------

//Crie `remover(lista, valor)` que remove o valor da lista (se existir) e devolve `true` se removeu ou `false` se não achou.

//Exemplo: `remover(["a", "b", "c"], "b")` devolve `true` e a lista vira `[ 'a', 'c' ]`

// function remover(lista, valor) {
//     const pos = lista.indexOf(valor); 

//     if (pos === -1) {
//         return false;
//     }

//     lista.splice(pos, 1);
//     return true
// }

// const letras = ["a", "b", "c"];
// console.log(remover(letras, "b"));

// console.log(letras);

// console.log(remover(letras, "z"));

// ----------

//Crie um objeto `aluno` com `nome` e `idade`. Depois: altere a idade, acrescente `curso`, remova a `idade` e mostre as chaves que sobraram.

//**Saída esperada:** `[ 'nome', 'curso' ]`

// const aluno = {nome: "otavio", idade: 22};

// aluno.idade = 25; // trocar a idade dentro do array
// console.log(aluno);

// // -- 

// aluno.curso = "Front-End";
// console.log(aluno);

// // -- 

// delete aluno.idade;
// console.log(aluno);

// console.log(Object.keys(aluno));

// -------------

//Dado um array de alunos `{ nome, nota }`, crie `mediaTurma(alunos)` e `melhorAluno(alunos)` (devolve o objeto do aluno com a maior nota).

//Exemplo: com Ana 8, Bia 5.5 e Caio 7 → média `6.833...` e melhor aluno `{ nome: 'Ana', nota: 8 }`


// function mediaTurma(alunos) {
//     let soma = 0;
//     for (const aluno of alunos) {
//         soma += aluno.nota;
//     }    
//     return soma / alunos.length; // quantidade de alunos
// }

// function melhorAluno(alunos) {
//     let melhor = alunos[0] //considerar que o primeiro array é o melhor aluno
//     for (const aluno of alunos) {
//         if (aluno.nota > melhor.nota) {
//             melhor = aluno;
//         }
//     }
//     return melhor;
// }
// const turma = [
//   { nome: "Ana", nota: 8 },
//   { nome: "Bia", nota: 5.5 },
//   { nome: "Caio", nota: 7 },
// ];

// console.log(mediaTurma(turma).toFixed(2));

// console.log(melhorAluno(turma));

// --------------

