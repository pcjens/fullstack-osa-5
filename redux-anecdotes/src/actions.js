const actionFor = {
  vote(id) {
    return {
      type: 'VOTE',
      data: id
    }
  },

  addAnecdote(content) {
    return {
      type: 'NEW_ANECDOTE',
      data: content
    }
  }
}

export default actionFor
