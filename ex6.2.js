const countDuplicates = (str) => {
    let myArr = str.toLowerCase().split('');
    let dups = [];
    for (let i=0 ; i< myArr.length; i++) {
          if (!dups.flat().some(p=>p===myArr[i].toLowerCase())) {
            let count = 1;
            for(let n=i+1 ; n < myArr.length; n++) {
            if(myArr[i] === myArr[n]) {
                count++
            }
        }
        if(count > 1) {
            dups.push([myArr[i],count])
        }                
    }}
    for (const result of dups) {
        console.log(`on the word ${str} - ${result[0]} occur ${result[1]} times`);
    }
}

countDuplicates('abbbc');
countDuplicates('indivisibility');
countDuplicates('Indivisibilities');
countDuplicates('ABBA');
countDuplicates('aA11');