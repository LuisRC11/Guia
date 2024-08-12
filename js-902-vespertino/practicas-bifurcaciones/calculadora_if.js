
//realizar un programa que realice la funcion de una calculadora basica que sume que 
//reste muñtiplique o divida dependiendo lo que el usuario indique

let operacion = "s";

let n1 = 10;
let n2 = 2;

let res;


if (operacion === "s"){
    res = n1 + n2;
    console.log(+res);
}else if (operacion === "r"){
    res = n1 - n2;
    console.log(+res);
}else if (operacion === "d"){
    res = n1 / n2;
    console.log(+res);
}else if (operacion === "m"){
    res = n1 * n2;
    console.log(+res);
}