/*Añadir un nuevo botón al ejercicio 
anterior, que al pulsarlo cambie la imagen. */

function crearImagen() {
    // Obtener el elemento div por su id
    let imagen = document.getElementById("imagen");

    // Crear un elemento <img>
    let img = document.createElement("img");

    // Asignar la ruta de la imagen al atributo src del elemento <img>
    img.src = "../descarga.jpg";

    // Agregar el elemento <img> al <div>
    imagen.appendChild(img);
}

function cambiarImagen() {
    // Obtener el elemento de imagen recién creado por su id
    const imagen = document.getElementById("imagen");



    if (imagen) {
        const imagenes = imagen.querySelector("img")
        if (imagenes) {
            imagenes.forEach((img, ix) => {
                console.log(img.src)
            });
        }
    }
    else {
        console.log("ta to bien")
    }



    // Verificar si la imagen existe
    if (imagen) {
        // Cambiar la ruta de la imagen
        if (imagen.src.endsWith("descarga.jpg")) {
            imagen.src = "../imagen-fondo_910766-187.avif";
        } else {
            imagen.src = "../descarga.jpg";
        }
    } else {
        alert("Primero crea una imagen.");
    }
}