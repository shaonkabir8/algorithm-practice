/* 


// array sorting without using sort() mathod /




function bubbleSort(array) {
    // change code below this line
    const length = array.length;
  
    const finalArr = [];
  
    console.log(array.indexOf(Math.min(...array)));
  
    for (let i = 0; i < length; i++) {
      let minimum = Math.min(...array);
      let index = array.indexOf(minimum);
      array.splice(index, 1);
      finalArr.push(minimum);
    }
  
    return finalArr;
    // change code above this line
  }
  
  bubbleSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92,
  ]);
 */