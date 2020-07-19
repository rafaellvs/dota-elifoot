export const increaseMatchTick = () => ({
  type: 'INCREASE_MATCH_TICK',
})

export const setMatchTime = tick => ({
  type: 'SET_MATCH_TIME',
  tick: tick,
})

export const addLogEvent = (time, event) => ({
  type: 'ADD_LOG_EVENT',
  time: time,
  event: event,
})

export const updateNetworth = (value, team) => ({
  type: 'UPDATE_NETWORTH',
  value: value,
  team: team,
})

export const destroyTower = (id, team) => ({
  type: 'DESTROY_TOWER',
  id: id,
  team: team,
})

export const killRoshan = tick => ({
  type: 'KILL_ROSHAN',
  tick: tick,
})

export const respawnRoshan = () => ({
  type: 'RESPAWN_ROSHAN',
})

export const startGame = () => ({
  type: 'START_GAME',
})

export const endGame = () => ({
  type: 'END_GAME',
})
