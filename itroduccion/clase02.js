let nameTag = Math.floor(Math.random(7 - 0) * 7)
let nombres = ['luis', 'Fer', 'Rodri', 'rafa', 'toledo', 'benja', 'deni', 'raul']

const nombreRandom = (nombres, tag) => nombres[tag]

const nobre = (nombre) => `hi ${nombre}`

console.log(nobre(nombreRandom(nombres, nameTag)))


// *CallBacks
// :Un callback es la declaracion/definicion de una funcion que pasara como
// :parametro a otra funcion para ser ejecutada posteriormente


// ,Definicion de la funcion
function irAlSuperMErcado(callback) {
	console.log('llendo al super mercado');
	console.log('llegue del super mecado');
	const mensaje = callback('Hola mama, ya estoy en el supermercado')
	console.log(mensaje);

}

// ,ejecucion de la funcion
irAlSuperMErcado()

// ,Declaracion de la funcion
function avisar() {
	return 'hola, ya estoy en el supermercado';
}

irAlSuperMErcado(avisar)
irAlSuperMErcado(avisar()) // -> la ejecucion de la funcion -> string

function cb(error, data) {
	if (error) {
		console.log('ha ocurrido un error', error);
	} else {
		return mensaje
	}
};


// :1º Cuando llegue
// :2º Cuando compre la despensa
// :3º Cuando haya llegado a casa