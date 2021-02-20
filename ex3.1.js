const nb_year = (p0, percentege , immgIn , goal) => {
    let current = p0;
    let count = 0;
    while (current < goal) {
        current = current + current*percentege/100 + immgIn ;
        count++;
    }
    return count;
}

console.log(nb_year(1500,5,100,5000));
console.log(nb_year(1500000,2.5,10000,2000000));