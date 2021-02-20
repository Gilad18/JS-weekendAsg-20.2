const orgazineStr = (str1 , str2) =>{
    let dups = str1 + str2;
    let words ={};

    for (let letter of dups) {
        letter in words ? words[letter]++ : words[letter] = 1 ;
    }

    console.log(Object.keys(words).join(''));

}

orgazineStr('xyaabbbccccdefww' , 'xxxxyyyyabklmopq');