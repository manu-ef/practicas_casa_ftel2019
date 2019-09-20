
// (new Date()).getHours(): hora del día (0-23h)
var hora = (new Date()).getHours();

var saludo = "\n Buenas tardes";

if (hora < 12) {
    saludo = "\n Buenos días";
} 

console.log(saludo + ", son las " + hora + " horas");

