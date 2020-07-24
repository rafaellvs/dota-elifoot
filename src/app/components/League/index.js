import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { createLeague } from 'app/redux/actions/leagues'

import { generateLeagueGroupStage } from 'app/helpers/utils'
import teams from 'app/helpers/teams'

import GroupCrosstable from 'app/components/GroupCrosstable'

import Text from 'app/components/core/Text'
import Button from 'app/components/core/Button'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import { Group, Tables } from './styled'

const League = () => {
  const dispatch = useDispatch()
  const columns = ['Team', 'Score', 'Points']

  dispatch(createLeague({
    id: 1,
    name: 'The international',
    teams: teams,
    groupStage: generateLeagueGroupStage(teams),
    playoffs: null,
  }))
  const league = useSelector(state => state.leagues[0])

  const handleClick = () => {
    navigate('team')
  }

  return (
    <div>
      <Text component='h1'>
        {league.name}
      </Text>
      <Text padding='1rem 0 0 0'>
        {`youre playing ${league.name}`}
      </Text>

      {
        league.groupStage.map(group =>
          <Group key={group.name}>
            <Text component='h3' padding='0 0 1rem 0'>
              {`Group ${group.name}`}
            </Text>

            <Tables>
              <Table columns={columns}>
                {
                  group.teams.map(team =>
                    <tr key={team.name}>
                      <Cell id='team' width='150px'>
                        <Text variant='hideOverflow'>
                          {team.name}
                        </Text>
                      </Cell>

                      <Cell id='score'>
                        0-0-0
                      </Cell>

                      <Cell id='points' align='center'>
                        0
                      </Cell>
                    </tr>
                  )
                }
              </Table>

              <GroupCrosstable group={group} />
            </Tables>
          </Group>
        )
      }

      <Button onClick={handleClick}>
        {'next >'}
      </Button>
    </div>
  )
}

export default League
