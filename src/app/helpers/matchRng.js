import { audioRoshan } from './audio'

import {
  addLogEvent,
  increaseRadiantNetworth,
  increaseDireNetworth,
  updateNetworth,
  destroyTower,
  killRoshan,
  respawnRoshan,
  endGame,
} from 'app/redux/actions/match'

import { capitalizeString } from './utils'

const getLaneRng = (dispatch, lane, time) => {
  const rng = Math.random()
  if (rng > 0.7) {
    dispatch(addLogEvent(time, `${capitalizeString(lane)} lane tied`))
  } else if (rng < 0.35) {
    dispatch(addLogEvent(time, `Radiant won ${lane} lane`))
    dispatch(updateNetworth(1500, 'radiant'))
  } else {
    dispatch(addLogEvent(time, `Dire won ${lane} lane`))
    dispatch(updateNetworth(1500, 'dire'))
  }
}

export const resolveLaningPhase = (dispatch, time) => {
  getLaneRng(dispatch, 'top', time)
  getLaneRng(dispatch, 'mid', time)
  getLaneRng(dispatch, 'bot', time)
  dispatch(addLogEvent(time, 'Laning phase ended'))
}

export const farm = (dispatch, time, team) => {
  if (team === 'radiant') {
    dispatch(addLogEvent(time, 'Radiant is farming'))
    dispatch(increaseRadiantNetworth(200))
  } else {
    dispatch(addLogEvent(time, 'Dire is farming'))
    dispatch(increaseDireNetworth(200))
  }
}

export const pushThrone = (dispatch, match, time, team) => {
  const attacking = team
  const defending = team === 'radiant' ? 'dire' : 'radiant'

  dispatch(addLogEvent(time, `${capitalizeString(attacking)} is attacking the Throne!`))

  const rng = Math.random()
  if (rng > 0.5) {
    dispatch(addLogEvent(time, `Throne destroyed! ${capitalizeString(attacking)} wins!`))
    dispatch(addLogEvent(time, `Game ended. ${capitalizeString(attacking)} victory. gg`))
    dispatch(endGame())
  } else {
    dispatch(addLogEvent(time, `${capitalizeString(defending)} defended the Throne!`))
  }
}

export const pushTower = (dispatch, match, time, team) => {
  const attacking = team
  const defending = team === 'radiant' ? 'dire' : 'radiant'

  const tower = match[defending].towers.find(tower => tower.alive)

  if (tower) {
    if (tower.name === 'Throne') {
      pushThrone(dispatch, match, time, attacking)
      return
    }

    dispatch(addLogEvent(time, `${capitalizeString(attacking)} is pushing ${tower.name} tower`))
    const rngDefend = Math.random()

    if (rngDefend < 0.5) {
      dispatch(addLogEvent(time, `${capitalizeString(defending)} is not defending ${tower.name} tower`))
      dispatch(destroyTower(tower.id, defending))
      dispatch(addLogEvent(time, `${capitalizeString(defending)} ${tower.name} destroyed`))
      dispatch(updateNetworth(600, attacking))
      dispatch(updateNetworth(200, defending))
    } else {
      dispatch(addLogEvent(time, `${capitalizeString(defending)} is defending ${tower.name} tower`))
      const rngDefAttempt = Math.random()

      if (rngDefAttempt < 0.5) {
        dispatch(addLogEvent(time, `${capitalizeString(defending)} failed to defend`))
        dispatch(destroyTower(tower.id, defending))
        dispatch(addLogEvent(time, `${capitalizeString(defending)} ${tower.name} destroyed`))
        dispatch(updateNetworth(600, attacking))
      } else {
        dispatch(addLogEvent(time, `${capitalizeString(defending)} defended ${tower.name} tower`))
      }
    }
  }
}

export const gank = (dispatch, time, team) => {
  const attacking = team
  const defending = team === 'radiant' ? 'dire' : 'radiant'

  dispatch(addLogEvent(time, `${capitalizeString(attacking)} is trying to gank ${capitalizeString(defending)}`))

  const rng = Math.random()
  if (rng > 0.5) {
    dispatch(addLogEvent(time, 'Gank successful'))
    dispatch(updateNetworth(300, attacking))
    dispatch(updateNetworth(-300, defending))
  } else {
    dispatch(addLogEvent(time, `${capitalizeString(defending)} was prepared. Ganking failed`))
  }
}

export const roshanRaid = (dispatch, match, time, team) => {
  const attacking = team
  const defending = team === 'radiant' ? 'dire' : 'radiant'

  dispatch(addLogEvent(time, `${capitalizeString(attacking)} is raiding Roshan`))

  const rng = Math.random()
  if (rng > 0.5) {
    dispatch(addLogEvent(time, `${capitalizeString(defending)} is not defending`))
    dispatch(addLogEvent(time, `${capitalizeString(attacking)} killed Roshan`))
    dispatch(killRoshan(match.tick))
    audioRoshan.play()
    dispatch(updateNetworth(900, attacking))
    dispatch(updateNetworth(200, defending))
  } else {
    dispatch(addLogEvent(time, `${capitalizeString(defending)} is aware. They are defending`))

    const rngDefAttempt = Math.random()
    if (rngDefAttempt > 0.5) {
      dispatch(addLogEvent(time, `${capitalizeString(defending)} failed to defend`))
      dispatch(addLogEvent(time, `${capitalizeString(attacking)} killed Roshan`))
      dispatch(killRoshan(match.tick))
      audioRoshan.play()
      dispatch(updateNetworth(900, attacking))
    } else {
      dispatch(addLogEvent(time, `${capitalizeString(defending)} defended Roshan raid attempt`))
    }
  }
}

export const checkRoshanRespawn = (dispatch, match, time) => {
  if (match.tick === match.roshan.tickKilled + 10) {
    dispatch(respawnRoshan())
    dispatch(addLogEvent(time, 'Roshan respawned!'))
  }
}

export const resolveTeamsAction = (dispatch, match, time) => {
  const rng = Math.random()

  if (rng > 0.8) {
    const rngGank = Math.random()
    rngGank > 0.5
      ? gank(dispatch, time, 'radiant')
      : gank(dispatch, time, 'dire')
  } else if (rng > 0.6 && match.roshan.alive) {
    const rngRoshan = Math.random()
    rngRoshan > 0.5
      ? roshanRaid(dispatch, match, time, 'radiant')
      : roshanRaid(dispatch, match, time, 'dire')
  } else {
    const rngPush = Math.random()
    rngPush < 0.5
      ? pushTower(dispatch, match, time, 'radiant')
      : pushTower(dispatch, match, time, 'dire')
  }
}
