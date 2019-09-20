
// (new Date()).getHours(): hora del día (0-23h)
var hora = (new Date()).getHours();

if (hora < 12) {
    console.log("\n Buenos días, son las " + hora + " horas");
} else {
	console.log("\n Buenas tardes, son las " + hora + " horas");
}

