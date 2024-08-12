//Control de Bucle

let listNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i< listNum.length; i++){
    //Exclusion de un valor ---> parametro continue
    if (listNum[i] === 5){
        continue;
    }
    console.log(listNum[i]);

    //Interrumpir un bucle ----> parametro break 
    if (listNum[i] > 6 ){
        break;
    }
}