import { combineReducers } from 'redux'

import match from './match'
import team from './team'
import leagues from './leagues'

const appReducer = combineReducers({
  match,
  team,
  leagues,
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
