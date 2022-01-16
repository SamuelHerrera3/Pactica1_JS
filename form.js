// Validar el campo nombre de usuario. Este campo debe contener caracteres 
// alfanuméricos, una longitud no mayor a 30 dígitos y debe de requerírsele al 
// usuario de manera obligatoria, es decir, no puede dejarse vacío. 

function checkUsername() {
    let formulario = document.forms['form-registro'];
    let username = formulario['username'];
    let er = new RegExp(/[a-zA-Z0-9]*(1,30)/);
    if (er.test(username)) {
        return false;
    } else {
        return true;
    }
}

// Validación de la contraseña, en donde el usuario deba de ingresar por lo menos 
// una letra mayúscula, una minúscula, un número y con una longitud mayor o igual a 8 dígitos.
// Este campo es requerido, por lo que, no se puede dejar vacío


function checkContrasena() {
    let formulario = document.forms['form-registro'];
    let password = formulario['password'];
    let er = new RegExp(/[a-zA-Z0-9]+(1:8)/);
    if (er.test(password)) {
        return false;
    } else {
        return true;
    }
}

// Validación del campo de respuesta de seguridad, 
// en donde el contenido ingresado solo pueden ser
// caracteres alfanuméricos, debe tener una longitud no mayor a 30 dígitos
// y no puede dejarse vacío. 


function checkRespuestaSeg() {
    let formulario = document.forms['form-registro'];
    let Resp_Seguridad = formulario['Resp_Seguridad'];
    let er = new RegExp(/[a-zA-Z0-9]*(1:30)/);
    if (er.test(Resp_Seguridad)) {
        return true;
    } else {
        return false;
    }
}

// exportar las funciones

export default {
    checkUsername,
    checkContrasena,
    checkRespuestaSeg
};


