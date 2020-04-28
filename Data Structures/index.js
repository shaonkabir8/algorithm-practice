// there are two ways to create such this type of Array. means byte sized array ...

// one way to create this Array is directly .

/* var i8 = new Int8Array(3);
console.log(i8);
 */

// I can also create a buffer to asign the byteSize .

/* const byteSize = 6;
const buffer = new ArrayBuffer(byteSize);
console.log(buffer)
let i8View = new Int16Array(buffer);
console.log(i8View)
console.log(buffer.byteLength);
console.log(i8View.byteLength)

i8View[0] = 64;

i8View = i8View.map(element => element + 2)
console.log(i8View)


const arr = [2, 5, 8, 10];

console.log(Array.isArray(i8View))
console.log(Array.isArray(arr))
 */

// problem solving 1

/* const byteSize = 64;
const buffer = new ArrayBuffer(byteSize);
const i32View = new Int32Array(buffer);

console.log(i32View) */

/* Going for the next solution  */

// this is for push and pop Array mathod for push an item to the last element and pop for removing data from the last element as well as it will store the removal data to a new variable .

/* var homeworkStack = ["BIO12", "HIS80", "MAT122", "PSY44"];
// Only change code below this line
homeworkStack.pop();
homeworkStack.push('CS50')
 */

/* Going for the next solution  */

/* function Stack() {
  var collection = [];
  this.print = function () {
    return collection;
  };
  // Only change code below this line
  this.push = function(element) {
    return collection.push(element);
  }
  this.pop = function() {
    return collection.pop()
  };
  this.peek = function() {
      return collection[0]
  }
  this.isEmpty = function(){
      if (collection.length === 0) {
          return true;
      } else {
          return false
      }
  }
  this.clear = function () {
      return collection.length = 0
  }
  

  // Only change code above this line
}

const obj = new Stack()

console.log(obj.push('Tanmoy'))
console.log(obj.isEmpty())
console.log(obj.print()) */

/* Going for the next solution  */

/* function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  // Only change code below this line

  this.enqueue = (element) => {
    collection.push(element)
  }
  this.dequeue = () => {
      return collection.shift();
  }
  this.front = () => {
      return collection[0];

  }
  this.size = () => {
      return collection.length
  }
  this.isEmpty = () => {
      return collection.length === 0;
  }

  // Only change code above this line
} */

/* Going for the next solution  */







/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
/* Going for the next solution  */
