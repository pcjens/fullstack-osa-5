import React from 'react'
import reducer from './reducer'

const Statistiikka = () => {
  const store = reducer.counterStore.getState()
  const feedback = store.good + store.ok + store.bad
  const goodRatio = store.good / feedback

  const statistiikka = () => (
    <div>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{store.good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{store.ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{store.bad}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{(goodRatio * 100).toFixed(1) + " %"}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => reducer.counterStore.dispatch({ type: 'ZERO' })}>nollaa tilasto</button>
    </div>
  )

  return (
    <div>
      <h2>Statistiikka</h2>
      {feedback === 0 ? <div>Yhtään palautetta ei ole annettu.</div> : statistiikka()}
    </div>
  )
}

class App extends React.Component {
  klik = (nappi) => () => {
    reducer.counterStore.dispatch({ type: nappi })
  }

  render() {
    return (
      <div>
        <h2>Anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>Hyvä</button>
        <button onClick={this.klik('OK')}>Neutraali</button>
        <button onClick={this.klik('BAD')}>Huono</button>
        <Statistiikka />
      </div>
    )
  }
}

export default App
