import React from 'react'
import { useSelector } from 'react-redux'

import Text from 'app/components/core/Text'

import { Container } from './styled'

const Log = () => {
  const log = useSelector(state => state.match.log)

  return (
    <Container>
      <Text component='h3' padding='0 0 1rem 0'>
        Log
      </Text>

      {
        log.map((entry, index) =>
          <div key={index}>
            <Text>{`${entry.time}: ${entry.event}`}</Text>
          </div>
        )
      }
    </Container>
  )
}

export default Log
