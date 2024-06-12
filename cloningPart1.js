





// let a = 10 
// let b = a  // value of a is copied to b

// console.log(b) // 10


let arr1 = ["apple", "mango", "banana", "cherry"]; 

// arr1 internally will store the address of the first element of the array like arr1 = 1000th 

let arr2 = arr1  // arr2 = 1000th

console.log("initial values")
console.log(arr1)
console.log(arr2)


arr1[0] = "Lichi"


console.log("after changing arr1")

console.log(arr1)
console.log(arr2)


arr2[3] = "watermelon"

console.log("after changing arr2")
console.log(arr1)
console.log(arr2)