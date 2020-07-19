import React from 'react'
import { navigate } from '@reach/router'

import Text from 'app/components/core/Text'

import { Container, Button } from './styled'

const Home = () => {
  return (
    <Container>
      <Text component='h1' padding='0 0 3rem 0'>
        dota elifoot
      </Text>

      <Button onClick={() => navigate('teamselector')}>
        new game
      </Button>
      <Button>
        load game
      </Button>
      <Button>
        settings
      </Button>
    </Container>
  )
}

export default Home
