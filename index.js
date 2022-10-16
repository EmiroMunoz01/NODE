//hemos creado un titulo

const title = document.createElement("h1");
title.innerText = 'Hola mundo desde JS'
document.body.append(title)

//hemos creado un boton

const botton = document.createElement('button')
botton.innerText = 'click'
// le crearemos un evento al boton

//ahora cuando hacemos click en el boton se va cargando un hola mundo en la consola
botton.addEventListener('click', function(){
    console.log('hola mundo')
})

//tambien podemos cambiar esto, para que altere el valor de title al hacer un click

botton.addEventListener('click', function(){
    title.innerText = 'Texto actualizado con JS'
    alert("Se hizo clic")
})

document.body.append(botton)

//otro tema importante con JS, es cuando creamos funciones vamos a recibir objetos, y estos objetos pueden ser usados en el DOM

const user = {
    name : "Emiro",
    age : "21"
}

function printInfo(user){
    return '<h1>Hola ' + user.name +'</h1>'
}

console.log(printInfo(user))

document.body.innerHTML = printInfo(user)

//de esta forma hemos creado un objeto, que es utilizado por una función que a su vez genera un h1, que es agregado al HTML por medio de la propiedad que hemos creado en el document

//********** */

//tambien tenemos algo llamado funciones anonimas
function start(){
    return 'Starting...'
}
console.log(start())

//pero no es necesario que las funciones tengan un nombrem facilmente puedo hacer esto:
//estamos creando y ejecutando la función al mimso tiempo, tenemos algo llamado función anonima, que es algo muy usado cuando hay eventos

console.log(function (){
    return 'Starting...'
}())

const button = document.createElement('button')
button.innerText = 'click me'

button.addEventListener('click', function (){
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
    const element = names [i];
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


