import React from "react"
import { addTodo, removeTodo } from "../actions"
import { useSelector, useDispatch, connect } from "react-redux"

const TodoApp = () => {
  const list = useSelector((state) => state.todoReducer)
  const dispatch = useDispatch()
  let input
  const submit = (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ""
  }
  return (
    <div>
      <form onSubmit={submit}>
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
        <ul>
          {list.map((todo) => {
            return (
              <li key={todo.id} onClick={(e) => dispatch(removeTodo(e.value))}>
                {todo.text}
              </li>
            )
          })}
        </ul>
      </form>
    </div>
  )
}

export default connect()(TodoApp)
