var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  this.add = function(key, value){
    let hashedKey = hash(key);
    if (!this.collection[hashedKey]) {
      this.collection[hashedKey] = {}
      this.collection[hashedKey][key] = value;
    } else {
      this.collection[hashedKey][key] = value;
    }
  }
  this.remove = function(key){
    let hashedKey = hash(key);
    if (this.collection[hashedKey]) {
      delete this.collection[hashedKey]
    }
  }
  this.lookup = function(key){
    let hashedKey = hash(key);
    if (this.collection[hashedKey][key]) {
      return this.collection[hashedKey][key]
    }else {
      return null;
    }
  }
  // change code above this line
};

console.log(hash('Tanmoy'));

/* Going for the next challange */



var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// only add code below this line
const Cat = new Node('Cat');
const Dog = new Node('Dog');
Puppy.next = Cat;
Cat.next = Dog;


// test your code
console.log(Kitten.next);