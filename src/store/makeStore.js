import React, { createContext, useState, useMemo, useContext } from 'react'
function makeStore(initialState) {
  const context = createContext()

  const StoreProvider = props => {
    const [state, setState] = useState(props.initialState || initialState || {})

    const contextValue = useMemo(() => [state, setState], [state])

    return (
      <context.Provider value={contextValue}>{props.children}</context.Provider>
    )
  }

  const useStore = () => {
    const [state, setState] = useContext(context)
    return { state, setState }
  }
  return { StoreProvider, useStore }
}

export default makeStore
