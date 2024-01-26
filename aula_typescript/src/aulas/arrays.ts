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

class Alunos {    
    constructor(public nome: string, public nota: number) {}
}

export function criaAluno(){
    const aluno = new Alunos("André", 8);
}

export function montaTurma(){
    return [
        new Alunos("André", 10),
        new Alunos("João", 8),
        new Alunos("Maria", 10),
    ];
}

export function filtraAlunoPorNota(turma: Array<Alunos>, nota: number){
    let turmaFiltrada:any = [];
    for (const Alunos of turma) {
        if  (Alunos.nota === nota) {   
            turmaFiltrada.push(Alunos);
    }
    }
    return turmaFiltrada;
}