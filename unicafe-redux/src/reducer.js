import { createStore } from 'redux'

const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GOOD':
    const betterState = { ...state, good: state.good + 1 }
    return betterState
  case 'OK':
    const okayerState = { ...state, ok: state.ok + 1 }
    return okayerState
  case 'BAD':
    const worseState = { ...state, bad: state.bad + 1 }
    return worseState
  case 'ZERO':
    const zeroState = { ...initialState }
    return zeroState
  default:
    return state
  }
}

const counterStore = createStore(counterReducer)

export default { counterReducer, counterStore }
