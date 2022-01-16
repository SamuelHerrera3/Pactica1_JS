/*Arreglo de objetos que 
contenga la información consignada en 
el formulario de registro*/
let registros = [];

//Arreglo de objetos para la funcion agregarRegistro, actua como si se hubiera hundido el boton Registrar
let estructura = [
    {username: 'Jose', contrasena: 'SecurePassword123', pregunta_de_seguridad: 'C', respuesta_de_seguridad: 'Carro'},
    {username: 'Miguel03', contrasena: 'SecurePassword123', pregunta_de_seguridad: 'B', respuesta_de_seguridad:'Bota'},
    {username: 'Bob', contrasena: 'SecurePassword123', pregunta_de_seguridad: 'B', respuesta_de_seguridad: 'Torre'},
    {username: '02Juan', contrasena: 'SecurePassword123', pregunta_de_seguridad: 'F', respuesta_de_seguridad: 'Fruta'},
    {username: 'Laura', contrasena: 'SecurePassword123', pregunta_de_seguridad: 'L', respuesta_de_seguridad: 'Lago'}]


/* Función agregarRegistro la cual estará encargada de realizar las operaciones necesarias 
para tomar la información ingresada en el formulario de registro y guardarla en el arreglo.*/
function agregarRegistro(){
    if (registros == 0){
        //console.log ("entro");
        registros[0] = estructura[0];
    }
    else {
        //console.log("no entro");
        for (var i in estructura){
            registros.push(estructura[i]);
        }
    }
    return console.log(registros);
}

/*Ordenar el contenido del arreglo a 
partir del campo Username de manera 
ascendente*/
function ordenarArreglo(arreglo) {
    arreglo.sort(function(a, b) {
        if (a.username > b.username) {
            return 1;
        } else {
            return -1;
        }
    });
    //console.log(registros);
    return arreglo;
}

/*Obtener aquellos registros que en su 
nombre de usuario contienen números 
dentro de sí.*/
function obtenerUsername(arreglo){
    
    for (var x in arreglo){
        let usuario = arreglo[x].username;
        let ex = new RegExp(/[\d]/);
        if ( ex.test(usuario)) {
            //console.log("entro")
            registros.push(arreglo[x]);
        }
    }
    return registros;
}

/*Filtrar aquellos registros que 
contengan un nombre de usuario con 
una longitud mayor a 10 caracteres.*/
function filtrarUsername(arreglo) {
    let objUsuario = arreglo.filter(m => (m.username.length > 10));
    return objUsuario;
}

module.exports.registros = registros;
module.exports.filtrarUsername = filtrarUsername;
module.exports.obtenerUsername = obtenerUsername;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.agregarRegistro = agregarRegistro;
