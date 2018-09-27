//task 1
const set1 = new Set();
var object1 = new Object();

set1.add(42);
set1.add('forty two');

set1.add(object1);
console.log(set1.size);

//Task2
const set2 = new Set();
set2.add({x: 10, y: 20}).add({x: 20, y: 30});
console.log(set2.size);
console.log(set2);
// Delete any point with `x > 10`.
set2.forEach(function(point){
  if (point.x > 10) {
    set2.delete(point);
  }
});

console.log(set2.size);
console.log(set2);

//Task 3

var mySet = new Set();
mySet.add('foo');

mySet.delete('bar'); // Returns false. No "bar" element found to be deleted.
mySet.delete('foo'); // Returns true.  Successfully removed.

mySet.has('foo'); 

//Task 4

const set3 = new Set();
set3.add(42);
set3.add('forty two');

const iterator1 = set3.entries();

for (let entry of iterator1) {
  console.log(entry);
}


//Task 5
function logSetElements(value1, value2, set) {
    console.log('s[' + value1 + '] = ' + value2);
  }
  
  new Set(['foo', 'bar', undefined]).forEach(logSetElements);
  

  //Task 6

  const set4 = new Set([1, 2, 3, 4, 5]);

console.log(set4.has(1));
console.log(set4.has(5));
console.log(set4.has(6));

//Task 7

const set5 = new Set();
set5.add(42);
set5.add('forty two');

var iterator2 = set5.values();

console.log(iterator2.next().value);
console.log(iterator2.next().value);
