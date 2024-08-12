//realizar un programa que sume los numeros del 1 al 100 usando while 

let a = 1;
let suma = 0;

while (a <= 100){
    suma += a;
    a++;
}
console.log("la suma es "+suma)


//realizar un programa que sume los numeros del 1 al 100 usando do while
let b = 1;
let suma2 = 0; 
do{
    suma2 += b;
    b++;
}while(b <= 100);
console.log("la suma es "+suma2)
