import React, { useState } from "react"
import './todoForm.css'
import { useTodo } from '../context'

function TodoForm () {
  const [todo, setTodo] = useState("")
  const{addTodo} = useTodo()
  const add = (e) => {
    e.preventDefault()

    if(!todo) return

    addTodo({todo, completed: false})
    setTodo("")
  }
  return (
    <>
    <form onSubmit={add} className="todo-form">
  <input
    type="text"
    placeholder="Write Todo..."
    className="todo-form__input"
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
  />
  <button type="submit" className="todo-form__button">
    Add
  </button>
</form>
    </>
  )
  
}

export default TodoForm
