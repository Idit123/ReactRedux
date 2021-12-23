import React from "react"
import { addTodo, removeTodo } from "../actions"
import { useSelector, useDispatch, connect } from "react-redux"
import { TodoAppStyle } from "./style"

const TodoApp = () => {
  const todoList = useSelector((state) => state.todoReducer.todoList)
  const completeTodoList = useSelector(
    (state) => state.todoReducer.completeTodoList
  )
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
    <TodoAppStyle>
      <div className="container">
        <div className="items">
          <form onSubmit={submit}>
            <input ref={(node) => (input = node)} />
            <button type="submit">Add Todo</button>
          </form>
        </div>
        <div className="list">
          <div className="todolist">
            <h3>TODO</h3>
            <ol>
              {todoList.map((todo) => {
                return (
                  <li
                    key={todo.id}
                    onClick={() => dispatch(removeTodo(todo.id, todo.lists))}
                  >
                    {todo.lists}
                  </li>
                )
              })}
            </ol>
          </div>
          <div className="todolist">
            <h3>Complete TODO</h3>
            <ol>
              {completeTodoList.map((todo) => {
                return <li key={todo.id}>{todo.lists}</li>
              })}
            </ol>
          </div>
        </div>
      </div>
    </TodoAppStyle>
  )
}
export default connect()(TodoApp)
