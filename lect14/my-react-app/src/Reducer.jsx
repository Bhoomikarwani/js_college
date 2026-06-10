//import React, { useReducer } from 'react'



// const Reducer = () => {
//     function reduser(state , action){
//        if(action.type=="inc"){
//            return state+1
//          }
//         return state
//      }


//     let [state,disptach]  = useReducer(reduser , 0)     // disptach defines action and the fn. written inside useReducer defines the reaction perform on that action type
  
//   return (
//     <div>
//         <h1>{state}</h1>
//         <button onClick={()=>disptach({type:"inc"})}>ADD</button>    
//     </div>
//   )
// }

// export default Reducer


                          // create 3 buttons of different colors and change background color on onclick


// const Reducer = () => {
    
//   function changeColor(color , action){
//      if(action.type=="green"){
//         return "green"
//      }
//      if(action.type=="yellow")
//      {
//         return "yellow"
        
//      }  
//      if(action.type=="red")
//      {
//         return "red"
//      }  
//      else{
//          return color
//      }
    
//   }

//   let [color, dispatch] = useReducer(changeColor , "blue")  

//   return (
//     <div style={{backgroundColor:color,height:"100vh", width:"100vh"}}>
//         <button onClick={()=>dispatch({type:"green"})}>Green</button>
//         <button onClick={()=>dispatch({type:"yellow"})}>Yellow</button>
//         <button onClick={()=>dispatch({type:"red"})}>Red</button>
//     </div>
//   )
// }


// export default Reducer                          


