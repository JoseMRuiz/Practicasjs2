/*crear un documento HTML con dos 
contenedores div.
❖ Cada contenedor tendrá un título y un botón. 
❖ Por defecto, el primer div estará visible y el 
segundo oculto. 
❖ Al pulsar el botón del primer div, se ocultará este 
contenedor y mostrará el segundo. 
❖ Al pulsar el botón del segundo div, se realizará el 
proceso inverso. */

function toggleVisibility(elementId) {
    let element = document.getElementById(elementId);
    if(element.style.display === 'none'){
        element.style.display = 'block';
    } else {
        div1.style.display = 'none';
    }
}

function toggleVisibilityy(elementId) {
    let element = document.getElementById(elementId);
    if(element.style.display === 'block'){
        element.style.display = 'none';
    } else {
        div1.style.display = 'block';
    }
}