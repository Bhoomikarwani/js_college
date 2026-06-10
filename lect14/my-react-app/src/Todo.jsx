// import React, {useEffect} from 'react'
// import { useState } from "react";
// import './App.css'
// const Todo = () => {
//     let [index,setIndex] = useState(null)
//     let [task , setTask] = useState("")
//     let [todos , setTodos] = useState(()=>{
//       let data = localStorage.getItem("key")
//       if(data){
//         return JSON.parse(data)
//       }
//       return []
//     });


//     // this is used to store item of todos in local storage
//     useEffect(()=>{
//       localStorage.setItem("key",JSON.stringify(todos))
//     },[todos])    

//     function fun1(e){
//       console.log("hello")
//       setTask(e.target.value)
//     }
    
//     function d(id){
//       console.log(id)
//       let updateData = todos.filter((todo,index)=>{
//         return index !== id     // jha par index equal hoga id kai vo data add nhi hoga updatedData wali array mai
//       })
//       setTodos(updateData)
//     }

//     function edit(index){
//          setTask(todos[index])
//          setIndex(index)
//     }

//     function handleOrUpdate(){
//       if(task.trim()==""){
//         return;
//       }
//       console.log("hello");

//       if(index != null){
//         let  updateData = [...todos]
//         updateData[index]= task
//         setTodos(updateData)
//       }
//       else{
//         setTodos([...todos,task])
//         setTask("")
//       }
//     }

//   return (
//     <div className='container'>
          
//               <h1>Todo List</h1><br></br>
//               <div id="main_box">
//                   <input
//                      placeholder='Enter a task'
//                      id="input field"
//                      onChange={fun1}/>

//                   <button onClick={handleOrUpdate}>
//                          {index == null?"Add":"Update"}
//                   </button>
//               </div>
         

//           <div className='todo-list'> 
//           {
//             todos.map((todo , index)=>(
//               <div className='todo-item' key={index}>
//                     <span>{todo}</span>

//                     <div className='actions'>
//                        <button onClick={()=>{edit(index)}}>Edit</button>
//                        <button onClick={()=>{d(index)}}>Delete</button>
//                     </div>
//               </div>
//             ))
//           }
//           </div>

//     </div>
//   )
// }

// export default Todo



                                      // with use reducer
// import React,{useReducer} from 'react'

// const Todo = () => {

//    let initialData={
//         input:"",
//         todos:[]
//        // index:null
//    }

//   function reduser(state,action){

//     if(action.type == "setTask"){
//         return{
//           ...state,
//           input: action.payload
//         }
//     }
//     else if(action.type == "addTask"){
//          return{
//            todos:[...state.todos, state.input],
//            input:""
//          }
//     }
//   }

//   let [state, dispatch] = useReducer(reduser , initialData)

//   return (
//     <div id="container">
//         <h1>Todo - List</h1>
//         <div id="main_box">
//             <input placeholder='Enter a Task' onChange={(e)=>dispatch({type:"setTask",payload:e.target.value})}/>
//             <button onClick={()=>dispatch({type:"addTask"})}>Add</button>
//         </div>

//         <div id="show_list">
//              {
//               state.todos.map(val)
//              }
//         </div>

//     </div>
//   )
// }

// export default Todo                                      



                                      //todo list using useContext
import React, { useContext } from 'react'
import { store_context } from './Context'

const Todo = () => {
  let {store , dispatch} = useContext(store_context)

  function handle(){
    
     if(store.index !== null){
         console.log("updated fn is called")
         dispatch({type:"update"})
     }
     else{
         dispatch({type:"add_input"})
     }
  }

  return (
    <div>
      <input value={store.input} onChange={(e)=>dispatch({type:"set_input",payload:e.target.value})}/>
      <button onClick={handle}>{store.index !== null?"Update":"Add"}</button>
      {
        store.todos.map((a,b)=>{
          return(
            <div>
              <h2>{a}</h2>

              <div className='actions'>
                        <button onClick={()=>dispatch({type:"edit_task",payload:b})}>Edit</button>  
                        <button onClick={()=>dispatch({type:"delete_task",payload:b})}>Delete</button>
              </div>
            </div>  
           )
        })
      }
    </div>

  )
}

export default Todo;                                      