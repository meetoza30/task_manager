import {useContext, createContext} from 'react'

export const Todocontext = createContext({
   todos:[{
      id:1,
      task: "Todo msg",
      date:"",
      completed :false,
   }],
   addTodo: (task, date)=>{},
   updatedTodo: (id, task)=>{},
   deleteTodo: (id)=>{},
   completeTodo: (id)=>{},
})

export const TodoProvider = Todocontext.Provider;

export const useTodo = ()=>{
   return useContext(Todocontext)
}