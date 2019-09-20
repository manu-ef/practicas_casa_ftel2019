    
      function dos_a (n) {  // calcula 2^n
        var res =  1;
        while (n !== 0) {
          res = res * 2;
          n = n - 1;
        }
        return res;
      }


console.log( "2^10 (1K) = " + dos_a(10) );

console.log( "2^20 (1M) = " + dos_a(20) );