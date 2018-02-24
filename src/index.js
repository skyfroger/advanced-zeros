module.exports = function getZerosCount(number, base) {
  var min = (x, y) => (x > y ? y : x);

  var noz = number;
  var j = base;

  for(var i = 2; i <= base; i++){
      if(j % i == 0){
          var p = 0;
          while(j % i == 0){
              p++;
              j = Math.floor(j / i); // possible error
          }
          var c = 0;
          var k = number;
          while(k / i > 0){
              c += Math.floor(k / i); // possible error
              k = Math.floor(k / i);
          }
          noz = min(noz, Math.floor(c / p));
      }
  }

  return noz;
}