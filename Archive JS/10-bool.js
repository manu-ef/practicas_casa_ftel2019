
function par_y_mayor_que_10 (x) {

    return ((x % 2) === 0) && (x > 10);
}

console.log( '12 es par y mayor que 10: ' 
	         + par_y_mayor_que_10 (12));
console.log( ' 6 es par y mayor que 10: ' 
	         + par_y_mayor_que_10 (6));
    

