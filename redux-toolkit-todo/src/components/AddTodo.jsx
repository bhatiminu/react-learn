import React from "react";
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/todo/todoSlice'

function AddTodo () {
    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
         <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className=""
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="add-btn"
      >
        Add Todo
      </button>
    </form>
    )
}

export default AddTodo