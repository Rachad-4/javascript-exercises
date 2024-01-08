const palindromes = function (str) {
    
    let capStr = str.toUpperCase().replaceAll("?","").replaceAll("!","").replaceAll(",", "").replaceAll(".", "").replaceAll("-","").replaceAll(" ", "");
    let j = capStr.length - 1;

    for (let i = 0; i < capStr.length; i++) {
        if (capStr.charAt(i) != capStr.charAt(j)) {
            return false
        }
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
