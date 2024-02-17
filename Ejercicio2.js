/*
Ejercicio 2: Sumando los valores de un arreglo
Crear un array con 3 valores numericos y sumar todos esos valores accedendolos mediante las posiciones.
Al finalizar enviar un archivo o imagen con lo descrito anteriormente a tony.ospino@academlo.com
*/
var arreglo=[16,2,2024];
//Sumando posicion por posicion
console.log("La suma de los datos del array(" + arreglo +") es : "  + (arreglo[0] + arreglo[1] + arreglo[2]));
var suma = 0
arreglo.map((item) => suma = suma + item );
// Iterar sobre el arreglo y sumar los elementos
for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
}
console.log("La suma de los datos del array(" + arreglo +") es : "  + (arreglo[0] + arreglo[1] + arreglo[2]));