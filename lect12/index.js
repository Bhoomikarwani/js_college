// let obj = {
//     id:1,
//     firstName: "om",
//     lastName: "tiwarii",
//     fullName: function(city ,age){
//         console.log(this.firstName + " " + this.lastName + " " +city);
//     }
// }
// //obj.fullName()

// let userOne = {
//     firstName: "hello",
//     lastName: "world"
//     // here we want to print first and last name together using above function 
// }
// //Call blind
// obj.fullName.call(userOne ,"delhi");

// obj.fullName.apply(userOne ,["delhi" , 51]);


// // shallow copy
// let user1 ={
//     name : "om",
//     age:22,
//     address : {
//         city :"delhi"
//     }
// }
// // let user2 = {...user1}  // using spread operator  shallow copy is created
// // user2.age = 10;
// // console.log(user1.age);  //22
// // console.log(user2.age);  // 10

// // user2.address.city = "mumbai"
// // console.log(user1.address.city);  // nested objs ka refrence pass hota hai (refrence means same address par change hoga)
// // console.log(user2.address.city);    


// // deep copy
// let user2 = structuredClone(user1)
// user2.age = 10;
// console.log(user1.age);  //22
// console.log(user2.age);  //10
// user2.address.city = "mumbai";
// console.log(user1.address.city);  // yha par nested objs refrence  se pass nhi  hota hai (yha par user1 and user2 diffrent addresses par hote hai)
// console.log(user2.address.city);


// let arr = [1,2,3,4]
// console.log(Array.prototype);  // GIVE ALL THE FUNCTIONS WE CAN PERFORM ON ARRAY

// let str = " js css "
// console.log(str.length);
// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.trim());
// console.log(str.includes("s"));
// console.log(str.indexOf("j"));
// console.log(str.substring(0,2),"substring");
// console.log(str.substr(0,2),"substr");
// console.log(str.split(""));

let str = "js"
let ans = str.split("").reverse().join("")   // reverse function works on array 
                                             // join fn. converts array into string
console.log(ans)

let str1 = "js js js"
console.log(str1.replaceAll("js","html"));
console.log(str1.charAt(0));
