import { combineReducers } from 'redux'

import match from './match'
import team from './team'
import league from './league'

const appReducer = combineReducers({
  match,
  team,
  league,
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
