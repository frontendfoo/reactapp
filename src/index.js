import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import './index.css'
import { StoreProvider } from 'store'

ReactDOM.render(
  <StoreProvider>
    <AppContainer />
  </StoreProvider>,
  document.getElementById('root')
)
