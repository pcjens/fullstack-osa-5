import React from 'react';
import actionFor from './actions'

class App extends React.Component {
  vote = (id) => (event) => {
    event.preventDefault()
    this.props.store.dispatch(actionFor.vote(id))
  }

  addAnecdote = () => (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    this.props.store.dispatch(actionFor.addAnecdote(content))
    event.target.anecdote.value = ''
  }

  render() {
    const anecdotes = this.props.store.getState()

    const renderAnecdote = anecdote => {
      return (
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={this.vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )
    }
    const renderAnecdotes = () => anecdotes.map(renderAnecdote)

    return (
      <div>
        <h2>Anecdotes</h2>
        {renderAnecdotes()}
        <h2>create new</h2>
        <form onSubmit={this.addAnecdote()}>
          <div><input name='anecdote' /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default App
