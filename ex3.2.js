const  passLeft = (arr) => {
    let passengers = 0;
    for (const stop of arr) {
      passengers = passengers + stop[0] - stop[1];
     }
    console.log(passengers);
}


passLeft([[7,0],[1,1],[2,5],[8,1],[0,5]]);