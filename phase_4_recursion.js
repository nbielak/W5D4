function range(start, end) {
  if (end === start) {
    return [end];
  }
  return range(start, end - 1).concat([end]);
}

// console.log(range(1,5));

function sumRec(arr) {
  if (arr.length === 2) {
    return arr[0] + arr[1];
  }

  return arr.pop() + sumRec(arr);
}

// console.log(sumRec([1,2,3]));

function exp1(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }

  return base * exp1(base, exp - 1);
}


function exp2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    let a = exp2(base, Math.floor(exp / 2));
    return Math.pow(a, 2);
  } else {
    let b = exp2(base, Math.floor((exp - 1) / 2));
    return base * Math.pow(b, 2);
  }
}

// console.log(exp2(2, 4));
function fibonacci(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  }

  let fibs = fibonacci(n - 1);
  let last = fibs.length - 1;
  fibs.push(fibs[last] + fibs[last - 1]);
  return fibs;
}

// console.log(fibonacci(5));

const getType = function (elem) {
  return Object.prototype.toString.call(elem).slice(8, -1);
};

function deepDup(array) {
  const result = [];
  array.forEach(el => {
    if (getType(el) === 'Array') {
      result.push(deepDup(el));
    } else {
      result.push(el);
    }
  });
  return result;
}

// console.log(deepDup([[1,2,3], 1, [1,[1,2]]]));

function bsearch(array, target) {
  if (array.length === 1 && array[0] !== target) {
    return -1;
  }
  let mid = Math.floor(array.length / 2);
  if (array[mid] === target) {
    return mid;
  } else if (array[mid] < target) {
    let newArray = array.slice(mid + 1, array.length);
    return 1 + mid + bsearch(newArray, target);
  } else {
    let newArray = array.slice(0, mid);
    return bsearch(newArray, target);
  }
}

// console.log(bsearch([1,3,4,8,9], 1));
// console.log(bsearch([1,3,4,8,9], 9));

const mergeHelper = function(left, right) {
  const result = [];
  while (left.length > 0 || right.length > 0 ) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  return result.concat(left).concat(right);
};

function merge_sort(array) {
  if (array.length === 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);
  return mergeHelper(merge_sort(left), merge_sort(right));
}

// a = [5,4,3,2,1];
// console.log(merge_sort(a));

const subsets = function(array) {
  if (array.length === 0) {
    return [[]];
  }
  const result = [];
  let popped = array.pop();
  let prev = subsets(array);
  prev.forEach(el => {
    el = el.concat([popped]);
    result.push(el);
  });
  return prev.concat(result);
};

console.log(subsets([1,2,3]));
