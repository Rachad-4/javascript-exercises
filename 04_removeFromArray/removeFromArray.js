const removeFromArray = function(arr, char, char2 = 0, char3 = 0, char4 = 0) {
    let ans = [];

    arr.forEach((item) => {
        if (item !== char && item !== char2 && item !== char3 && item !== char4) {
            ans.push(item);
        }
    })

    return ans;
};



// Do not edit below this line
module.exports = removeFromArray;
