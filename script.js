// referencia: funcion principal de validacion
function validateForm() {
    // 1. obtencion de valores
    let nombre = document.forms["myForm"]["fname"].value;
    let email = document.forms["myForm"]["email"].value;
    let pass = document.forms["myForm"]["password"].value;
    let confirmPass = document.forms["myForm"]["confirmPassword"].value;
    let age = document.getElementById("age").value; 
    let dob = document.forms["myForm"]["dob"].value;
    let gender = document.forms["myForm"]["gender"].value;
    let address = document.forms["myForm"]["address"].value;

    // 2. validaciones logicas

    // validar nombre (no vacio)
    if (nombre == "") {
        alert("error: el nombre debe ser capturado.");
        return false;
    }

    // validar email y dominios permitidos
    // nuevo: expresion regular para verificar gmail, hotmail u outlook
    let emailRegex = /@(?:gmail|hotmail|outlook)\./;
    
    if (email == "") {
        alert("error: el correo electronico es obligatorio.");
        return false;
    } else if (!emailRegex.test(email)) {
        // nuevo: mensaje de error si el dominio no es valido
        alert("error: debe ser un correo valido");
        return false;
    }

    // validar password
    if (pass == "") {
        alert("error: debes ingresar una contraseña.");
        return false;
    }

    // validar coincidencia de password
    if (pass !== confirmPass) {
        alert("error: las contraseñas no coinciden.");
        return false;
    }

    // validar edad (rango numerico general)
    if (isNaN(age) || age < 18 || age > 99) {
        alert("error: la edad debe ser un numero entre 18 y 99.");
        return false;
    }

    // validar fecha con desglose especifico (dia 1-30, mes 1-12, ano 1900-2026)
    if (dob == "") {
        alert("error: falta capturar la fecha de nacimiento.");
        return false;
    } else {
        // nuevo: separar la fecha en partes (ano-mes-dia)
        let parts = dob.split("-");
        let year = parseInt(parts[0]);
        let month = parseInt(parts[1]);
        let day = parseInt(parts[2]);

        // nuevo: validacion estricta de dia (1 a 30)
        // nota: esto invalidara dias 31 aunque el mes lo tenga, segun requerimiento
        if (day < 1 || day > 30) {
            alert("error de fecha: el dia debe estar entre 1 y 30.");
            return false;
        }

        // nuevo: validacion de mes (1 a 12)
        if (month < 1 || month > 12) {
            alert("error de fecha: el mes debe estar entre 1 y 12.");
            return false;
        }

        // nuevo: validacion de ano (1900 a 2026)
        if (year < 1900 || year > 2026) {
            alert("error de fecha: el año debe estar entre 1900 y 2026.");
            return false;
        }
    }

    // validar genero
    if (gender == "") {
        alert("error: selecciona un género.");
        return false;
    }
    
    // validar direccion
    if (address == "") {
        alert("error: la dirección no puede estar vacía.");
        return false;
    }

    // 3. exito
    alert('Todo bien, registro enviado');
    return true;
}