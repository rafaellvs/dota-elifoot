const initialState = {
  isRunning: false,
  log: [],
  tick: 0,
  roshan: {
    alive: true,
    tickKilled: null,
  },
  radiant: {
    heroes: [1, 2, 3, 4, 5],
    networth: 3000,
    currentAction: null,
    lanes: {
      top: [1, 2],
      mid: [3],
      bot: [4, 5],
    },
    towers: [
      {
        id: 1,
        name: 'Top Tier 1',
        alive: true,
      },
      {
        id: 2,
        name: 'Mid Tier 1',
        alive: true,
      },
      {
        id: 3,
        name: 'Bot Tier 1',
        alive: true,
      },
      {
        id: 4,
        name: 'Top Tier 2',
        alive: true,
      },
      {
        id: 5,
        name: 'Mid Tier 2',
        alive: true,
      },
      {
        id: 6,
        name: 'Bot Tier 2',
        alive: true,
      },
      {
        id: 7,
        name: 'Top Tier 3',
        alive: true,
      },
      {
        id: 8,
        name: 'Mid Tier 3',
        alive: true,
      },
      {
        id: 9,
        name: 'Top Tier 3',
        alive: true,
      },
      {
        id: 10,
        name: 'Left Tier 4',
        alive: true,
      },
      {
        id: 11,
        name: 'Right Tier 4',
        alive: true,
      },
      {
        id: 12,
        name: 'Throne',
        alive: true,
      },
    ],
  },
  dire: {
    heroes: [6, 7, 8, 9, 10],
    networth: 3000,
    currentAction: null,
    lanes: {
      top: [6, 7],
      mid: [8],
      bot: [9, 10],
    },
    towers: [
      {
        id: 1,
        name: 'Top Tier 1',
        alive: true,
      },
      {
        id: 2,
        name: 'Mid Tier 1',
        alive: true,
      },
      {
        id: 3,
        name: 'Bot Tier 1',
        alive: true,
      },
      {
        id: 4,
        name: 'Top Tier 2',
        alive: true,
      },
      {
        id: 5,
        name: 'Mid Tier 2',
        alive: true,
      },
      {
        id: 6,
        name: 'Bot Tier 2',
        alive: true,
      },
      {
        id: 7,
        name: 'Top Tier 3',
        alive: true,
      },
      {
        id: 8,
        name: 'Mid Tier 3',
        alive: true,
      },
      {
        id: 9,
        name: 'Top Tier 3',
        alive: true,
      },
      {
        id: 10,
        name: 'Left Tier 4',
        alive: true,
      },
      {
        id: 11,
        name: 'Right Tier 4',
        alive: true,
      },
      {
        id: 12,
        name: 'Throne',
        alive: true,
      },
    ],
  },
}

const match = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_MATCH_TICK':
      return {
        ...state,
        tick: state.tick + 1,
      }

    case 'SET_MATCH_TIME':
      return {
        ...state,
        timeElapsed: action.tick * 30,
      }

    case 'ADD_LOG_EVENT':
      return {
        ...state,
        log: [
          {
            time: action.time,
            event: action.event,
          },
          ...state.log,
        ],
      }

    case 'UPDATE_NETWORTH':
      return {
        ...state,
        [action.team]: {
          ...state[action.team],
          networth: state[action.team].networth + action.value,
        },
      }

    case 'DESTROY_TOWER':
      return {
        ...state,
        [action.team]: {
          ...state[action.team],
          towers:
            state[action.team].towers.map(tower =>
              tower.id === action.id
                ? { ...tower, alive: false }
                : tower
            ),
        },
      }

    case 'KILL_ROSHAN':
      return {
        ...state,
        roshan: {
          alive: false,
          tickKilled: action.tick,
        },
      }

    case 'RESPAWN_ROSHAN':
      return {
        ...state,
        roshan: {
          alive: true,
          tickKilled: null,
        },
      }

    case 'START_GAME':
      return {
        ...state,
        isRunning: true,
      }

    case 'END_GAME':
      return {
        ...state,
        isRunning: false,
      }

    default:
      return state
  }
}

export default match
