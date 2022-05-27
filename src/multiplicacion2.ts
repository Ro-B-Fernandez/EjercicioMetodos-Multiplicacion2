//Multiplicación

let cantidad: number = Number(prompt("Ingrese la cantidad de vectores:"));
let vector1: number[] = new Array(cantidad);
let vector2: number[] = new Array(cantidad);
let vector3: number[] = new Array(cantidad);
let vector4: number[] = new Array(cantidad);
let total: number[] = new Array(cantidad);
let indice: number;


//Metodo
let multiplicarArreglo = (v1: number[], v2: number[], v3: number[], v4: number[], cantidad: number): number => {

  for(indice = 0; indice < cantidad; indice++){
    total[indice] = v1[indice] * v2[indice] * v3[indice] * v4[indice];
  }
  return total;
}

//Funcion cargar vector
function cargarVector(v: number[], cantidad: number) {
  for (indice = 0; indice < cantidad; indice++) {
    v[indice] = Number(prompt("Ingrese el valor de la posicion [" + indice + "]: "));
  }
}

//Cargo los vectores

cargarVector(vector1, cantidad);
cargarVector(vector2, cantidad);
cargarVector(vector3, cantidad);
cargarVector(vector4, cantidad);

console.log("El resultado es: " + "[" + multiplicarArreglo (vector1, vector2, vector3, vector4, cantidad) + "]");
;




