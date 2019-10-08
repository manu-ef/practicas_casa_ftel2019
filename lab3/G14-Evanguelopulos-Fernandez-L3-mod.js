function unidad(e) {
    if (e == 10) {
      return "Kibi";
    } else if (e == 20) {
      return "Mebi";
    } else if (e == 30) {
      return "Gibi";
    } else if (e == 40) {
      return "Tebi";
    } else if (e == 50) {
      return "Pebi";
    } else if (e == 60) {
      return "Exbi";
    } else if (e == 70) {
      return "Zebi";
    } else if (e == 80) {
      return "Yobi";
    }
}

function dos_a(num) { // Calcula 2^n
  var res = 1;
  while (0 < num) {
    res = res * 2;
    num = num-1;
  }
  return res;
}

console.log("Laboratorio 2 - G14: Tabla de unidades binarias.");
console.log("Manuel Evanguelopulos Fernández");

var n = 30;
while (n <= 70) {
  console.log("1 " + unidad(n) + "byte" + " = 2^" + n + " Bytes" + " = " + dos_a(n) + " Bytes.");
  n = n + 10;
}
