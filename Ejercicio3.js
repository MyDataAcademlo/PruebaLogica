/*
Ejercicio 3: creando un objeto
Crear un objeto de nombre user son las propiedades nombre, apellidos y edad, 
despues de crear el objeto crear una nueva variable llamada nombreCompleto de tipo string 
y guardar en esta variable el nombre y el apellido concatenados.
Al finalizar enviar un archivo o imagen con lo descrito anteriormente a tony.ospino@academlo.com
*/
var user={
    nombre:"Duhan",
    apellido:"Renteria",
};
var nombreCompleto = user.nombre + " " + user.apellido;
console.log("Nombre del usuario: "+ nombreCompleto);