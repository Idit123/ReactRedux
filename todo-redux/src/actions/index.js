import { ADD_TODO, REMOVE_TODO } from "./actionType"

let nextTodoId = 0
export const addTodo = (todolist) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    todolist,
  }
}

export const removeTodo = (todolist) => {
  return {
    type: REMOVE_TODO,
    id: nextTodoId--,
    todolist,
  }
}
