// // write code which may produce error inside try block
// try {
//     console.log("we are inside try block");
//     // console.log("lalit");
//     console.log(x);

// }


// // the error is catch by catch and we can define what we want to do with that error 
// catch(err){
//     // define krte hai ki error k sath kya krna hai 
//     // retry logic
//     // fallback machanism
//     // logging
//     // custom error
    
//     console.log("we are inside error block ")

//     throw new Error(console.log("bhai pehle variable declare to kr lo "))
// }

// finally{
//     console.log("i will run everytime , as i am finally block ");
// };


let errorCode=100;

if (errorCode == 100){
    throw new Error("Invalid JSON");
}
