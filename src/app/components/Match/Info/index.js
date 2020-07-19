import React from 'react'
import PropTypes from 'prop-types'

import gold from 'assets/images/gold.png'

import { getHeroImage, getMatchTime } from 'app/helpers/utils'
import teams from 'app/helpers/teams'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import { Container, Heroes, Score, Team, Networth } from './styled'

const Info = ({ match }) => {
  return (
    <>
      <Container>
        <Heroes>
          {
            match.radiant.heroes.map(hero =>
              <Image
                key={hero}
                src={getHeroImage(hero)}
              />
            )
          }
        </Heroes>

        <Score>
          <Team>
            <Image src={teams[0].logo} height='33px' />

            <Networth>
              <Image src={gold} />
              <Text component='span'>{match.radiant.networth}</Text>
            </Networth>
          </Team>

          <Text component='h1' padding='0 1rem'>
            0 x 0
          </Text>

          <Team>
            <Image src={teams[1].logo} height='33px' />

            <Networth>
              <Image src={gold} />
              <Text component='span'>{match.dire.networth}</Text>
            </Networth>
          </Team>
        </Score>

        <Heroes>
          {
            match.dire.heroes.map(hero =>
              <Image
                key={hero}
                src={getHeroImage(hero)}
              />
            )
          }
        </Heroes>
      </Container>

      <Text style={{ textAlign: 'center' }}>
        {getMatchTime(match.tick)}
      </Text>
    </>
  )
}

Info.propTypes = {
  match: PropTypes.object,
}

export default Info
