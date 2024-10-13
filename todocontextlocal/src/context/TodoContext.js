import { createContext,useContext } from "react";

export const todoContext = createContext({
    todos:[
        {
            id:1,
            todo:"todo message",
            completed:"false",
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{},
})

export const useTodo =() =>{
    return useContext(todoContext)
}

export const todoProvider =todoContext.Provider