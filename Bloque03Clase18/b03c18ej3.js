/*
    Este ejercicio debe correr en Chrome.

    Realiza el mismo reto del ejercicio 2, pero esta vez usando sólo expresiones ternarias anidadas.
*/

let r = document.getElementById("divresultados");

function messageClick() {

    //usa calif.value para obtener el texto dentro del input
    //usa r.innerHTML para colocar el resultado en pantalla

    //tu código va aquí vvv
    let calif = document.getElementById("term1");
    calif = parseFloat(calif.value);

    (calif >= 0 && calif < 10) ? r.innerHTML = "Vete a turismo"
    : (calif >= 10 && calif < 60) ? r.innerHTML = "Tronaste"
    : (calif >= 60 && calif < 70) ? r.innerHTML = "Panzaste"
    : (calif >= 70 && calif < 90) ? r.innerHTML = "Ya eres libre"
    : (calif >= 90 && calif <= 100) ? r.innerHTML = "Nerd"
    : r.innerHTML = "Valor invalido"

    //tu código va aquí ^^^
}
//eof
