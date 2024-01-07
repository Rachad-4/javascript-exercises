const add = function(num, num2) {
	return num + num2;
};

const subtract = function(num, num2) {
  return num - num2;
};

const sum = function(arr) {
	let sum = 0;

  arr.forEach((num)=>{
    sum += num;
  })
  return sum;
};

const multiply = function(arr) {

  if (arr.length == 0) return args;

  let multiple = 1;

  for (let i = 0; i < arr.length; i++) {
    multiple *= arr[i]; 
  }
  return multiple;
};

const power = function(num, num2) {
	return Math.pow(num, num2);
};

const factorial = function(num) {
	let ans = 1;

  for (let i = 2; i <= num; i++) {
    ans *= i; 
  }

  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
