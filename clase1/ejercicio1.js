//Numeros pares
let pares = (arreglo =[]) => arreglo.filter((item) =>item % 2 ==0 && item!=0);
console.log('Numeros pares: '+ pares([0, 3, 4, 6, 11]));

//Ejercicio cuadrados//
let cuadrado = (arreglo =[]) => pares(arreglo).map((item) =>Math.pow(item,2));
console.log ('Al cuadrado: '+ cuadrado([0, 3, 4, 6, 11]));