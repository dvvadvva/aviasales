import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import TicketsContainer from './component/ticket/ticketsContainer'

function App(props) {
  return (
    <BrowserRouter>
      <header>v1</header>
        <TicketsContainer store={props.store} dispatch={props.dispatch}/>
    </BrowserRouter>
  );
}

export default App;
