const nextPerfectSqr = (x) => {
   return Number.isInteger(Math.sqrt(x)) ? [Math.sqrt(x)+1]**2 : -1 ;    
}


console.log(nextPerfectSqr(121));
console.log(nextPerfectSqr(625));
console.log(nextPerfectSqr(114));

