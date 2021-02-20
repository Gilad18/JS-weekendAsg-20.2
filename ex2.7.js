const basicMath = (op , x , y) => {
    switch (op) {
        case "+" :
            return x + y;
        case "-" :
            return x - y;
        case "*" :
            return x * y;
        case "/" :
            return x / y;
        default:
            console.log('Wrong operation was typed');              
    }
}

console.log(basicMath( "+", 10 , 5));
console.log(basicMath( "-", 10 , 5));
console.log(basicMath( "/", 10 , 5));
console.log(basicMath( "*", 10 , 5));
console.log(basicMath( "@", 10 , 5));