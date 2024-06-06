function colors() {
    const select = document.getElementById('select1').value;
    const parrafo = document.getElementById('parrafo');


    if (select === "opcion1") {
        parrafo.style.color = "green";
    } else if (select === "opcion2") {
        parrafo.style.color = "black";
    }

};

function fondo() {
    const select = document.getElementById('select2').value;
    const parrafo = document.getElementById('parrafo');


    if (select === "opcion1") {
        parrafo.style.background = "yellow";
    } else if (select === "opcion2") {
        parrafo.style.background = "grey";
    }
};



