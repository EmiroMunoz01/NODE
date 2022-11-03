const mysql = require("mysql");

//parametros de conexion
const conexion = mysql.createConnection({
  host: "localhost",
  database: "holamundo",
  user: "root",
  password: "password",
});
//crearemos una función que nos diga en caso de que halla un error

conexion.connect(function (err) {
  //si tenemos un error lo captura y lo muestra

  if (err) {
    throw err;
    //en caso de haber conexion tendremos el siguiente mensaje
  } else {
    console.log("Conexion exitosa");
  }
});

//haremos una consulta, de esta forma la hemos realizado
conexion.query("SELECT * from animales", function (error, results, fields) {
  if (error) {
    throw error;
  }
  results.forEach((result) => {
    console.log(result);
  });
});

//finalmente cerramos la conexion
conexion.end();

//usaremos nodemon para visualizar los cambios
