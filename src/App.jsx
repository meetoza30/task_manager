import { useState, useEffect } from 'react'
import { TodoProvider } from './Contexts/Todocontext'
import { Todocontext } from './Contexts/Todocontext'
import TodoUI from './Components/TodoUI'
import Items from './Components/Items'


function App() {
  const [todos, setTodos] =useState([]);

  const addTodo = (todo)=>{
    console.log({todo});
    setTodos((prev)=>[{
      id: Date.now(), ...todo
    }, ...prev])
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=>
      prev.filter((Todo)=>Todo.id !== id)
    );
  };

  const updatedTodo = (id, task)=>{
    setTodos((prev)=>
      prev.map((prevTodo)=> prevTodo.id === id ? task : prevTodo)
    )
  };

  const completeTodo = (id)=>{
    setTodos((prev)=> 
      prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)
      )}

useEffect(()=>{
 const todos = JSON.parse(localStorage.getItem("todos"));
 if(todos && todos.length>0){
      setTodos(todos);
 }
},[])

useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])

  return (
    <TodoProvider value={{addTodo, deleteTodo, updatedTodo, todos, completeTodo}}>

     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage your daily tasks</h1>
                    <div className="mb-4">
                        <TodoUI /> 
                    </div>


                    <div className="flex flex-wrap gap-y-3">
                        
                        {todos.map((todoItem)=>(
                              <div key={todoItem.id} className='w-full'><Items todo={todoItem} /></div>
                        ))}
                    </div>

                </div>
                <div className="text-gray-200 justify-center text-center py-10 animate-pulse font-bold">Made by Meet Oza</div>
            </div>
    </TodoProvider>
  )
}

export default App
