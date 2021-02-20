const shortest = (str) => {
    let myArr = str.split(" ");
    for(let i=0 ; i<myArr.length ; i++ ){
         myArr[i] = myArr[i].length;
    }
   console.log(Math.min(...myArr));
}

shortest('gilad yefet from Israel');



