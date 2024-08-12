
//realizar un programa que realice la funcion de una calculadora basica que sume que 
//reste muñtiplique o divida dependiendo lo que el usuario indique

let operacion = "r";

let n1 = 10;
let n2 = 2;

let res;

switch (true){
    case(operacion === "s"):
    res = n1 + n2;
    console.log(+res);
    break;
    case(operacion === "r"):
    res = n1 - n2;
    console.log(+res);
    break;
    case(operacion === "d"):
    res = n1 / n2;
    console.log(+res);
    break;
    case(operacion === "m"):
        res = n1 * n2;
        console.log(+res);
}