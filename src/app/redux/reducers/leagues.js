const initialState = []

const leagues = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_LEAGUE':
      return [
        ...state,
        action.league,
      ]

    default:
      return state
  }
}

export default leagues
