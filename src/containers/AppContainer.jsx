import React, { useMemo } from 'react'
import App from '../components/App'
import { useStore } from 'store'

const AppContainer = () => {
  const { state } = useStore()

  const props = {
    message: useMemo(() => state.message, [state.message])
  }

  return <App {...props} />
}

export default AppContainer
