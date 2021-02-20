const fibonacci = (start, n) => {
    let myArr = [];
    if(start===0){
         myArr = [0,1];
    } else  myArr = [1 ,1];
        for (let i = 0 ; i < n -2 ; i++) {
        myArr.push(myArr[i]+myArr[i+1]); 
    }
    console.log(myArr[myArr.length-1]);
}

fibonacci(1,10);
fibonacci(0,10);
fibonacci(1,100);
fibonacci(1,100);