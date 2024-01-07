const sumAll = function(num, num2) {
    if (num < 0 || typeof(num) != "number" || num2 < 0 || typeof(num2) != "number") {
        return "ERROR"
    }
    
    let a = Math.min(num, num2);
    let b = Math.max(num, num2);

    for (let i = a + 1; i <= b; i++) {
       a += i; 
    }
    return a;
};

// Do not edit below this line
module.exports = sumAll;
