const fibonacci = function(fib) {
    let num = typeof(fib) == "Number" ? num : parseInt(fib);
    let arr = [0, 1];

    if (num < 0) return "OOPS"

    if (num === 1) return 1;

    if (num === 0) return 0; 

    for (let i = 1; i <= num; i++) {
        arr.push(arr[i - 1] + arr[i]); 
    }
    return arr[num];
}; 
// Do not edit below this line
module.exports = fibonacci;
