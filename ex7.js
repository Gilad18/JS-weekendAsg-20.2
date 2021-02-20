const filterMyArry = (arr,  callback ) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]))  {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

filterMyArry([1, 2, 3, 4, 5], x => x > 2);
filterMyArry([1, 2, 3, 4, 5], x => x < 2);


const forEachMyArray = (arr,  callback ) => {                    //change evrey element of the array and return the same array with the changes
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
        }
        return arr;
    }
    


console.log(forEachMyArray([1, 2, 3, 4, 5], x => x * 10));
console.log(forEachMyArray([1, 2, 3, 4, 5], x => x + 5));


const mapMyArray = (arr,  callback ) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {                 //create new array and applay the changes on it
        newArr.push(callback(arr[i]));
        }
        console.log(newArr);
    }
    


mapMyArray([1, 2, 3, 4, 5], x => x * 2);
mapMyArray([1, 2, 3, 4, 5], x => x + 2);