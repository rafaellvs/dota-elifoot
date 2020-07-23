import React from 'react'
import PropTypes from 'prop-types'

import { generateMatrixMatchesIndex } from 'app/helpers/utils'

import Image from 'app/components/core/Image'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

const GroupCrosstable = ({ group }) => {
  const matrix = generateMatrixMatchesIndex(group.teams.length)
  const matches = group.matches

  const renderFirstRow = teams =>
    <tr>
      <Cell id='empty' />

      {
        teams.map(team =>
          <Cell
            id='team'
            key={team.id}
            align='center'
          >
            <Image src={team.logo} height='30px' />
          </Cell>
        )
      }
    </tr>

  const renderCells = (teams, i) => {
    const cells = []

    for (let j = 0; j < teams.length; j++) {
      cells.push(
        <Cell key={j} align='center'>
          {
            i === j
              ? '-'
              : i < j
                ? `${matches[matrix[i][j]].team1Score}x${matches[matrix[i][j]].team2Score}`
                : `${matches[matrix[j][i]].team1Score}x${matches[matrix[j][i]].team2Score}`
          }
        </Cell>
      )
    }

    return cells
  }

  return (
    <Table>
      {renderFirstRow(group.teams)}

      {
        group.teams.map((team, index) =>
          <tr key={team.id}>
            <Cell
              id='team'
              key={team.id}
              align='center'
            >
              <Image src={team.logo} height='30px' />
            </Cell>

            {renderCells(group.teams, index)}
          </tr>
        )
      }
    </Table>
  )
}

GroupCrosstable.propTypes = {
  group: PropTypes.object,
}

export default GroupCrosstable
