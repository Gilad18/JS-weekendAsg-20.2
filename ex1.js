const printBool = (bool) => {
    return bool  ? 'Yes' : 'No';
}

let isTrue = true;
let isFalse = false

console.log(printBool(isTrue));
console.log(printBool(isFalse));