const tribonacci = (sequence, n) => {
    if(n===0) {
        sequence = [];
      return  console.log(sequence);
    } else if (n===1) {
        return console.log(sequence[0]);
    } else if (n===2) {
        sequence.pop();
        return console.log(sequence[1]);
    }
    let myArr = sequence;
    for(let i=0 ; i<n-3 ; i++) {
        myArr.push(myArr[i]+myArr[i+1]+myArr[i+2])
    }
    console.log(myArr[myArr.length-1])
}

tribonacci([1,1,1],8);
tribonacci([0,0,1],9);
tribonacci([0,1,1],20);
tribonacci([1,0,1],21);
tribonacci([1,0,1],0);
tribonacci([1,0,1],1);
tribonacci([1,0,1],2);
tribonacci([1,0,1],3);
