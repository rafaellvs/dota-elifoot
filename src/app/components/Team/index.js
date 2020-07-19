import React from 'react'

import teams from 'app/helpers/teams'

import Text from 'app/components/core/Text'
import Image from 'app/components/core/Image'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import { Overview, Info } from './styled'

const Team = () => {
  const columns = ['Name', 'Position']
  const columnsMatch = ['Against', 'League', 'Bracket', 'Format']
  const team = teams[0]

  return (
    <>
      <Overview>
        <Image src={team.logo} />
        <Text component='h1'>
          {team.name}
        </Text>
      </Overview>

      <Info>
        <div>
          <Text component='h3' padding='1rem 0'>
            Players
          </Text>
          <Table columns={columns}>
            {
              team.players.map(player =>
                <tr key={player.id}>
                  <Cell id='name'>
                    {player.name}
                  </Cell>

                  <Cell id='position'>
                    {player.position}
                  </Cell>
                </tr>
              )
            }
          </Table>
        </div>

        <div>
          <Text component='h3' padding='1rem 0'>
            Next Match
          </Text>
          <Table columns={columnsMatch}>
            <tr>
              <Cell id='against'>
                Team Secret
              </Cell>

              <Cell id='League'>
                The International
              </Cell>

              <Cell id='bracket'>
                Upper Quarter-finals
              </Cell>

              <Cell id='format'>
                BO3
              </Cell>
            </tr>
          </Table>
        </div>
      </Info>
    </>
  )
}

export default Team
