import { ADD_TODO, REMOVE_TODO } from "../actions/actionType"

const initialstate = {
  todoList: [],
  completeTodoList: [],
}

const todoReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: action.payload.id,
            lists: action.payload.todolist,
          },
        ],
      }
    case REMOVE_TODO:
      let currstate = { ...state }
      console.log(`lists`, action.payload.todolist)
      currstate = {
        ...currstate,
        todoList: [
          ...currstate.todoList.filter((item) => item.id !== action.payload.id),
        ],
        completeTodoList: [
          ...currstate.completeTodoList,
          {
            id: action.payload.id,
            lists: action.payload.todolist,
          },
        ],
      }
      return { ...currstate }
    default:
      return state
  }
}

export default todoReducer
