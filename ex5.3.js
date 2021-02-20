const camelCase = (str) => {
    let myArr = str.split("-");
    for(let i=1; i<myArr.length; i++) {
        let myWord = myArr[i].split("")
        myWord[0] = myWord[0].toUpperCase();
        myArr[i]=myWord.join('');
    }
    console.log(myArr.join(''));
}


camelCase("hi-what-up-man");
camelCase("Gilad-yefet-is-here");