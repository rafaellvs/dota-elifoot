import { combineReducers } from 'redux'

import match from './match'
import team from './team'

const appReducer = combineReducers({
  match,
  team,
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
