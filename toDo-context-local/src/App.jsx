import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './componets/TodoForm'
import TodoItem from './componets/ToDoItem'

function App() {
const [todos, setTodos] = useState([])
const addTodo = (todo) =>{
  setTodos((prev) =>  [{id: Date.now(), ...todo}, ...prev])
}
const updateTodo = (id, todo) => {
 setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)) )
}

const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
}
const toggleComplete = (id) => {
  setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
}


useEffect(() => {
 const todos =  JSON.parse(localStorage.getItem("todos"))
 if(todos && todos.length > 0 ) {
  setTodos(todos)
 }
}, [])

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
},[todos])
     

  return (
    <TodoProvider value={{todos, addTodo,deleteTodo,toggleComplete, updateTodo}}>
     <div className="todo-app">
  <div className="todo-app__container">
    <h1 className="todo-app__title">Manage Your Todos</h1>
    <div className="todo-app__form-wrapper">
        <TodoForm />
    </div>
    <div className="todo-app__list">
       {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
    </div>
  </div>
</div>

    </TodoProvider>
  )
}

export default App
