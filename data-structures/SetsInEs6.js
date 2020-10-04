function checkSet1() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // change code below this line
  set.add("Taco");
  set.add("Cat");
  set.add("Awesome");

  // change code above this line
  console.log(Array.from(set));
  return set;
}

checkSet1();

/* Going for the next challange */

function checkSet2() {
  var set = new Set([1, 2, 3, 4, 5]); //Create a set with values 1, 2, 3, 4, & 5

  //Remove the value 2
  set.delete(2);
  //Remove the value 5
  set.delete(5);
  //Return the set
  return set;
}

/* Going for the next challange */

function checkSet3(arrToBeSet, checkValue) {
  // change code below this line
  const set = new Set(arrToBeSet);

  const hasValue = set.has(checkValue);
  const howBig = set.size;

  return [hasValue, howBig];

  // change code above this line
}

checkSet3([1, 2, 3], 2); // Should return [ true, 3 ]


/* Going for the next challange */


function checkSet(set){
  // change code below this line
  return [...set]

  // change code above this line
}


