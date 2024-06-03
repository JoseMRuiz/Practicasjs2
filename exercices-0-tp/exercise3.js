

function texto() {
    let texto1 = document.getElementById('input');
    let texto2 = document.getElementById('parrafo');
    let valor = texto1.value

    texto2.innerHTML = valor
}

const input = document.getElementById('input');
    input.addEventListener('input', texto);