export function exemploTipos(){
    //const quando a variavel n��o precisara ser alterada
    let numero:number = 5;
    let nome:string = 'Andre';
    let ehHumano:boolean = true;
    
    console.log('O numero �� ' + numero.toString());
    console.log('O nome ?' + nome);
    console.log('Ele ? humano? ' + ehHumano);    
}

export function exemploIfLoop(){
    let contador = 0;
    while (contador <= 10) {
        let nome = 'Andr? ';
        console.log(nome + contador);
        // "&&"" representa o AND e o "||" representa o OR
        // utilizar sempre 3 iguais "===", pois compara tamb��m as referecias dos objetos al��m dos conte��dos
        // dois iguais compara apenas conte��do
        if (contador === 2 || contador === 4){
            console.log('chegou ao dois');
        } else {
            console.log('N?o chegou ao dois');
        }       
        contador++;
    }
}