const initials = (str) => {
    let myArr =  str.split(" ");
    let first = myArr[0][0].toUpperCase();
    let second = myArr[1][0].toUpperCase();
    console.log(`${first}.${second}`);
   }


   initials('gilad yefet');
   initials('lucas miller');
   initials('David Beckahm');