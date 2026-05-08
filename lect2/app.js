//let arr = [1,2,3,true, "string"]
//for(let a in arr){
//    console.log(a,"in")   // gives index
//}
//for(let a of arr){
//    console.log(a,"of")   // gives value
//}

// let student = {
//     id:1,
//     name:"bhoomi"
// }
// console.log(student.id)
// console.log(student.name)

// var a
// console.log(a)
// a=5

                                             //HOSTING
        //gab hum function or variable ko phle se use kar le before initialisatiom
// sum()
// var sum=()=>{
//     console.log("hello")   //=> sum is not a function  (because var fn. ko upar jakar initailize kar dega)
// }                          // sum mai abhi undefined store hai


// sum()
// let sum=()=>{
//     console.log("hello")     // => Cannot access 'sum' before initialization
// }

// console.log(a)     // =>undefined
// var a=8

// console.log(a)         // => cannot access a before initialization
// let a=8


                                        // methods on array
let arr=[1,2,3,4,5]
console.log(arr.length)
arr.push(5)
console.log(arr)
arr.pop()
console.log(arr,"pop")
arr.unshift(6) // adds an element at the begining of array
console.log(arr)
arr.shift()    // remove the first element of the array
console.log(arr)

arr.forEach((a,b,c)=>{
    //console.log(a,'a')
    //console.log(b,'b')
    
    console.log(c,'c')
})