import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import TicketsContainer from './component/ticket/ticketsContainer'

function App(props) {
  return (
    <BrowserRouter>
        <TicketsContainer store={props.store} dispatch={props.dispatch}/>
    </BrowserRouter>
  );
}

export default App;
