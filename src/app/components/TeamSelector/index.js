import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'

import { setPlayerTeam } from 'app/redux/actions/team'

import teams from 'app/helpers/teams'

import Text from 'app/components/core/Text'
import Image from 'app/components/core/Image'
import Button from 'app/components/core/Button'

import {
  Teams,
  Team,
  Buttons,
} from './styled'

const TeamSelector = () => {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(null)

  const handleGetTeam = () => {
    const rng = Math.floor(Math.random() * teams.length + 1)
    setSelected(rng)
  }

  const handleNext = () => {
    dispatch(setPlayerTeam(teams[selected - 1]))
    navigate('team')
  }

  return (
    <>
      <Text component='h1'>
        get a team
      </Text>
      <Text padding='1rem 0 0 0'>
        youll be randomly assigned one of the following teams:
      </Text>

      <Teams>
        {
          teams.map(team =>
            <Team
              key={team.id}
              selected={team.id === selected}
            >
              <Image src={team.logo} />
              <Text padding='1rem 0 0 0'>
                {team.name}
              </Text>
            </Team>
          )
        }
      </Teams>

      <Buttons>
        <Button
          disabled={selected}
          onClick={handleGetTeam}
        >
          get a team
        </Button>
        <Button
          disabled={!selected}
          onClick={handleNext}
        >
          {'next >'}
        </Button>
      </Buttons>
    </>
  )
}

export default TeamSelector
