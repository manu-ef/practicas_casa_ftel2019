function unidad(num) {
    if (num == 10) {
      return "Kibi";
    } else if (num == 20) {
      return "Mebi";
    } else if (num == 30) {
      return "Gibi";
    } else if (num == 40) {
      return "Tebi";
    } else if (num == 50) {
      return "Pebi";
    } else if (num == 60) {
      return "Exbi";
    } else if (num == 70) {
      return "Zebi";
    } else if (num == 80) {
      return "Yobi";
    } else if (num == 90) {
      return "Bronto"
    } else if (num == 100) {
      return "Geop"
    }
}

console.log("Manuel Evanguelopulos Fernández");
console.log("Lab 2 - G14: Tabla de unidades binarias");

for (var i = 1; i <= 10; i++) {
  var j = i*10;
  console.log("1 x 2^" + j + " Bytes son 1 " + unidad(j) + "byte.");
}
