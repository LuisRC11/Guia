//array, lista, objeto o vector
//Son un conjunto de variables
//Los objetos son entidades que tienen atributos y 
//los atributos son todas las caracteristicas que pertenecen al objeto
//Ejemplo de como declarar un array
const datos= [1,"Hola", true, undefined, null];

const datos2 = new Array (1, "Hola", true, undefined, null);

const datos3 = new Array(3); //-->array con llenado posterior a la declaracion 
datos3[1] = "Hola Mundo";
datos3[0] = 1;

const datos4 = [datos, datos2, datos3]; //---> Listas de listas

//Ejemplo de impresion 
console.log(datos);
console.log(datos2);
console.log(datos3);
console.log(datos4);

//Objetos 
//Ejemplo de un objeto 
const alumno /*<---- Objeto */ = {
    //Atributos
    edad: 15,
    peso: 80,
    nombre: "Pedro",
    isBlack: false,
    amistades: ["confi1", "confi2", "confi3", "confi4"]
}

//Impresion del objeto
console.log(alumno);

//impresion especifica
console.log(alumno.amistades);