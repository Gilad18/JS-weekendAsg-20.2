const isogram = (str) => {
    let dups = {};
    for (let letter of str) {
        if (letter in dups) {
            return false;
        }  
        dups[letter] = 1;
    }
    return true ;
}

console.log(isogram('abcda'));