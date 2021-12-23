import { ADD_TODO, REMOVE_TODO } from "./actionType"

let nextTodoId = 0
export const addTodo = (todolist) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      todolist,
    },
  }
}

export const removeTodo = (id, todolist) => {
  return {
    type: REMOVE_TODO,
    payload: {
      id,
      todolist,
    },
  }
}
