import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { LocationProvider } from '@reach/router'

import store from 'app/redux/store'
import GlobalStyles from 'app/helpers/globalStyles'
import Router from 'app/components/Router'

render(
  <LocationProvider>
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  </LocationProvider>,
  document.getElementById('root')
)
