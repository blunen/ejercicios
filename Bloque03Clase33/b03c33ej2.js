/*
    Este ejercicio debe correr en Node.

    Crea alguna función que reciba 5 parámetros.
    Crea varios arreglos de 5 elementos.
    Usando operadores spread, envía cada arreglo a la función y verifica que hace lo que debe.

    Usando rest parameter, crea alguna función que pueda operar con cualquier cantidad de parámetros.
    Llámala varias veces, con distintas cantidades de parámetros y comprueba que funcione.
*/

//tu código va aquí vvv

const arr1 = [4, 8, 15, 16, 23];
const arr2 = [9, 17, 92, 43, 12];
const arr3 = [9, 8, 19, 92, 27];
const arr4 = [3, 14, 16, 19, 18];

function cinco(a, b, c, d, e) {
    console.log("Recibí parámetros: " + a + ", " + b + ", " + c + ", " + d + ", " + e + ".")
}
cinco(...arr1);
cinco(...arr2);
cinco(...arr3);
cinco(...arr4);

function muchos(...chingo) {
    let str = "Recibí parámetros: ";
    for (let i of chingo) {
        str += i + ", ";
    }
    console.log(str);
}
muchos(1, 2, 3, 4, 5, 6, 6);
muchos(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
muchos("lol", 256, undefined, true);
muchos();
muchos(...arr4);

//tu código va aquí ^^^

//eof
