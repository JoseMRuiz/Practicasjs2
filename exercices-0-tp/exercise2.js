
function CambiarTexto() {
    let texto1 = document.getElementById('parrafo')
    let texto2 = document.getElementById('input')
    let valorTexto = texto2.value

    texto1.innerHTML = valorTexto
}