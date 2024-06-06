function Persona() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;

    if (nombre != '') {
        let lista = document.getElementById('lista')
        let li = document.createElement('li')
        li.textContent = `nombre: ${nombre}`
        lista.appendChild(li)
    } else {
        alert('no debe estar vacio , ingrese un nombre');
    }
    if (apellido != '') {
        let lista = document.getElementById('lista')
        let li1 = document.createElement('li')
        li1.textContent = `apellido: ${apellido}`
        lista.appendChild(li1)
    } else {
        alert('ingrese un apellido');
    }
    if (edad != '') {
        let lista = document.getElementById('lista')
        let li2 = document.createElement('li')
        li2.textContent = `edad: ${edad}`
        lista.appendChild(li2)
    } else {
        alert('ingrese una edad');
    }
}