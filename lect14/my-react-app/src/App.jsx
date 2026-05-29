  // rafce bolier
                                             // lect1
// import { useState } from "react";

// let count = 0 ;
// const App = () => {

//   let [count,SetCount]  = useState(0)    // screen mai changes kai liye use useState
//   let [color,SetColor]  = useState("red")  
//   function fun1(){
//      SetCount(++count)
//   }
//   function fun2(){
//      SetCount(--count)
//   }
//   function fun3(){
//      SetColor(
//       green);
//   }

//   return (
//     <div style={{backgroundColor: "red"}}>  
//        <h2>{count}</h2>
//        <button onClick={fun1}>+</button>
//        <button onClick={fun2}>-</button>
//        <button onClick={fun3}>green</button>
//     </div>
//   )
// }
//export default App


                                           // lect2
              


// const App = () => {     // component1
//   return (
//     <div><Home/></div>
//   )
// }
// const Home = () => {   // component2
//   return (
//     <div>Home</div>
//   )
// }


                              // import home then link with app
                              // app link with main.jsx already
// import Home from './Home' 
// import {New} from './Home'   
// const App = () => {     // component1
//   return (

//     <div><Home/>   
//          <New/>    
//     </div>    

//   )
// }

// export default App                    


                                  // data sharing from parent to child (app -> home)   (pros)
                                  // we can share data only from parent to child


// import Home from './Home'
// const App = () => {

//    let user = "ankittt"         // create data

//   return (
//     <div><Home  data={user}/></div>   // passing value as object by storing in data variable
//   )                                   // 
// }

// export default App                                  



                                        // lect 3
// import React from 'react'
// import { useState } from "react";

// const App = () => {
//   let[input,SetInput] = useState("")
//   let[data,SetData] = useState()   // for showing
//   let[arr,SetArr] = useState([])
  
//   function fun1(e){
//       SetInput(e.target.value)
//       console.log(input);
//   }

//   function fun2(){
//     SetData(input)
//     arr.push(input)
//     arr.push(" ")
//   }
//   return (
//     <div>
//       <h2>{arr}</h2>
//       <input type='text'   name='input'   placeholder='enter your name' onChange={fun1}/>  
//       <button onClick={fun2}>Show text</button>  
//     </div>
//   )
// }

// export default App                                        



// FORM
// import React from 'react'
// import { useState } from "react";
// import './App.css'


// const App = () => {
//   let [input, SetInput] =  useState({
//     name:"",
//     email:"",
//     password:""
//   })

//   function fun1(e){
//     //console.log(e.target)  // takes input field
//     //console.log("hello")   
//     let {name,value} = e.target // takes only name and value data from e.target(input field or object)
//     SetInput({...input,[name]:value})
        
//     console.log(input);
//   }
//   return (
//     <div>
//       <input type='text' name='name'  value={input.name}  placeholder='enter name'  onChange={fun1}/><br></br> 
//       <br></br>
//       <input type='email'  name='email'  value={input.email}  placeholder='enter email'  onChange={fun1}/><br></br>
//       <br></br>
//       <input type='password'  name='password'  value={input.password}  placeholder='enter password'  onChange={fun1}/><br></br>
//       <br></br>
//       <button>Submit</button><br></br>
//     </div>
//   )
// }

// export default App



                                        // useEffect
import React, { useEffect } from 'react'
import { useState } from "react";



const App = () => {
  let[count, SetCount] = useState(0);
  let[city , SetCity]  = useState("goa");
  //console.log("hello");  // -> hello baar-baar print ho rha hai means jab count increase ho rha toh page bhi reload baar-baar ho rha h

  // useEffect  // ->  useEffect  kai andar jo code likha hoga vo only ek baar hi run hoga 
  // always we call api inside useEffect because ek hi bar data ko fetch karna hai
  useEffect(()=>{       
    console.log("hello");  
    async function call() {
      let res = await fetch("https://jsonplaceholder.typicode.com/todos");
      let data = await res.json();
      console.log(data);
    }
    call()
    
  },[city])    // (dependency) jab city ki value change hogi tab bhi ek baar hello print hoga



  return (
    <div>
      <h2>{count}</h2>
      <h4>{city}</h4>
      <button onClick={()=>SetCount(count+1)}>Click</button>
      <button onClick={()=>SetCity("manali")}>change city</button>
    </div>
  )
}

export default App                                        