/*
    Este ejercicio debe correr en Chrome.

    La variable calif representa la calificación de un alumno en una materia.
    Debe ser un número de 0 a 100.

    Realiza un programa que califique de la siguiente manera:
        de  0 a   9: vete a turismo
        de 10 a  59: tronaste
        de 60 a  69: panzaste
        de 70 a  89: ya eres libre
        de 90 a 100: nerd

    Si la calificación tiene decimales, contrólalos de alguna manera que te parezca adecuada.
*/

let r = document.getElementById("divresultados");

function messageClick() {

    //usa calif.value para obtener el texto dentro del input
    //usa r.innerHTML para colocar el resultado en pantalla

    //tu código va aquí vvv
    let calif = document.getElementById("term1");
    calif = Number(calif.value);
    if (calif >= 0 && calif < 10){
        r.innerHTML = "Vete a turismo";
    }else if(calif >= 10 && calif < 60){
        r.innerHTML = "Tronaste";
    }else if (calif >= 60 && calif < 70){
        r.innerHTML = "Panzaste";
    }else if (calif >= 70 && calif < 90){
        r.innerHTML = "Ya eres libre";
    }else if (calif >= 90 && calif <= 100){
        r.innerHTML = "Nerd";
    }else{ r.innerHTML = "Valor invalido"}

    //tu código va aquí ^^^
}

//eof
