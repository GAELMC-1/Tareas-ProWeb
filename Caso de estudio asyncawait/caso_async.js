// EJERCICIO 1: Temporizador con Async/Await 

// Para usar 'await' con un tiempo de espera, necesitamos envolver el setTimeout en una Promesa.

function esperarSegundos(milisegundos) {
    return new Promise(function(resolve) {
        setTimeout(resolve, milisegundos);
    });
}

async function ejecutarEjercicio1() {
    let pantalla = document.getElementById("pantalla1");
    
    // 1. Inicio
    pantalla.innerHTML = "Iniciando...";
    console.log("Inicio Ejercicio 1");

    // 2. 3 segundos pausa
    await esperarSegundos(3000);

    // 3. Continuamos
    pantalla.innerHTML = "Listo!";
    console.log("Fin Ejercicio 1");
}


// EJERCICIO 2: Consumo de API 

async function ejecutarEjercicio2() {
    let pantalla = document.getElementById("pantalla2");

    try {
        // 1. Aviso de carga
        pantalla.innerHTML = "Descargando...";

        // 2. Petición a la API (fetch)
        // 'await' espera a que el servidor responda
        let respuesta = await fetch("https://rickandmortyapi.com/api/character");
        
        // 3. Convertir respuesta a JSON
        let datos = await respuesta.json();
        
        // 4. Tomamos los primeros 3 personajes
        let listaPersonajes = datos.results.slice(0, 3);
        
        // 5. Crear HTML para mostrarlos
        let html = "";
        
        listaPersonajes.forEach(function(p) {
            html += `
                <div class="personaje">
                    <img src="${p.image}" alt="${p.name}">
                    <div>
                        <h3>${p.name}</h3>
                        <p>Especie: ${p.species}</p>
                    </div>
                </div>
            `;
        });

        // 6. Mostrar en pantalla
        pantalla.innerHTML = html;
        console.log("Datos recibidos:", datos);

    } catch (error) {
        // Si falla el internet o la API
        pantalla.innerHTML = "Error al conectar con la API";
        console.log("Error:", error);
    }
}