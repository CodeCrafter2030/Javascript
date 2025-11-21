let users = [
  { name: "Lalit", age: 21 },
  { name: "Rathod", age: 22 }
];

let names = users.map(user => user.age);
console.log(names); // ["Lalit", "Rathod"]


let arr = [1,2,3];
let newArr = arr.map(x => x * 2);
console.log(arr); // [1,2,3] ✅ unchanged

let arr1 = [1,2,3];
let result = arr.map(x => x * 2); 
// If you forget return in a regular function, the new array will have undefined
let result2 = arr.map(function(x) { x*2 }); 
console.log(result2); // [undefined, undefined, undefined]

let numbers = [1,2,3,4];
let result1 = numbers.filter(n => n % 2 === 0).map(n => n * 2);
console.log(result1); // [4, 8] ✅ filter then map
