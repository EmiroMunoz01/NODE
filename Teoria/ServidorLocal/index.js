//de esta forma le decimos a node que necesitamos el modulo http que ya lo tiene la instalacion de node, haremos uso de el a traves de la variable red
const red = require("http");

const servidor = red.createServer(function (peticion, respuesta) {
  //usaremos la respuesta, pondremos lo que vamos a mostrar una vez que el servidor nos devuelva algo,

  //mostraremos el tipo de contenido que monstramos, 200 es el codigo de que existe conexión

  respuesta.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  //este es un mensaje que lanzamos por consola
  respuesta.write("<h3>SERVER BÁSICO CON NODE.JS</h3>");
  //esto sera lo que se ejecutara cada vez que realicemos una petición web
  console.log("Peticion web");

  respuesta.end();
});
//en que puerto nos atendera el servidor, usaremos el 3000
servidor.listen(3000);
console.log("Ejecutando un servidor local con nodejs");

//al ejecutar nos debe aparecer el mensaje "ejecutando un servidor local con nodejs"

//haremos la peticion desde el navegador
//escribimos http://localhost:3000/ una vez que ingresemos aparecera en la terminal el texto que dice "Peticion web", y el servidor responde con el texto "SERVER BÁSICO CON NODE.JS" en la ventana de chroome,


