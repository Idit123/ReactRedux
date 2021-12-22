import changeTheNumber from "./counterReducer"

import { combineReducers } from "redux"

const reducers = combineReducers({
  //   myNumber:changeTheNumber
  changeTheNumber,
})

export default reducers
