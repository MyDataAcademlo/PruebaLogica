/*Ejercicio 4: obteniendo correos de usuarios
1.Crear un arreglo con 5 objetos, 
    cada uno de estos objetos debe de tener las propiedades nombre, email y edad, con valores asignados por ti.
2. Crear un arreglo de nombre correos y guardar todos los correos que existan en el arreglo del primer paso
    (debes de acceder a los correos apoyandote en lo aprendido anteriormente).
3. Enviar tu ejercicio al correo tony.ospino@academlo.com
*/
var usuarios = [
    {
        nombre:"Alex",
        email:"alex@example.com",
        edad:18,
    },
    {
        nombre:"Noa",
        email:"noa@example.com",
        edad:28,
    },
    {
        nombre:"Alan",
        email:"alan@example.com",
        edad:8,
    },
    {
        nombre:"Duhan",
        email:"duhan@example.com",
        edad:35,
    },
    {
        nombre:"Dairon",
        email:"dairon@example.com",
        edad:31,
    }
];

//Obteniendo los correos del arreglo usuarios posicion por posicion
var correos = [
    usuarios[0].email,
    usuarios[1].email,
    usuarios[2].email,
    usuarios[3].email, 
    usuarios[4].email
];

console.log("Los datos del array correo son: " + JSON.stringify(correos));
// Iterar sobre el usuarios y extraer los elementos
correos = [];
for (let i = 0; i < usuarios.length; i++) {
    correos.push(usuarios[i].email)
}
console.log("Los datos del array correo son: " + JSON.stringify(correos));
