import { combineReducers } from 'redux'
import search from './SearchReducer'

const reducers = combineReducers(
  {
    search: search
  }
)

export default reducers
