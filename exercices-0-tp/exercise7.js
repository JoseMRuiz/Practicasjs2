let nombres = ['jose', 'benja', 'pedro', 'luis'];

function lista() {
    let listado1 = document.getElementById('listado')

    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement('li');

        li.textContent = nombres[i];

        listado1.appendChild(li);

    }
}

window.onload = lista;