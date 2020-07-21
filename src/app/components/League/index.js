import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { generateLeagueGroupStage } from 'app/helpers/utils'
import teams from 'app/helpers/teams'

import Text from 'app/components/core/Text'
import Button from 'app/components/core/Button'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import { Groups, Group } from './styled'

const League = () => {
  const dispatch = useDispatch()
  const league = useSelector(state => state.league)
  const columns = ['Team', 'Points']

  const handleClick = () => {
    navigate('team')
  }

  useEffect(() => {
    generateLeagueGroupStage(dispatch, teams)
  }, [])

  return (
    <div>
      <Text component='h1'>
        League
      </Text>
      <Text padding='1rem 0 0 0'>
        {`youre playing ${league.name}`}
      </Text>

      <Groups>
        {
          league.groups.map(group =>
            <Group key={group.name}>
              <Text component='h3' padding='0 0 1rem 0'>
                {`Group ${group.name}`}
              </Text>

              <Table columns={columns}>
                {
                  group.teams.map(team =>
                    <tr key={team.name}>
                      <Cell id='team' width='150px'>
                        <Text variant='hideOverflow'>
                          {team.name}
                        </Text>
                      </Cell>

                      <Cell id='points'>
                        0
                      </Cell>
                    </tr>
                  )
                }
              </Table>
            </Group>
          )
        }
      </Groups>

      <Button onClick={handleClick}>
        {'next >'}
      </Button>
    </div>
  )
}

export default League
