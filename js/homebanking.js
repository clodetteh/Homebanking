//Declaración de variables
var nombreUsuario = "Claudia Hernandez";
var saldoCuenta = 6000;
var limiteExtraccion = 4000;
var cantidadDinero;
var peticiones;
var codigo = 1234;
var pedircodigo = parseInt(prompt("Ingresar contraseña"));
var value;

//variables servicios
var montoPagar;
var servicio;

//Variables transferencias
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.


window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//validaciones

function validateType(num) {
    if (!isNaN(num) && value >= -1) {
        cantidadDinero = peticiones;
        return true;
    } else {
        invalidNumberMessage();
        return false;
    }
}

function invalidNumberMessage() {
    alert("¡Este valor no es valido! \nDebes ingresar un número positivo");
}

function promptOrDefault(text) {
    value = prompt(text);
    if (value != "" && value != null) {
        value = parseInt(value);
    } else {
        value = 0;
    } return value
}

function avaliableBalance(saldo) {
    if (saldo > saldoCuenta) {
        alert("No hay suficiente saldo en tu cuenta para esta transacción");
        return false;
    } return true;
}

function validateLimit() {
    if (cantidadDinero > limiteExtraccion) {
        alert("¡No has podido extraer! \nLa cantiad de dinero es mayor a tu limite de extracción \nTu limite actual es de $" + limiteExtraccion);
        return false
    } return true;
}

function validateMultiples() {
    if (cantidadDinero % 100 == 0) {
        return true;
    } else {
        alert("¡Error en la extracción! \nSolo puedes extraer billetes de 100");
        return false;
    }
}



//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    peticiones = promptOrDefault("¿Cuál es tu nuevo limite?");
    if (validateType(peticiones) && value !== 0) {
        limiteExtraccion = peticiones;
        alert("Tu nuevo limite de extracción es de $" + limiteExtraccion);
        actualizarLimiteEnPantalla();
    }
}

function extraerDinero() {
    peticiones = promptOrDefault("¿Cuánto dinero quieres extraer?");
    if (validateType(peticiones) && validateLimit() && avaliableBalance(peticiones) && validateMultiples() && value !== 0) {
        var saldoAnterior = saldoCuenta;
        saldoCuenta -= cantidadDinero;
        alert("Has retirado: " + cantidadDinero + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta)
        actualizarSaldoEnPantalla();
    }
}

function depositarDinero() {
    peticiones = promptOrDefault("¿Cuánto dinero quieres depositar?");
    if (validateType(peticiones) && value !== 0) {
        var saldoAnterior = saldoCuenta;
        saldoCuenta += cantidadDinero;
        alert("Has depositado: " + cantidadDinero + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta)
        actualizarSaldoEnPantalla();
    }
}

function pagarServicio() {
    peticiones = promptOrDefault("Ingrese el número que corresponda con el servicio que quieres pagar \n1 - Agua \n2 - Luz \n3 - Internet \n4 - Teléfono");
    var saldoAnterior = saldoCuenta;
    if (value !== 0) {
        switch (peticiones) {
            case 1:
                montoPagar = 350;
                servicio = "Agua";
                break;

            case 2:
                montoPagar = 210;
                servicio = "Luz";
                break;

            case 3:
                montoPagar = 570;
                servicio = "Internet";
                break;

            case 4:
                montoPagar = 425;
                servicio = "Telefono";
                break;

            default:
                alert("El servicio ingresado es invalido");
                break;
        }
    }

    if (validateType(peticiones) && avaliableBalance(montoPagar) && value !== 0) {
        saldoCuenta -= montoPagar;
        alert("Has pagado el servicio de " + servicio + "\nDinero descontado: " + montoPagar + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta);
        actualizarSaldoEnPantalla();
    }

}

function transferirDinero() {
    peticiones = promptOrDefault("Ingresa el monto que deseas transferir");
    if (validateType(peticiones) && avaliableBalance(peticiones) && value !== 0) {
        var accountNumber = parseInt(prompt("Ingresa el número de la cuenta amiga"));
        if (accountNumber == cuentaAmiga1) {
            saldoCuenta -= peticiones;
            alert("Se ha transferido $" + peticiones + "\n" + "Cuenta destino: " + cuentaAmiga1)
            actualizarSaldoEnPantalla();
        } else if (accountNumber == cuentaAmiga2) {
            saldoCuenta -= peticiones;
            alert("Se ha transferido $" + peticiones + "\n" + "Cuenta destino: " + cuentaAmiga2)
            actualizarSaldoEnPantalla();
        } else {
            alert("¡La cuenta ingresada no es valida! \nSolo puedes transferir a cuentas amigas")
        }
    }
}

function iniciarSesion() {
    if (pedircodigo == codigo) {
        alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones");
        return true;
    } else {
        saldoCuenta = 0;
        nombreUsuario = "usuario";
        alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

