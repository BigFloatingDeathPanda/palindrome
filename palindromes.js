const palindromes = function(myString) {
    //Replace all characters with blanks, and make it lower case
    let newString = myString.replace(/[ .!#,?)(*&^%$#@!)]/g, "").toLowerCase();

    let arrayedString = Array.from(newString);

    let reversedString = [];

    for (let i = 0; i < arrayedString.length; i++) {
        reversedString.unshift(arrayedString[i]);
    }
    
    let finalForward = arrayedString.join("");
    let finalBackward = reversedString.join("");

    if (finalForward == finalBackward) {
        return true;
    } else {
        return false;
    }

};

module.exports = palindromes
