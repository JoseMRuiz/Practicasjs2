const divs = document.getElementById('divs');
const direction = document.getElementById('select1');
const align = document.getElementById('select2');
const justify = document.getElementById('select3')

direction.addEventListener('change', direccion);
align.addEventListener('change', direccion);
justify.addEventListener('change', direccion);


function direccion() {
    const estilodiv = direction.value;
    const aligndiv = align.value;
    const divcontent = justify.value;
    divs.style.flexDirection = estilodiv;
    divs.style.alignItems = aligndiv;
    divs.style.justifyContent = divcontent;

}