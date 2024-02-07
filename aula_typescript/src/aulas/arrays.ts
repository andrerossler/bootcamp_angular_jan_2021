import type { Aluno } from "src/exemplos/exemplo-objetos";

const alunos = ["André","João","Maria"];

export function listaDeAlunos(){
    
    console.log("ponto 1");
    for (let contador = 0; contador < alunos.length; contador++) {
        const element = alunos[contador];
        console.log(element);        
    }
    console.log("ponto 2");
    for (const valores of alunos) {
        console.log(valores);                
    }
    console.log("ponto 3");
    
    alunos.forEach((itemdoArray) => {
        console.log(itemdoArray);
    });
    console.log("ponto 4");
    meuForEach(alunos, mostraAluno);
}

function mostraAluno(item: any){
    console.log(item);
} 

function meuForEach(colecao: Array<any>, callback: Function) {
    for (const elemento of colecao) {
        callback(elemento);
    }
}

export function somaNotas(notas:Array<number>){
    /*
    let soma = 0;
    for (const nota of notas) {
        soma = soma + nota;        
    }
    return soma;
    */
   return notas.reduce((soma,nota) => soma + nota , 0);
}

class AlunoClasse implements Aluno{    
    constructor(public nome: string, public nota: number) {}
}

export function criaAluno(){
    const aluno = new AlunoClasse("André", 8);
}

export function montaTurma(){
    return [
        new AlunoClasse("André", 10),
        new AlunoClasse("João", 8),
        new AlunoClasse("Maria", 10),
    ];
}

export function filtraAlunoPorNota(turma: Array<Aluno>, nota: number){
/*    
    let turmaFiltrada:any = [];
    for (const Alunos of turma) {
        if  (Alunos.nota === nota) {   
            turmaFiltrada.push(Alunos);
    }
    }
    return turmaFiltrada;
*/
   return turma.filter(Alunos => Alunos.nota === nota);
}
export function buscaAlunoPorNota(turma: Array<Aluno>, nota: number){
    return turma.find(Alunos => Alunos.nota == nota);
}

export function tirarPontoTurma(turma: Array<Aluno>, pontoNegativo:number) {
    let turmaNegativa:Array<Aluno> = [];

    turmaNegativa = turma.map((aluno)=> {
        aluno.nota -= pontoNegativo;
        return aluno;
});
return  turmaNegativa;
}