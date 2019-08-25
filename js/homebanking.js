//Declaración de variables
var nombreUsuario = "Claudia Hernandez";
var saldoCuenta = 6000;
var limiteExtraccion = 4000;
var cantidadDinero;
var peticiones;

//Variables servicios
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

//Variables transferencias
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//validaciones
function validateType(){
    if(!isNaN(peticiones)){
        cantidadDinero = peticiones;
        return true;
    }else{
        alert("¡Este valor no es valido! \nDebes ingresar un número");
        return false;
    }
}

function avaliableBalance (){
    if(cantidadDinero>saldoCuenta){
        alert("No hay suficiente saldo en tu cuenta para esta transacción");
        return false;
    }return true;
}

function validateLimit(){
    if(cantidadDinero > limiteExtraccion){
        alert("¡No has podido extraer! \nLa cantiad de dinero que deseas extraer es mayor a tu limite de extracción \nTu limite actual es de $" + limiteExtraccion);
        return false
    } return true;
}

function validateMultiples(){
    if (cantidadDinero % 100 == 0){
        return true;
    }else{
        alert("¡Error en la extracción! \nSolo puedes extraer billetes de 100");
        return false;
    }
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    peticiones = parseInt(prompt("¿Cuál es tu nuevo limite?"));
    if (validateType()){
        limiteExtraccion = peticiones;
        alert("Tu nuevo limite de extracción es de $" + limiteExtraccion);
        actualizarLimiteEnPantalla();
    }
}

function extraerDinero() {
    peticiones = parseInt(prompt("¿Cuánto dinero quieres extraer?"));
    if (validateType() && validateLimit() && avaliableBalance() && validateMultiples()){
        var saldoAnterior = saldoCuenta;
        saldoCuenta -= cantidadDinero;
        alert("Has retirado: " + cantidadDinero + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta)
        actualizarSaldoEnPantalla();
    }
}

function depositarDinero() {
    peticiones = parseInt(prompt("¿Cuánto dinero quieres depositar?"));
    if (validateType()){
        var saldoAnterior = saldoCuenta;
        saldoCuenta += cantidadDinero;
        alert("Has depositado: " + cantidadDinero + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta)
        actualizarSaldoEnPantalla();
    }
}

function pagarServicio() {
    peticiones = parseInt(prompt("Ingrese el número que corresponda con el servicio que quieres pagar \n1 - Agua \n2 - Luz \n3 - Internet \n4 - Teléfono"));
    if(validateType()){
        switch(peticiones){
            case 1 :
                cantidadDinero = agua;    
                if(avaliableBalance()){
                    var saldoAnterior = saldoCuenta;
                    saldoCuenta -= agua;
                    alert("Has pagado el servicio del agua\nDinero descontado: " + agua + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta)
                    actualizarSaldoEnPantalla();  
                } 
                break;
            case 2 :
                cantidadDinero = luz;    
                if(avaliableBalance()){
                    var saldoAnterior = saldoCuenta;
                    saldoCuenta -= luz;
                    alert("Has pagado el servicio del la luz\nDinero descontado: " + luz + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta)
                    actualizarSaldoEnPantalla();  
                }
                break;
            case 3 :
                cantidadDinero = internet;    
                if(avaliableBalance()){
                    var saldoAnterior = saldoCuenta;
                    saldoCuenta -= internet;
                    alert("Has pagado el servicio del internet\nDinero descontado: " + internet + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta)
                    actualizarSaldoEnPantalla();  
                }
                break;
            case 4 :
                cantidadDinero = telefono;    
                if(avaliableBalance()){
                    var saldoAnterior = saldoCuenta;
                    saldoCuenta -= telefono;
                    alert("Has pagado el servicio del teléfono\nDinero descontado: " + telefono + "\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Saldo actual: " + saldoCuenta)
                    actualizarSaldoEnPantalla();  
                }
                break;
            default :
                alert("No existe el servicio seleccionado");        
        }
    }
}

function transferirDinero() {
    peticiones = parseInt(prompt("Ingresa el monto que deseas transferir"));
    if(validateType() && avaliableBalance()){
        var accountNumber = parseInt(prompt("Ingresa el número de la cuenta amiga"));
        if(accountNumber == cuentaAmiga1){
            saldoCuenta -= peticiones;
            alert("Se ha transferido $" + peticiones + "\n" + "Cuenta destino: " + cuentaAmiga1)
            actualizarSaldoEnPantalla();  
        }else if(accountNumber == cuentaAmiga2){
            saldoCuenta -= peticiones;
            alert("Se ha transferido $" + peticiones + "\n" + "Cuenta destino: " + cuentaAmiga2)
            actualizarSaldoEnPantalla(); 
        }else{
            alert("¡La cuenta ingresada no es valida! \nSolo puedes transferir a cuentas amigas")
        }
    }
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

