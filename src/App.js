import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import TicketsContainer from './component/ticketsContainer'
import { Provider } from 'react-redux'

function App(props) {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <TicketsContainer dispatch={props.dispatch} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
