
//realizar un programa que muestre una letra de acuerdo a la calificaion de un alumno, si el alumno obuvo de 90 a 100 muestre la letra a, si el alumno obtuvo de 80 a 89 murestre la b
//si el alumno obtuvo de 70 a 79 c
//d de 60 a 69
//f de 59 a 0

let cal = 0;

if (cal >=90 && cal <= 100){
    console.log("a")
}else if (cal >=80 && cal <= 89){
    console.log("b");
}
else if (cal >=70 && cal <= 79){
    console.log("c");
}else if (cal >=60 && cal <= 69){
    console.log("d");
}else if (cal <60 ){
    console.log("f");
}