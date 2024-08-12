
function calcularFctorial(n){
   
    let factorial=1;
    for(let i=1;i<=n; i++){
        factorial*=i;
    }
    return factorial;
}

    const numero=5;
    console.log(`factorial ${numero} es ${calcularFctorial(numero)}`);
