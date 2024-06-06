
const Personas = [
    { nombre: 'jose', apellido: 'ruiz', edad: '25' },
    { nombre: 'juan', apellido: 'jaime', edad: '26' },
    { nombre: 'pedro', apellido: 'sosa', edad: '27' },
];

Personas.forEach(Personas => {
    let lista1 = document.getElementById('lista');

    let li = document.createElement('li');

    li.textContent = `nombre: ${Personas.nombre}, apellido ${Personas.apellido}, edad: ${Personas.edad}`;

    lista1.appendChild(li)
}
)