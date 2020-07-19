import React from 'react'
import { Router } from '@reach/router'

import Home from 'app/pages/Home'
import Team from 'app/pages/Team'
import Match from 'app/pages/Match'
import TeamSelector from 'app/pages/TeamSelector'

import { Section, MainContent } from './styled'

const AppRouter = () => {
  return (
    <Section>
      <MainContent>
        <Router>
          <Home path='/' />
          <TeamSelector path='/teamselector' />

          <Team path='team' />

          <Match path='match' />
        </Router>
      </MainContent>
    </Section>
  )
}

export default AppRouter
