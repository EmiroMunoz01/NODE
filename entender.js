console.log('Hola mundo!');

//lo que mas usaremos son las funciones

function hello() {
    return 'hola mundo'


}


console.log(hello())

//funciones con parametros

// son valores que se pueden esperar para procesarlos

function hola(x) {
    return 'hola ' + x


}

console.log(hola("Emiro"))

//**************** */

function sumar(a, b) {
    return a + b

}

console.log(sumar(2, 3));


// también tenemos funciones con parametros default

function restar(a, b) {

    if (b === undefined) {
        b = 0
    }
    return a - b

}

console.log(restar(2));

//agregaremos otra forma de colocar valores por defecto

function restar(a = 0, b = 0) {


    return a - b

}

console.log(restar(5));

//************************ */

console.log("************************");

// ahora hablaremos de los objetos, podemos guardarlos en variables o en constantes

const user = {
    name: "Emiro",
    age: 21,
    favorite_food: {
        acid: "lemon",
        candy: "brownie"
    },
    friends: [
        "Cristian",
        "Jose"
    ],
    active: true,
    sendMail: function () {
        return 'sending email...'
    },
    jeje() {
        return 'sending email...'
    }


}

console.log(user.sendMail());
console.log(user.name);

//************************ */

const nombre = 'laptop'
const precio = 3000

const newProduct = {
    nombre,
    precio
}

console.log(newProduct)

//************************ */

//la idea principal de js es poder manipular el DOM, o el Document Object Model

