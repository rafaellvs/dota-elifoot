import { combineReducers } from 'redux'

import match from './match'

const appReducer = combineReducers({
  match,
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
