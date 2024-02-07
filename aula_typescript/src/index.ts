import { listaDeAlunos, montaTurma, somaNotas, tirarPontoTurma } from "./aulas/arrays";
import { exemploIfLoop, exemploTipos } from "./aulas/primitivos";
import { filtraAlunoPorNota } from "./exemplos/exemplo-objetos";

//exemploIfLoop();
//listaDeAlunos();
/*
const notas = [5, 10, 7];

const somaDasNotas = somaNotas(notas);
//console.log("A soma das notas é:", somaDasNotas);

const turma = montaTurma();

const novaTurma = filtraAlunoPorNota(turma, 10);
//console.log(novaTurma);
console.log(tirarPontoTurma(turma,3));
*/

const turma = [
    {nome: 'André',  nota: 10, endereco: 'Rua 01'}, 
    {nome: 'José', nota: 9},
    {nome: 'Maria', nota: 9},
];

console.log(filtraAlunoPorNota(turma, 9));