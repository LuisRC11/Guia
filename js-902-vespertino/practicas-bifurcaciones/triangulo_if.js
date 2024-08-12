
//realizar si untriangulo es equilatero, isoceseles o escaleno segun las longitudes de sus lados 


let la = 2;
let lb = 1;
let lc = 3;

if (la === lb && lb === lc){
    console.log("el triangulo es equilatero")
}else {
    if(la === lb || lb === lc || la === lc ){
        console.log("el triangulon es isoceles");
    }else {
        console.log("el triangulo es escaleno");
    }
}