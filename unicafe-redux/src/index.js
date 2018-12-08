import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer'

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
}

render()
reducer.counterStore.subscribe(render)
