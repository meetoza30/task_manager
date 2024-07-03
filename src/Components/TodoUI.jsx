import React, { useState } from "react";
import { useTodo } from "../Contexts/Todocontext";

function TodoUI(){
    const [todo, setTodo] = useState("")
    const [date, setDate] = useState("");

    const {addTodo} = useTodo();
    const add = (e)=>{
       e.preventDefault()
        if(!todo) {alert("Dear User, you forgot to enter the task :)")
            return;
        }
        
        if(!date) {alert("Dear User, please enter the date :)")
            return;
        }
        
        console.log(todo);
        addTodo({todo,date:date, completed: false})
        
        setTodo("");
        setDate("");
    }

    return(
        <>
        <div className="bg-gray-200 max-w-full h-16 align-middle justify-between rounded-md bg-transparent my-auto shadow-blue-300 shadow-md">
        <form className="flex flex-row align-middle justify-between" onSubmit={add} >
            <input className="max-w-full border-black border-2 px-4 py-2 rounded-lg text-black font-semibold my-3 mx-2" placeholder="Enter your task"  onChange={(e)=>setTodo(e.target.value)} value={todo} type="text"></input>

            <input type="date" className="text-black font-semibold w-40 h-11 my-3 border-black border-2 rounded-lg px-1" value={date} onChange={(e)=>setDate(e.target.value)}></input>
            <button type="submit" className="bg-green-400 mx-2 border-black border-2 rounded-2xl my-3 px-3 py-2" >ADD</button>
        </form>
        </div>
        </>


    )
}
export default TodoUI;