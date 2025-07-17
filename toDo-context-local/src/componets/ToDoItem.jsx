import React, { useState } from "react"
import './todoForm.css'
import { useTodo } from '../context'

function TodoItem({ todo }) {
   const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()
   const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
    const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id)
  }

    return (
        <div className={`todo-item ${todo.completed ? "todo-item--completed" : "todo-item--pending"}`}>
            <input type="checkbox" 
            className="todo-item__checkbox"
             checked={todo.completed}
              onChange={toggleCompleted} />
            <input type="text" className={`todo-item__text ${todo.completed ? "line-class" : "no-line-class"}`}
             value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}/>
            <button className="todo-item__edit-btn" onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
            <button className="todo-item__delete-btn"  onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
        </div>
    );
}

export default TodoItem