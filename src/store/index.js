import makeStore from './makeStore'

const state = {
  message: 'Hello Universe!'
}

export const { StoreProvider, useStore } = makeStore(state)
