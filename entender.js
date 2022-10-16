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

const user2 = {
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

console.log(user2.sendMail());
console.log(user2.name);

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

//hemos creado un titulo

const title = document.createElement("h1");
title.innerText = 'Hola mundo desde JS'
document.body.append(title)

//hemos creado un boton

const botton = document.createElement('button')
botton.innerText = 'click'
// le crearemos un evento al boton

//ahora cuando hacemos click en el boton se va cargando un hola mundo en la consola
botton.addEventListener('click', function () {
    console.log('hola mundo')
})

//tambien podemos cambiar esto, para que altere el valor de title al hacer un click

botton.addEventListener('click', function () {
    title.innerText = 'Texto actualizado con JS'
    alert("Se hizo clic")
})

document.body.append(botton)

//otro tema importante con JS, es cuando creamos funciones vamos a recibir objetos, y estos objetos pueden ser usados en el DOM

const user = {
    name: "Emiro",
    age: "21"
}

function printInfo(user) {
    return '<h1>Hola ' + user.name + '</h1>'
}

console.log(printInfo(user))

document.body.innerHTML = printInfo(user)

//de esta forma hemos creado un objeto, que es utilizado por una función que a su vez genera un h1, que es agregado al HTML por medio de la propiedad que hemos creado en el document

//********** */

//tambien tenemos algo llamado funciones anonimas
function start() {
    return 'Starting...'
}
console.log(start())

//pero no es necesario que las funciones tengan un nombrem facilmente puedo hacer esto:
//estamos creando y ejecutando la función al mimso tiempo, tenemos algo llamado función anonima, que es algo muy usado cuando hay eventos

console.log(function () {
    return 'Starting...'
}())

const button = document.createElement('button')
button.innerText = 'click me'

button.addEventListener('click', function () {
    alert('clicked')
})

document.body.append(button)

//********************************* */
const background = 'red';
const color = 'black';
const estaAutorizado = true;

//vamos a continuar la modificacion del boton 

//especial atencion, hemos aplicado una condicional ternaria, que dice que si estaAutorizado es verdadero el color sera azul, pero que si es falso el color sera el definido en la variable background

button.style = `background: ${estaAutorizado ? 'blue' : background}; color:${color}`


//*************************************** */
//ahora hablemos de algo muy importante, los arreglos

//podemos listar varios elementos

const names = ['Emiro', 'Jose', 'Antonio']

//recorreremos el arreglo elemento por elemento

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
}

//este bucle lo podemos reemplazar por:
//este metodo for each lo que va a esperar es una funcion lo que va a retornar son los valores que va a recibir, lo que hace es recorrer los elementos y los va recibiendo como parametro

//como podemos ver, esto es mas simple que el anterior ejemplo
console.log("******************")

names.forEach(function (name) {
    console.log(name)
});

//es buena idea, pero en React usamos algo llamado una función map

const newNames = names.map(function (name) {
    return `Hola ${name}`;
})

console.log(newNames)

//lo novedoso es que se crea un nuevo arreglo con nuevos valores, es bastante usado en React

// el metodo find lo que hace es recorrer cada uno de los elementos, y podemos colocar una condición dentro de la función

// si encuentra el nombre de Emiro se retornara el nombre por pantalla, de lo contrario no retornara nada

const nombreNuevo = names.find(function (name) {
    if (name === 'Emiro'){
        return name
    }
})

console.log(nombreNuevo)

//****************** */

//otra función super importante es el filter, filter crea un nuevo arreglo con elementos que hallamos filtrado, que cumplan con una condición

const filterr = names.filter(function (name) {
    if (name === 'Emiro'){
        return name
    }
})

console.log(filterr)

//otro metodo muy usado es

const nombres01 = ['Marcos', 'Mario', 'Jairo']
const nombres02 = ['Antonio', 'Carlos', 'Carla']

//vamos a concatenar los dos arreglos

nombres01.concat(nombres02)
console.log(nombres01.concat(nombres02))

//de esta forma hemos concatenado, pero esto no altera los otros dos arreglos que hemos declarado

//estos son los metodos que mas usamos en React

//********************** */

//tenemos mas formas de concatenar, con un operador llamado spread operador, estamos diciendo que traiga todos los elementos de un arreglo al otro, también funciona con objetos

console.log([...nombres01, ...nombres02])

const user01 = {
    name: 'Emiro',
    lastname: 'Muñoz'
}

const direccion = {
    ciudad : 'Pitalito',
    codigoPostal : 417030
}

//de esta forma hemos unido los dos objetos individuales en uno solo sin alterar los originales

const userInfo ={
    ...user,
    ...direccion
}

//***************************** */

//tenemos una caracterisca de js que nos sirve cuando traemos datos de un backend por ejemplo

const person = {
    name : 'John',
    address : {
        city : 'San Francisco'
    }
}

console.log(person)