Array.prototype.bubbleSort = function() {
  let idx = 0;
  while (idx < this.length) {
    let a = this[idx];
    let b = this[idx + 1];
    if ( a > b) {
      this[idx] = b;
      this[idx + 1] = a;
      idx = 0;
    } else {
      idx ++;
    }
  }
  return this;
};

String.prototype.substrings = function() {
  let i = 0;
  const result = [];

  while (i < this.length) {
    let substring = this[i];
    result.push(substring);
    let j = i + 1;

    while (j < this.length) {
      substring += this[j];
      result.push(substring);
      j++;
    }
    i++;
  }
  return result;
};
