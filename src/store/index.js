import makeStore from '@thefrontend/contextstore'

const state = {
  message: 'Hello Universe!'
}

export const { Provider, useStore } = makeStore(state)
