import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TicketsContainer from './component/ticketsContainer'
import { Provider } from 'react-redux'

function App(props) {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <TicketsContainer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
