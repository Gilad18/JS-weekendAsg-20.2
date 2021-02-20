const toWierdCase = (str) => {
    let myArr = str.split("");
    for (let i = 0; i < myArr.length; i += 2) {             //start from first leeter and i increase by 2 evrey time
        myArr[i] = myArr[i].toUpperCase();

    }
    for (let n = 1; n < myArr.length; n += 2) {                //start from decond leeter and i increase by 2 evrey time
        myArr[n] = myArr[n].toLowerCase();
    }
    console.log(myArr.join(''));
}

toWierdCase('string');
toWierdCase('wierd string case');