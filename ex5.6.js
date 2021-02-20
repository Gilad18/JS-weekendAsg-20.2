const maskify = (str) => {
    let myArr = str.toString().split("");
    for(let i=myArr.length -5 ; i>=0; i--) {
       myArr[i]='#';
    }
    console.log(myArr.join(''));
}

maskify(300406493);
maskify('0545729402');
maskify('1987');
maskify('you will never guess this word');