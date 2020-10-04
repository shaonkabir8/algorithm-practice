// there are two ways to create such this type of Array. means byte sized array ...

// one way to create this Array is directly .

var i8 = new Int8Array(3);
console.log(i8);

// I can also create a buffer to asign the byteSize .

const byteSize = 6;
const buffer = new ArrayBuffer(byteSize);
console.log(buffer);
let i8View = new Int16Array(buffer);
console.log(i8View);
console.log(buffer.byteLength);
console.log(i8View.byteLength);

i8View[0] = 64;

i8View = i8View.map((element) => element + 2);
console.log(i8View);

const arr = [2, 5, 8, 10];

console.log(Array.isArray(i8View));
console.log(Array.isArray(arr));

// problem solving 1

const byteSize = 64;
const buffer = new ArrayBuffer(byteSize);
const i32View = new Int32Array(buffer);

console.log(i32View);

/*  Going for the next solution   */

// this is for push and pop Array mathod for push an item to the last element and pop for removing data from the last element as well as it will store the removal data to a new variable .

var homeworkStack = ["BIO12", "HIS80", "MAT122", "PSY44"];
// Only change code below this line
homeworkStack.pop();
homeworkStack.push("CS50");

/* Going for the next solution  */

function Stack() {
  var collection = [];
  this.print = function () {
    return collection;
  };
  // Only change code below this line
  this.push = function (element) {
    return collection.push(element);
  };
  this.pop = function () {
    return collection.pop();
  };
  this.peek = function () {
    return collection[0];
  };
  this.isEmpty = function () {
    if (collection.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  this.clear = function () {
    return (collection.length = 0);
  };

  // Only change code above this line
}

const obj = new Stack();

console.log(obj.push("Tanmoy"));
console.log(obj.isEmpty());
console.log(obj.print());

/* Going for the next solution  */

function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  // Only change code below this line

  this.enqueue = (element) => {
    collection.push(element);
  };
  this.dequeue = () => {
    return collection.shift();
  };
  this.front = () => {
    return collection[0];
  };
  this.size = () => {
    return collection.length;
  };
  this.isEmpty = () => {
    return collection.length === 0;
  };

  // Only change code above this line
}

/* Going for the next solution  */

function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  this.size = function () {
    return this.collection.length;
  };
  this.isEmpty = function () {
    return this.collection.length === 0;
  };
  this.enqueue = function (newItem) {
    if (this.isEmpty()) {
      return this.collection.push(newItem);
    }

    this.collection = this.collection.reverse();
    console.log(this.collection);
    var foundIndex = this.collection.findIndex(function (item) {
      return newItem[1] >= item[1];
    });
    console.log(foundIndex);
    if (foundIndex === -1) {
      this.collection.push(newItem);
      console.log(this.collection);
    } else {
      this.collection.splice(foundIndex, 0, newItem);
      console.log(this.collection);
    }
    this.collection = this.collection.reverse();
    console.log(this.collection);
  };
  this.dequeue = function () {
    if (!this.isEmpty()) {
      return this.collection.shift()[0];
    } else {
      return;
    }
  };
}

const another = new PriorityQueue();
console.log(another.enqueue(["Tanmoy", 2]));
console.log(another.enqueue(["Tanmoy", 3]));
console.log(another.enqueue(["Tanmoy", 1]));

/* Going for the next solution  */

function bubbleSort(array) {
  const swap = (arr, a, b) => {
    let firstData = arr[a];
    arr[a] = arr[b];
    arr[b] = firstData;

    return arr;
  };
  // change code below this line
  for (let i = 0; i < array.length; i++) {
    for (let z = 0; z < array.length - 1; z++) {
      if (array[z] > array[z + 1]) {
        array = swap(array, z, z + 1);
      }
    }
  }

  return array;
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

/* Going for the next solution  */

class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    if (this.queue[this.write] === null) {
      this.queue[this.write] = item;
      this.write++;

      if (this.write >= this.queue.length) {
        this.write = 0;
      }

      return item;
    } else {
      return null;
    }

    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line

    if (this.queue[this.read] !== null) {
      let item = this.queue[this.read];
      this.queue[this.read] = null;
      this.read++;
      if (this.read > this.max) {
        this.read = 0;
      }

      return item;
    } else {
      return null;
    }
    // Only change code above this line
  }
}

const CircularQueue1 = new CircularQueue(6);
console.log(CircularQueue1.print());
console.log(CircularQueue1.enqueue("a"));
console.log(CircularQueue1.dequeue());
console.log(CircularQueue1.print());

/* Going for the next solution  */

class Set5 {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set as an array
  values() {
    return Object.keys(this.dictionary);
  }

  // change code below this line

  // write your add method here

  add(item) {
    let valueOfObject = Object.values(this.dictionary);
    console.log(valueOfObject.includes(item));
    if (!valueOfObject.includes(item)) {
      this.dictionary[item] = item;

      this.length++;

      return true;
    } else {
      return false;
    }
  }

  // write your remove method here
  remove(item) {
    let entriValue = Object.entries(this.dictionary);

    if (entriValue.length === 0) {
      return false;
    }

    let output = entriValue.filter((element) => element[0] !== item);

    this.dictionary = Object.fromEntries(output);

    return true;
  }
  // write your size method here
  size() {
    let entriValue = Object.entries(this.dictionary);
    return entriValue.length;
  }
  // change code above this line
}

const Set1 = new Set5();
console.log(Set1.add("a"));
console.log(Set1.add("a"));
console.log(Set1.add("d"));
console.log(Set1.dictionary);
console.log(Set1.has("a"));
console.log(Set1.length);
console.log(Set1.remove("a"));

/* Going for the next solution  */

class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  // change code below this line
  union (dataSet){
    const newSet = new Set();
    console.log(newSet)
    const addToSet = el => newSet.add(el);
    this.values().forEach(addToSet);
    dataSet.values().forEach(addToSet);
    console.log(newSet)
    return newSet;
};

  // change code above this line
}

const Set2 = new Set();
console.log(Set2.add("a"));
console.log(Set2.add("a"));
console.log(Set2.add("d"));
console.log(Set2.dictionary);
console.log(Set2.has("a"));
console.log(Set2.length);
Set2.union(new Set([1, 5, 8]))

