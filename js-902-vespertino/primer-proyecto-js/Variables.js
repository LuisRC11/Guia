//Variables
//Que es una variable?
//contenedor que puede tener un valor el cual puede ser borrado, actualizado, etc

//Declarar variables
var variableVAR;//variable de instancia 
//es ua variable que se declara en cualquier variable del codigo y se puede utilizar en un archivo 
//o mas archivos, en cualquier seccion del codigo, en clases pertenecientes al mismo proyecto 
//y ademas puede enviar datos y resivirlos en hacia programas externos mediante una API 
let variableLET;//variable local

//Ejemplo
for(var i = 3; i < 5; i++){// i es una variable local
    console.log(i)
}

var i=9;
console.log(i)//i es una variable de instancia independiente de la i dentro del for 
              
//Como se declaran las variables
var x;
x=0;
console.log(x)

var z =8;
console.log(z)

let s;
s = 7;
console.log(s)

let f=17;
console.log(f)

//Variable LET mal declarada o redundante
var variable ="soy una variable VAR";
let variable1 = "Soy una variable LET";
for(let i = 3; i < 5; i++){// i es una variable local
let variable1= "Soy una variable LET reutilizada";
}

//  Variable LET declarada despues de usarla 
var variable = "Soy una variable VAR";
for(let i=3; i<5; i++){//i e suna variable local 
    let variable1 ="soy una variable LET";
}
let variable1 ="Soy una variable LET";


