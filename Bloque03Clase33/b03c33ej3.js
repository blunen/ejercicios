/*
    Este ejercicio debe correr en Node.

    Crea un objeto cualquiera, y agrégale algunas propiedades.
    Agrégale una arrow function guardada en una de sus propiedades.
    Esa arrow function debe imprimir otra de las propiedades del objeto.

    Crea la misma arrow function fuera del objeto, pero que reciba un objeto como argumento.

    Llama ambas funciones y comprueba lo que sucede.
    ¿Puedes explicar el fenómeno en términos de this? Tiene el this global, no esta definido tal cual y por ello es undefined
*/

//tu código va aquí vvv
const obj = {
    "nombre"    : "Pepe",
    "caracter"  : "Enojona",
    "edad"      : "6",
    "sexo"      : "es 2020 no asumas mi genero",
    "estatura"  : "desconocida",
    "poder"     : "electrico",
    "frase"     : "ooolovoooorgooo",
    "funcion"   : () => {
        console.log (this.sexo);
    }
};

const funcion = (o) => {
    console.log (o.sexo);
};

obj.funcion();
funcion({});
//tu código va aquí ^^^

//eof
