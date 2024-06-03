/*Al pulsar el botón del ejercicio anterior, 
inyectar en un contenedor div (localizado justo 
antes del botón), una imagen pequeña*/


function cambiarImagen() {
    // Obtener el elemento div por su id
    let imagen = document.getElementById("imagen");

    // Crear un elemento <img>
    let img = document.createElement("img");

     // Asignar la ruta de la imagen al atributo src del elemento <img>
    img.src = "../descarga.jpg";
    
     // Agregar el elemento <img> al <div>
    imagen.appendChild(img);
}