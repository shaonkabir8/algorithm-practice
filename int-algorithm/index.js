/* function sumAll(arr) {
  const newArr = [...arr].sort((a, b) => a - b);
  const container = [];

  for (let i = newArr[0]; i <= newArr[1]; i++) {
    container.push(i);
  }

  return container.reduce((a, b) => a + b);
}

//console.log(sumAll([1, 4]));

console.log(sumAll([5, 10])) */

/* 


// difference in two array 


function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.forEach((element) => {
    if (!arr2.includes(element)) {
      newArr.push(element);
    }
  });

  arr2.forEach((element) => {
    if (!arr1.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); */

/* 

//Intermediate Algorithm Scripting: Seek and Destroy

function destroyer(arr) {
  const argu = [...arguments].splice(1);
  const newArr = [];

  arr.forEach((element) => {
    if (!argu.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); */

/* 

function spinalCase(str) {

  var noCamel = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  let letter = noCamel.replace(/\s+|_+/g, '-').toLowerCase()
  console.log(letter)
}

//spinalCase('This Is Spinal Tap');
//spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show") */

/* 

function translatePigLatin(str) {
  const newStr = str.split(' ');
  const regex = 
  if (newStr[0] = ) {
    
  }
}

translatePigLatin("consonant");
 */
/* 
function pairwise(arr, arg) {
  let result = 0;
  const newArr = [...arr];
  let select = 0;
  for (let i = 0; i < newArr.length; i++) {
    select = newArr[i];
    for (let z = i + 1; z < newArr.length; z++) {
      if (select + newArr[z] === arg) {
        let arr1 = [i, z];
        let plus = arr1.reduce((a, b) => a + b);
        result += plus;
      }
    }
  }

  
  return result
}

//pairwise([1, 4, 2, 3, 0, 5], 7);
pairwise([0, 0, 0, 0, 1, 1], 1)
 */
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