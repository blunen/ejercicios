/*
    Este ejercicio debe correr en Node.

    Revisa la clase 27 y copia aquí la función printProtoChain().
    Adapta esta función para que imprima las propiedades con llave de tipo Symbol.

    Crea un objeto que tenga llaves string y Symbol.
    Pon a prueba la función printProtoChain modificada con ese objeto.
*/

//tu código va aquí vvv

const PRIMERSYMBOL = Symbol("1");
const SEGUNDOSYMBOL = Symbol("2");

const obj = {
    "name" : "Jose",
    "apellido" : "Jose", 
    [PRIMERSYMBOL] : "el principe",
    [SEGUNDOSYMBOL] : "de la cancion"
}

function printProtoChain(obj, ind="") {
    ind2 = ind+"    ";
    if(obj==null) {
        console.log("\n"+ind+"null");
        return;
    }
    console.log("\n"+ind+obj.constructor.name+" : {\n");
    for(let p of Object.getOwnPropertySymbols(obj)) {
        console.log(p, obj[p]);
    }
    printProtoChain(Object.getPrototypeOf(obj), ind2);
    console.log(ind+"}"); //cerrar bloque de objeto
}

printProtoChain(obj);

//tu código va aquí ^^^

//eof
