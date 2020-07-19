import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  increaseMatchTick,
  startGame,
  addLogEvent,
  setMatchTime,
  updateNetworth,
} from 'app/redux/actions/match'

import {
  resolveLaningPhase,
  resolveTeamsAction,
  checkRoshanRespawn,
} from 'app/helpers/matchRng'

import { getMatchTime } from 'app/helpers/utils'

import { audioWin, audioLaning } from 'app/helpers/audio'

import Button from 'app/components/core/Button'

import Info from './Info'
import Map from './Map'
import Log from './Log'

import { Container, Board } from './styled'

const Match = () => {
  const dispatch = useDispatch()
  const isInitialMount = useRef(true)
  const match = useSelector(state => state.match)
  const timeElapsed = getMatchTime(match.tick)

  const handleStart = () => {
    dispatch(startGame())
    dispatch(addLogEvent(timeElapsed, 'Game started'))
    audioLaning.play()
  }

  // game ended sound
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      if (!match.isRunning) {
        audioWin.play()
        audioLaning.pause()
      }
    }
  }, [match.isRunning])

  useEffect(() => {
    if (match.isRunning) {
      const id = setInterval(() => {
        dispatch(setMatchTime(match.tick))

        // natural networth increase
        dispatch(updateNetworth(1000, 'radiant'))
        dispatch(updateNetworth(1000, 'dire'))

        // check roshan
        !match.roshan.alive && checkRoshanRespawn(dispatch, match, timeElapsed)

        // laning phase
        match.tick === 2 && dispatch(addLogEvent(timeElapsed, 'Laning phase started'))
        match.tick === 21 && resolveLaningPhase(dispatch, timeElapsed)

        // mid~late game
        match.tick > 21 && resolveTeamsAction(dispatch, match, timeElapsed)

        dispatch(increaseMatchTick())
      }, 200)

      return () => clearInterval(id)
    }
  })

  return (
    <Container>
      <Info match={match} />

      <Board>
        <Map match={match} />
        <Log />
      </Board>

      <Button onClick={handleStart}>
        start game
      </Button>
    </Container>
  )
}

export default Match
