const initialState = {
  name: 'The International',
  groups: [],
  lower: [],
  upper: [],
}

const league = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return {
        ...state,
        groups: [...state.groups, action.group],
      }
    case 'ADD_UPPER_MATCH':
      return {
        ...state,
        upper: [
          ...state.upper,
          {
            team1: action.team1,
            team2: action.team2,
          },
        ],
      }

    case 'ADD_LOWER_MATCH':
      return {
        ...state,
        lower: [
          ...state.lower,
          {
            team1: action.team1,
            team2: action.team2,
          },
        ],
      }

    default:
      return state
  }
}

export default league
