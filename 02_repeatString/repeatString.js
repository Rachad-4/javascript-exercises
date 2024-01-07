const repeatString = function(str, number) {
    if (number < 0) return "ERROR"
    
    ans = ""; 

    for (let i = 1; i <= number; i++) {
        ans += str; 
    }

    return ans;
};

// Do not edit below this line
module.exports = repeatString;
