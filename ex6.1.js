const accum = (str) => {
    let newWordArr = []
    for (let i=0 ; i<str.length; i++) {
        newWordArr.push(str[i].toUpperCase()+str[i].toLowerCase().repeat(i))
    }
    console.log(newWordArr.join('-'));
}

accum('abcd');
accum('RqaEzty');
accum('cwAt');