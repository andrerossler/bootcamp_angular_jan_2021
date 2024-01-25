export function exemploTipos(){
    //const quando a variavel não precisara ser alterada
    let numero:number = 5;
    let nome:string = 'Andre';
    let ehHumano:boolean = true;
    
    console.log('O numero é ' + numero.toString());
    console.log('O nome é ' + nome);
    console.log('Ele é humano? ' + ehHumano);    
}

export function exemploIfLoop(){
    let contador = 0;
    while (contador <= 10) {
        let nome = 'André ';
        console.log(nome + contador);
        // "&&"" representa o AND e o "||" representa o OR
        // utilizar sempre 3 iguais "===", pois compara também as referecias dos objetos além dos conteúdos
        // dois iguais compara apenas conteúdo
        if (contador === 2 || contador === 4){
            console.log('chegou ao dois');
        } else {
            console.log('Não chegou ao dois');
        }       
        contador++;
    }
}