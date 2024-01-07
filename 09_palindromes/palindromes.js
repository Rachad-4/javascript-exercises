const palindromes = function (str) {
    
    let j = str.length - 1;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == "?" || str.charAt(i) == "!" || str.charAt(i) == " " || str.charAt(i) == "," || str.charAt(i) == "." || str.charAt(i) == "-"){
            i++;
        }
        if (str.charAt(j) == "?" || str.charAt(j) == "!" || str.charAt(j) == " " || str.charAt(j) == "," || str.charAt(j) == "." || str.charAt(j) == "-"){
            j--;
        }
        console.log(`J is ${str.charAt(j)}   I is ${str.charAt(i)}`);
        if (str.charAt(i).toUpperCase() != str.charAt(j).toUpperCase()) {
            console.log(`J is ${str.charAt(j)}   I is ${str.charAt(i)}`);
            return false
        }
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
