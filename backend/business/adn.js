var adn = require('./adnMutant.js.js');

class CheckDna {
  constructor () {
    
  };

  validateDna(dnaValue){
    console.log(dnaValue);
    var matrixTransformer = {

      getRightDiagonal : (m) => {
        var s, x, y, d,
        o = [];
        for (s = 0; s < m.length; s++) {
          d = [];
          for(y = s, x = 0; y >= 0; y--, x++)
            d.push(m[y][x]);
          o.push(d);
        }
        for (s = 1; s < m[0].length; s++) {
          d = [];
          for(y = m.length - 1, x = s; x < m[0].length; y--, x++)
            d.push(m[y][x]);
          o.push(d);
        }
        return o.map((array) => {
          return array.join('');
        });
      },
    
      getLeftDiagonal : (m) => {
        let reverse = matrixTransformer.reverseMatrix(m);
        return matrixTransformer.getRightDiagonal(reverse);
      },
    
      reverseString : (string) => {
        return string.split("").reverse().join("");
      },
    
      reverseMatrix : (m) => {
        return m.map((string) => {
          return matrixTransformer.reverseString(string);
        });
      },
    
    };    
    
    let mcheck = new adn.adnMutant(matrixTransformer);
    console.log(mcheck.isMutant(dnaValue));
    return mcheck.isMutant(dnaValue);
    
  }
}


module.exports ={
  isMutant: CheckDna
}