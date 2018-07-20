Array.prototype.uniq = function(){
  const uniqueArray = [];
  this.forEach(el => {
    if (!uniqueArray.includes(el)) {
      uniqueArray.push(el);
    }
  });
  return uniqueArray;
};

Array.prototype.twoSum = function() {
  const zeroSumIndices = [];
  for (let idx = 0; idx < this.length - 1; idx++){
    for (let ind = idx + 1; ind < this.length; ind++){
      if (this[idx] + this[ind] === 0){
        zeroSumIndices.push([idx, ind]);
      }
    }
  }
  return zeroSumIndices;
};

Array.prototype.transpose = function() {
  const numRows = this.length;
  const numCols = this[0].length;
  const transposed = [];
  
  for (let rows = 0; rows < numRows; rows++) {
    transposed.push(new Array(numCols));
  }
  
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      transposed[col][row] = this[row][col];
    }
  }
  return transposed;
};

