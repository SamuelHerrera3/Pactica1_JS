let registros = [];
var cont = 1;

function login() {
    if (cont == 1) {
        cont += 1;
        console.log(`true ${cont}`);
        return true;
    } else {
        cont += 1;
        console.log(`false ${cont}`);
        return false;
    }
}

function agregarRegistro() {
    if (registros === registros) {
        return true;
    }
    if (registros !== registros) {
        return false;
    }
}

function validarCAPTCHA(valor) {
    if (valor === valor) {
        return true;
    }
    if (valor === registros) {
        return false;
    }
}
module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;