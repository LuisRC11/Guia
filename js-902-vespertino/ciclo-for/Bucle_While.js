// Bucle While
/**Estructura
 * while (condicion ){
 *      Bucle
 * }
 */

//While 
let i = 0;
let a = 10;

while(i < a){
    console.log(i);
    //IMPORTANTE ---> tengo que agregar la actualizacion a mi contador
    // de lo contrario el bucle no se va a detener
    i++;
}

//do...while
i = 15 ;
do{
    console.log("EL BUCLE");
}while (i < a)