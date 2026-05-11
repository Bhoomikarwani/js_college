//let btn = document.querySelector(".one")
//let btn = document.getElementById("one")


// let body = document.querySelector("body")

// btn.addEventListener("click",function(){
//     body.style.backgroundColor="red"
//     console.log("color is red")

// })



// let btn = document.getElementsByClassName("one")  // returns array
// console.log(btn)  // array
// let body = document.querySelector("body")
// btn[0].addEventListener("click",function(){
//     body.style.backgroundColor="pink"
//     console.log("color is red")
// })


let headers = document.getElementsByClassName("two")
let btn = document.getElementById("one")
btn.addEventListener("click",function(){
    for(let i of headers){
        i.style.color="red"
    }
})