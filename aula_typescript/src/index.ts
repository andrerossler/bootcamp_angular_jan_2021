import { filtraAlunoPorNota, listaDeAlunos, montaTurma, somaNotas } from "./aulas/arrays";
import { exemploIfLoop, exemploTipos } from "./aulas/primitivos";


//exemploIfLoop();
//listaDeAlunos();
const notas = [5, 10, 7];

const somaDasNotas = somaNotas(notas);
//console.log("A soma das notas é:", somaDasNotas);

const turma = montaTurma();

const novaTurma = filtraAlunoPorNota(turma, 10);
console.log(novaTurma);