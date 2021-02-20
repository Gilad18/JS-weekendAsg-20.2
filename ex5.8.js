const longestWords = (str) => {
    let myArr = str.split(' ').sort((a,b)=> {return b.length - a.length});
    return myArr.filter(p => p.length === myArr[0].length).join(' ');
  }
  
  console.log(longestWords('xxx xxxx xx xx x x x x x xxxx'));
  console.log(longestWords('can you find the longest word in this string of word'));
  console.log(longestWords('My name is Gilad Yefet'));
 
