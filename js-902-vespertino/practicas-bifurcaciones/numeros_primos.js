
//Realizar un programa que muestre todos los numeros primos en el rango que el usuario ingrese

let inicio =1;
let fin = 1000;

for (let i = inicio; i<= fin; i++){
    let primo = true;

    if (i <= 1){
        primo = false;
    }else {
        for (let j = 2; j<=i/2; j++){
            if (i % j ===0){
                primo = false;
                break;
            }
        }
    }
    if (primo){
        console.log(i)
    }
}