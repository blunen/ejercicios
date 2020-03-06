/*
    Este ejercicio debe correr en Chrome.

    Para este ejercicio debes volver a otro ejercicio que ya has realizado:
    Bloque 02 - Clase 05 - Ejercicio 05.

    Realiza el mismo ejercicio, pero sólo agregando elementos usando el DOM con JS.
    Necesitarás crear un archivo HTML que tenga sólo los tags doctype y <html>.
*/

//tu código va aquí vvv

const avengers = [
    {
        "nombre": "Iron Man",
        "identidad": "Tony Stark",
        "superpoder": "Super Traje",
        "primerpelicula": "Iron Man 1"
    },
    {
        "nombre": "Capitan America",
        "identidad": "Steve Rogers",
        "superpoder": "Super Soldado",
        "primerpelicula": "Capitan America 1"
    },
    {
        "nombre": "Thor",
        "identidad": "Thor Odinson",
        "superpoder": "Poder del Rayo",
        "primerpelicula": "Thor 1"
    },
    {
        "nombre": "Black Widow",
        "identidad": "Natasha Romanov",
        "superpoder": "Combate",
        "primerpelicula": "Avengers 1"
    },
    {
        "nombre": "Hulk",
        "identidad": "Bruce Banner",
        "superpoder": "Fuerza Gamma",
        "primerpelicula": "Hulk 1"
    }
];

const mitabla = document.createElement("table");
const headerRow = document.createElement("th");



let row, col, txt;
const tableRows = [];
for (let i = 0; i < avengers.length; i++) {

    row = document.createElement("tr");
    tableRows.push(row);

    for (let prop in avengers[i]) {

        col = document.createElement("td");
        txt = document.createTextNode(avengers[i][prop]);
        col.appendChild(txt);
        tableRows[i].appendChild(col);
    }
}
for (let tablerow of tableRows) {
    mitabla.appendChild(tablerow);
}

    const el_body = document.getElementById("body");
el_body.appendChild(mitabla);
//tu código va aquí ^^^

//eof
