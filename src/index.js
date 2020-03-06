import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import './index.css'
import { Provider } from 'store'

ReactDOM.render(
  <Provider>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
