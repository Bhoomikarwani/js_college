import React, {useEffect} from 'react'
import { useState } from "react";
import './App.css'
const Todo = () => {
    let [index,setIndex] = useState(null)
    let [task , setTask] = useState("")
    let [todos , setTodos] = useState(()=>{
      let data = localStorage.getItem("key")
      if(data){
        return JSON.parse(data)
      }
      return []
    });


    // this is used to store item of todos in local storage
    useEffect(()=>{
      localStorage.setItem("key",JSON.stringify(todos))
    },[todos])    

    function fun1(e){
      console.log("hello")
      setTask(e.target.value)
    }
    
    function d(id){
      console.log(id)
      let updateData = todos.filter((todo,index)=>{
        return index !== id     // jha par index equal hoga id kai vo data add nhi hoga updatedData wali array mai
      })
      setTodos(updateData)
    }

    function edit(index){
         setTask(todos[index])
         setIndex(index)
    }

    function handleOrUpdate(){
      if(task.trim()==""){
        return;
      }
      console.log("hello");

      if(index != null){
        let  updateData = [...todos]
        updateData[index]= task
        setTodos(updateData)
      }
      else{
        setTodos([...todos,task])
        setTask("")
      }
    }

  return (
    <div className='container'>
          
              <h1>Todo List</h1><br></br>
              <div id="main_box">
                  <input
                     placeholder='Enter a task'
                     id="input field"
                     onChange={fun1}/>

                  <button onClick={handleOrUpdate}>
                         {index == null?"Add":"Update"}
                  </button>
              </div>
         

          <div className='todo-list'> 
          {
            todos.map((todo , index)=>(
              <div className='todo-item' key={index}>
                    <span>{todo}</span>

                    <div className='actions'>
                       <button onClick={()=>{edit(index)}}>Edit</button>
                       <button onClick={()=>{d(index)}}>Delete</button>
                    </div>
              </div>
            ))
          }
          </div>

    </div>
  )
}

export default Todo