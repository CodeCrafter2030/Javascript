// array creation 
// let arr =[ 1,2,3,4];
// console.log(typeof(arr))
// console.log(arr);


// // array constructor
// let arr1 = new Array('lalit', 1, true , "rathod")
// console.log(arr1);
// console.log(arr1[0])

// array build in methods
let arr =[ 1,2,3,4];
arr.push("lalit")
console.log(arr)

arr.pop();
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(1)
console.log(arr)

console.log(arr.slice(1,2))

arr.splice(1, 3, "lalit")
console.log(arr)

console.log(arr.find((num)=>{
    return num===1;
}))