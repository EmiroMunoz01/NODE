import {suma,multiplicacion} from './add.js'

//de esta forma hemos importado funciones, pero también pueden ser constantes etc
console.log(suma(10,20))
console.log(multiplicacion(10,2))

// import addModule from './add.js'
//también podemos importar de esta forma, pero se importara el js por defecto que hemos establecido 

//****************************** */

//tenemos una caracterisca de js que nos sirve cuando traemos datos de un backend por ejemplo
const person = {
    name : 'John',
    address : {
        city : 'San Francisco'
    }
}

console.log(person.address.city)

//en este punto se ejecuta con normalidad, porque las redirecciones existen, lo del address o lo del city, pero que sucede si yo se que existe city pero no se en donde se encuentra ubicado?

//si location existe imprimir el valor de ciudad, pero si no existe pues no lo accederemos

console.log(person.location?.city)

//*********************************** */

//hablaremos de asincronia, en React pedimos muchas veces datos a un backend

//permite colocar una dirección de internet, traeremos datos de una dirección


fetch('https://jsonplaceholder.typicode.com/albums')
    .then(function (){
        console.log('finalizo la carga')
    })

console.log('linea 2')

//en js cuando ejecutamos logica de navegador no lo bloqueamos, mientras el usuario puede hacer otras cosas mientras se ejecuta la logica se llama asincronia, nos devuelve una promesa mientras el navegador hace otras cosas