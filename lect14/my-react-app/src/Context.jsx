 // we use context only for direct data passing

// import {useContext} from "react";

// let Context = createContext();

// export default Context;


                                         // TODO LIST
import React, { createContext, useReducer } from "react";
export const store_context = createContext();    // stores whole data

let initialState = {
    input : "",
    todos : [] ,
    index:null
};

function reducer(store , action){
    if(action.type == "set_input"){
        return{
            ...store,
            input: action.payload
        }
    }
    else if(action.type == "add_input"){
       return{
         ...store,
         todos : [...store.todos , store.input]
       } 
    }
   
    else if(action.type == "delete_task"){
        return{
            ...store,
            todos : store.todos.filter((a,b)=>{   
                return b !== action.payload
            })
        }
    }

    else if(action.type == "edit_task"){
        return{
         ...store,
         input : store.todos[action.payload],
         
         index : action.payload
        }
    }

    else if(action.type == "update"){
        //console.log("update fn is called")
        let updatedTodo = [...store.todos]
        updatedTodo[store.index] = store.input
        return{
            ...store,
            todos : updatedTodo,
            index : null,
            input:""
        }
    }
    return store
}


const Context = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <store_context.Provider value={{ store, dispatch }}>
      {children}
    </store_context.Provider>
  );
};

export default Context;