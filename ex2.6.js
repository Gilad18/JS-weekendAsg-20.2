const century = (year) => {
    return   Math.ceil(year/100) ;
}

console.log(century(1999));
console.log(century(2000));
console.log(century(2001));
console.log(century(1705));
console.log(century(1900));
console.log(century(1901));
console.log(century(1601));

