const binaryToInt = (arr) => {
    let n = 1/2;
    let sum = 0
    for (let i = arr.length -1 ; i >= 0 ; i--) {
         n *= 2
         sum += arr[i] * n;
    }
    console.log(`the integer value is: ${sum}`)
}

binaryToInt([0,0,0,1]);
binaryToInt([0,1,0,1]);
binaryToInt([1,1,1,1]);
binaryToInt([0,1,1,1,1]);
binaryToInt([1,0,0,0,1]);
binaryToInt([0,1,0,0,1,1,0,0,0,1]);
binaryToInt([0,0,1,0]);