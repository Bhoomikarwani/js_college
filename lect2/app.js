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
// console.log(arr.length)
// arr.push(5)
// console.log(arr)
// arr.pop()
// console.log(arr,"pop")
// arr.unshift(6) // adds an element at the begining of array
// console.log(arr)
// arr.shift()    // remove the first element of the array
// console.log(arr)

// arr.forEach((a,b,c)=>{    //a gives val , b gives index , c gives array on each iteration 
//     //console.log(a,'a')
//     //console.log(b,'b')
    
//    // console.log(c,'c')
//     return a*3   // gives no output (for each does not return anything)
// })

// let arr1 = arr.map((a,b,c)=>{ 
//     return a*2
// })
// console.log(arr1)


// let arr2 = arr.filter((a,b,c)=>{ 
//     return a>3
// })
// console.log(arr2)


// let sum = arr.reduce((a,b,c,d)=>{
//     console.log(a)
//     // return a+b
// },)
// console.log(sum)


arr = [1,2,3,4,5,6,7,8]
let arr1 = arr.filter((a)=>{
    return a>2
})
let arr2 = arr1.filter((a)=>{
    if (a%2 == 0){
        return a
    } 
})
arr2.reduce((a,b,c,d)=>{
    
    return a+b
})
