import reducer from '../reducer'

describe('anecdote reducer', () => {
  it('should return a proper initial state when called with undefined state', () => {
    const action = { type: 'DO_NOTHING' }
    const newState = reducer(undefined, action)
    expect(newState.length).toBe(6)
  })
})
