import React from "react";
import {useTodo} from '../Contexts/Todocontext'
import { useState } from "react";

export default function Items ({todo}) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [taskDate, setTaskDate] = useState(todo.date);
    const {updatedTodo, deleteTodo, completeTodo} = useTodo();
  
    const editTodo = () => {
      updatedTodo(todo.id, {...todo, todo: todoMsg})
      setIsTodoEditable(false)
    }
    const todoComplete = () => {
      //console.log(todo.id);
      completeTodo(todo.id)
    }
    return(
        

      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
        <div className="flex-shrink-0 mr-3">{taskDate}</div>
        <div className="mx-5 flex-grow">
          <input
              type="checkbox"
              className="cursor-pointer mx-2"
              checked={todo.completed}
              onChange={todoComplete}
          />
          <input
              type="text"
              className={`border outline-none w-50  bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          </div>
          

          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          

          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
        
            )

}

