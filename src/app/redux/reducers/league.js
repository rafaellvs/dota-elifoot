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

    default:
      return state
  }
}

export default league
