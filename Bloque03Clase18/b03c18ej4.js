/*
    Este ejercicio debe correr en Node.

    Con un bloque switch-case, imprime "tu dato D  es del tipo T" para cualquier tipo de dato.
    Tendrás que evaluar los posibles valores que arroja el operador typeof.
*/

const dato = Symbol();
const tipo = typeof(dato);

//tu código va aquí vvv
switch (tipo) {
    case "string": 
        console.log("Tu dato "+dato+" es del tipo "+tipo);
        break;
    case "boolean":
        console.log("Tu dato "+dato+" es del tipo "+tipo);
       break;
    case "number":
        console.log("Tu dato "+dato+" es del tipo "+tipo);
        break;
    case "undefined":
        console.log("Tu dato "+dato+" es del tipo "+tipo);
        break;
    case "symbol":
        console.log("Tu dato es del tipo "+tipo);
        break;
    case "object":
        console.log("Tu dato "+dato+" es del tipo "+tipo);
        break;
    case "null":
        console.log("Tu dato "+dato+" es del tipo "+tipo);
        break;
     case "funtion":
        console.log("Tu dato "+dato+" es del tipo "+tipo);
        break;
}
//tu código va aquí ^^^

//eof
 