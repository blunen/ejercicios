/*
    Este ejercicio debe correr en Chrome.

    Realiza un programa que compare las variables a y b (que obtienes de los inputs).
    Si a fuera mayor, imprimir que a es mayor.
    Si b fuera mayor, imprimir que b es mayor.
    Si a y b son iguales, imprimir que son iguales.
    ¿Puedes controlar también si son de tipo distinto?
    ¿Puedes controlar si no son números?
*/

let term1 = document.getElementById("term1");
let term2 = document.getElementById("term2");
let r = document.getElementById("divresultados");

function messageClick() {

    const a = Number (term1.value);
    const b = Number (term2.value);

    //asigna r.innerHTML al valor que quieras imprimir en pantalla.

    //tu código va aquí vvv
    if (a>b) {
        console.log("Valor 1 es mayor")
    }else if{
        (b>a)
        consolre.log(Valor 2 es mayor)
    }
    //tu código va aquí ^^^
}

//eof
