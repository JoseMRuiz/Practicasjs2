function perimetro() {
    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;

    base = parseFloat(base);
    altura = parseFloat(altura);

    let perimetro1 = 2 * base + 2 * altura;

    alert(perimetro1);

}

function superficie() {
    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;

    base = parseFloat(base);
    altura = parseFloat(altura);

    let superficie1 =  base * altura;

    alert(superficie1);

}