/*Al pulsar el botón del ejercicio anterior, 
hacer que cambie el contenido HTML del 
documento y muestre, en negrita y cursiva, el texto 
botón pulsado*/

function cambiarTexto() {
    // Obtener el elemento <h1> por su id
    let titulo = document.getElementById("titulo");

    // Obtener el texto del <h1>
    let textoOriginal = titulo.textContent;

    // Modificar el contenido del <h1> con el texto en negrita y cursiva
    titulo.innerHTML = "<em><strong>" + textoOriginal + "</strong></em>";
}

