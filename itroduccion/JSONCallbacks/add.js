// *Práctica file system

// *A partir de archivo koders.json
// *Realizar las siguientes acciones:

//*  1º Crear un función que permita leer el archivo e imprimir en consola el arreglo de Koders
//*  2º Crear una función que permita agregar un Koder y guardar el archivo con el cambio realizado
//*  3º Crear una funcion que permita eliminar a un Koder por su id y guardar el archivo con el cambio realizado
//*  4º Crear una función que permita editar a un Koder por su id y guardar el archivo con el cambio realizado
//*  5º Crear una función que permita obtener a los koders que sean mayores a 25 años

//* Req callbacks file Sytems
//* JSON.parse() -> convierte de cadena a un objeto js
//* JSON.stringify() -> convertir de objeto a string

const fs = require("fs");

updateKoders("benja", "trujillo", 27);

function updateKoders(name, lastName, age) {
    fs.readFile("./koders.json", "utf8", (error, data) => {
        if (error) {
            console.log("Ha ocurrido un error: ", error);
            return;
        }

        const jsonData = JSON.parse(data);
        let koders = jsonData.koders;
        let appendKodervar = appendKoder(koders, name, lastName, age);

        createJSON(appendKodervar);
    });
}

function appendKoder(koders, name, lastname, age) {
    let koder = {
        id: "",
        name: "",
        lastName: "",
        age: "",
    };

    let lastId;
    for (let index = 0; index < koders.length; index++) {
        const element = koders[index];
        lastId = element.id
    }

    koder.id = lastId + 1;
    koder.name = name;
    koder.lastName = lastname;
    koder.age = age;
    koders.push(koder);

    return koders;
}

function createJSON(koders) {
    let objectKoder = { "koders": koders };
    let newJSON = JSON.stringify(objectKoder, null, 2);
    fs.writeFile("./koders.json", newJSON, (error) => {
        if (error) {
            console.log("Ha ocurrido un error: ", error);
            return;
        }
    }
    );
}