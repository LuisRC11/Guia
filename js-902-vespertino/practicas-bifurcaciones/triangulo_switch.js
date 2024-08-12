
//realizar si untriangulo es equilatero, isoceseles o escaleno segun las longitudes de sus lados 

let la = 1;
let lb = 2;
let lc = 3;


switch (true){
    case(la === lb && lb === lc):
    console.log("el triangulo es equilatero");
    break;
    case(la === lb || lb === lc || la === lc ):
    console.log("el triangulon es isoceles");
    break;
    default:
        console.log("el triangulo es escaleno");

}