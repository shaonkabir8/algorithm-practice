var Map = function () {
  this.collection = {};
  // change code below this line
  this.count = 0;

  this.get = function (key) {
    return this.collection[key];
  };
  this.has = function (key) {
    if (this.collection[key]) {
      return true;
    } else {
      return false;
    }
  };
  this.remove = function (key) {
    delete this.collection[key];
  };
  this.values = function(){
      return Object.values(this.collection);
  };
  this.size = function () {
      return this.values().length
  };
  this.add = function(key, value) {
      this.collection[key] = value
  };
  this.clear = function (){
      this.collection = {}
  }

  // change code above this line
};

const map = new Map()
map.add('a', 'name')
console.log(map.clear())
console.log(map.size())



