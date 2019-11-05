function vaciar () {
  document.getElementById("n1").value = "";
}
function cuadrado() {
  var num = document.getElementById("n1");
  num.value = num.value * num.value;
}
function inverso() {
  var num = document.getElementById("n1");
  num.value = 1/num.value;
}
function raiz() {
  var num = document.getElementById("n1");
  num.value = Math.sqrt(num.value);
}
function factorial() {
  var num = document.getElementById("n1");
  var fact = 1;
  n = num.value;
  while (n > 0) {
    fact = fact * n;
    n = n - 1;
  }
  num.value = fact;
}
function absoluto() {
  var num = document.getElementById("n1");
  num.value = Math.abs(num.value);
}
function seno() {
  var num = document.getElementById("n1");
  num.value = Math.sin(num.value);
}
function coseno() {
  var num = document.getElementById("n1");
  num.value = Math.cos(num.value);
}
function tangente() {
  var num = document.getElementById("n1");
  num.value = Math.sin(num.value)/Math.cos(num.value);
}
function partidoxcuadrado() {
  var num = document.getElementById("n1");
  num.value = 1/(num.value*num.value);
}
