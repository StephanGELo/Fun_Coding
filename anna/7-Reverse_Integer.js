/*
7. Reverse Integer

*/

var reverse = function(x) {
  var sign = (x>0) ? 1 : -1;
  x=Math.abs(x);

  var str=x.toString().split("").reverse().join("");
  var result=sign * Number(str);

  if(result>2147483647 || result < -2147483648)
    return 0;
  else
    return result;
};


//let x = 120;              // 21
//console.log(reverse(x));
let x1 = 123;               // 321
console.log(reverse(x1));
let x2 = -123;              // -321
console.log(reverse(x2));
