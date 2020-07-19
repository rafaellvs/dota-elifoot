import React from 'react'
import PropTypes from 'prop-types'

import map from 'assets/images/map.jpg'

import { getHeroIcon } from 'app/helpers/utils'

import Image from 'app/components/core/Image'

import {
  Container,
  RadiantTop,
  DireTop,
  RadiantMid,
  DireMid,
  RadiantBot,
  DireBot,
} from './styled'

const Map = ({ match }) => {
  return (
    <Container>
      <Image src={map} width='100%' />

      <RadiantTop>
        {match.radiant.lanes.top.map(hero => <Image key={hero} src={getHeroIcon(hero)} />)}
      </RadiantTop>
      <DireTop>
        {match.dire.lanes.top.map(hero => <Image key={hero} src={getHeroIcon(hero)} />)}
      </DireTop>

      <RadiantMid>
        {match.radiant.lanes.mid.map(hero => <Image key={hero} src={getHeroIcon(hero)} />)}
      </RadiantMid>
      <DireMid>
        {match.dire.lanes.mid.map(hero => <Image key={hero} src={getHeroIcon(hero)} />)}
      </DireMid>

      <RadiantBot>
        {match.radiant.lanes.bot.map(hero => <Image key={hero} src={getHeroIcon(hero)} />)}
      </RadiantBot>
      <DireBot>
        {match.dire.lanes.bot.map(hero => <Image key={hero} src={getHeroIcon(hero)} />)}
      </DireBot>
    </Container>
  )
}

Map.propTypes = {
  match: PropTypes.object,
}

export default Map
