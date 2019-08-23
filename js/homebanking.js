//Declaración de variables
var nombreUsuario = "Claudia Hernandez";
var saldoCuenta = 6000;
var limiteExtraccion = 4000;
var deposito = parseInt(prompt("¿Cuánto dinero quieres depositar?"));


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}



//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

}

function extraerDinero(valor) {
    var saldoAnterior = saldoCuenta;
    return saldoCuenta -= valor;
}

function depositarDinero(valor) {
    var saldoAnterior = saldoCuenta;
    saldoCuenta += valor;
    actualizarSaldoEnPantalla();
    alert("Has depositado: " + deposito + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta)
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

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

