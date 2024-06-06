const nombres = [];

function mostrarNombres() {
    listado1 = document.getElementById('listado');
    listado.innerHTML = '';

    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement('li')

        li.textContent = nombres[i];

        listado1.appendChild(li);
    }
}



function agregarPersonas() {
    let nombre = document.getElementById('nombre').value;

    if (nombre) {
        nombres.push(nombre);
        mostrarNombres();
        document.getElementById('nombre').value = '';
    }
    
}


