//let box = document.getElementsByClassName("box");

let box = document.querySelectorAll("button");
let turn0 = true;
let win =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let msg = document.getElementById("msg");

for(let a of box){
    // console.log(a,"aaa");
    
    a.addEventListener("click",()=>{
         //console.log("nfdnv");
         if(turn0 == true){
            a.innerText = "0";
            turn0 = false;
            a.disabled = true;
         }
         else{
            a.innerText = "X";
            turn0 = true;
            a.disabled = true;
             winner();
         }
       
    });
   
}
function winner(){
    console.log("hehehe");
    
    for(let pattern of win){
        let x = box[pattern[0]].innerText;
        let y = box[pattern[1]].innerText;
        let z = box[pattern[2]].innerText;
        if(x!="" && y!="" && z!=""){
            if(x==y && y==z){
               msg.innerText = x + "aap jeet gaye";
               log
            }
        }
    }
}