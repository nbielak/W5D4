Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  const result = [];
  this.myEach(el => {
    result.push(callback(el));
  });
  return result;
};

Array.prototype.myReduce = function(callback, initialValue = this.shift()) {

  this.myEach(el =>{
    initialValue = callback(initialValue, el);
  });
  return initialValue;
};

const summer = function(num1, num2) {
  return num1 + num2;
};

console.log([1,2,3].myReduce(summer, 8));
