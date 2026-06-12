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
// import React, { useEffect } from 'react'
// import { useState } from "react";
// import './App.css';

// const App = () => {
//   let [apiData, SetApiData] = useState([]);

//   useEffect(()=>{       
//     //console.log("hello");  
//     async function call() {
//       let res = await fetch("https://dummyjson.com/products");
//       let data = await res.json();
//       console.log(data);

//       SetApiData(data.products);
//     }
//     call()
    
//   },[]) 
  
//   return (
//     <div id="products">
//        {     
//         apiData.map((a)=>{
//            return(
//             <div className = "cards"> 
//               <h1>{a.id}</h1>
//               <img src={a.thumbnail} className="image"/>
//             </div>
//            )
//         })
//       }  

     
    
//     </div>
//   )
// }

// export default App        


  

                                                        // Task 1
// import React, { useEffect } from 'react'
// import { useState } from "react";
// import './App.css';

// export const App = () => {
//   //let [apiData, SetApiData] = useState([]);
//   let [input, SetInput] =  useState("");
     
//   async function call() {
//       //console.log("hello")
//       if(!input.trim()){
//         alert("kuch nhi hai")
//         return
//       }

//       let res = await fetch(`https://dummyjson.com/products/search?q=${input}`);
//       let data = await res.json();
//       console.log(data);

//   }
  

//   function fun1(e){
//     //console.log(e.target.value);
//     SetInput(e.target.value)
//   }
//   return (
//     <div>
//       <input type="text" onChange={fun1}/>
//       <button onClick={call}>Check</button>
//     </div>
//   )
// }
// export default App

                                                     // Task 2

// import React, { useEffect } from 'react'
// import { useState } from "react";
// import './App.css';

// const App = () => {
//   let [apiData,setApiData]= useState([])

//   useEffect(()=>{
//     async function call(){
//       let res = await fetch("https://dummyjson.com/products");
//       let data = await res.json();
//       console.log(data);
//       setApiData(data.products);
//     }
//     call()
//   },[])
  
//   function fun1(){
//      let sortData = [...apiData].sort((a,b)=>{
//          return a.price - b.price
//      })
//      setApiData(sortData)
//      console.log(sortData,"hello");
//   }
//   function fun2(){
//      let sortData = [...apiData].sort((a,b)=>{
//          return b.price - a.price
//      })
//      setApiData(sortData)
//      console.log(sortData,"hello");
//   }

//   return (
//     <div id="products">
//         <div> 
//           <button className='sizeButton' onClick={fun1}>Low</button>
//           <button className='sizeButton' onClick={fun2}>High</button>
//         </div>
//           {
//             apiData.map((a)=>{
//               return(
//                 <div>
//                   <h3>{a.id}</h3>
//                   <img src={a.thumbnail} className="image"/>
//                   <h3 className='title'>Product : {a.title}</h3>
//                   <h3 className='price'>Price : {a.price}</h3>
//                 </div>
//               )
//             })
//           }
//     </div>
//   )
// }

// export default App
                                                     


                                       // todo list    


// import React from 'react'

// import Todo from './Todo'
// const App = () => {
//   return (
//     <div>
//       <Todo/>
//     </div>
//   )
// }

// export default App

                                      // reducer function like useState
// import React from 'react'
// import Reducer from './Reducer'

// const App = () => {
//   return (
//     <div>
//       <Reducer/>
//     </div>
//   )
// }

// export default App

                                   // we want to share data from context to home file direct(props and drilling)
                                   //link home with app
                                   // create context , then export  to main
                                   // link main with context
                                   // jo bhi data lena hai vo main mai likhenge
                                   //main-> app-> A-> b-> C
// import React from 'react'
// import Home from './Home'
// const App = () => {
//   return (
//     <div><Home/></div>
//   )
// }

// export default App                                   
  
                                   // add to cart

// import React,{useState} from 'react'
// import Home from "./Home"
// import NavBar from "./NavBar"
// import { Route, Routes } from "react-router-dom"
// import Cart from "./Cart"



// const App = () => {
//   let [apiData,setApiData] =   useState([])
//  let [cart,setCart]= useState([])
//   return (

//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path="/" element={<Home apiData={apiData}  setApiData={setApiData} cart={cart}  setCart={setCart}/>}/>
//         <Route path="/cart" element={<Cart cart={cart}/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App



                                      // todo list with useReducer
// import React from 'react'
// import Todo from './Todo'

// const App = () => {
//   return (
//     <div>
//       <Todo/>
//     </div>
//   )
// }

// export default App   

// import React from 'react'
// import Todo from './Todo'

// const App = () => {
//   return (
//     <div>
//       <Todo/>
//     </div>
//   )
// }

// export default App



import React from 'react'
import Navbar from './Navbar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Cart from './Cart'
const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

    </div>
  )
}

export default App
