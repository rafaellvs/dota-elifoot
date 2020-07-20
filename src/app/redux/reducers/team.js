const initialState = {}

const team = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER_TEAM':
      return action.team

    default:
      return state
  }
}

export default team
