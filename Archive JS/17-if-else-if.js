
// (new Date()).getHours(): hora del día (0-23h)
var hora = (new Date()).getHours();

var saludo;

if (hora < 12) {
    saludo = "\n Buenos días";
} else if (hora < 21) {
    saludo = "\n Buenas tardes";
} else {
    saludo = "\n Buenas noches";
} 

console.log(saludo + ", son las " + hora + " horas");

