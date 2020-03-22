class adnMutant {
    constructor (transformer) {
      this.transformer = transformer;
  
      this.findMutantBlocks = function (matrix) {
  
        let regex = /([ATGC])\1{3,4}/;
  
        let straight = matrix.filter((string) => {
          return regex.test(string);
        });
  
        let right = this.transformer.getRightDiagonal(matrix).filter((string) => {
          return regex.test(string);
        });
  
        let left = this.transformer.getLeftDiagonal(matrix).filter((string) => {
          return regex.test(string);
        });
  
        return straight.concat(right).concat(left);
      };
  
      this.isMutant = function (matrix) {
        let blocks = this.findMutantBlocks(matrix);
        return blocks.length > 1;
      };

    }
  }

module.exports ={
    adnMutant: adnMutant
}