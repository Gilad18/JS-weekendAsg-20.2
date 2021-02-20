let myArr = [1 , 4, 20, 12, 1, 4];

const sumOf2Lowest = (arr) => {
       let arrSorted =  arr.sort((a,b)=> a-b);
       return arrSorted[0] + arrSorted[1];
}

console.log(sumOf2Lowest(myArr));