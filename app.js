const express = require("express");
const app = express();

//el primer parametro del parentesis es la raiz, es la ruta inicio

//este es un direccionamiento basico
app.get("/", function (peticion, respuesta) {
  //send me permite enviar al navegador un texto
  respuesta.send("Ruta INICIO")
});


app.listen(3000, function (peticion, respuesta) {
  console.log("Hola mundo");
});
