
function imprimirPiramide(filas){
    let nA=1;
    for(let i=1; i<=6; i++){
        let fila=``;
        for(let j=0; j< nA; j++){
            fila+=`*`;
        }
        console.log(fila);
        nA+=2;
    }
}
imprimirPiramide(6);