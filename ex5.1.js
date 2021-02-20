const trim = (str) => {
    if(str.length>2) {
    let strToarr = str.substring(1,str.length-1);
    return strToarr;
    }         
    else return str;
}

console.log(trim('Hello, How are you'));
console.log(trim('Hi'));