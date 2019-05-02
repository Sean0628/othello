import React from 'react';
import {
  positions,
  Provider as AlertProvider
} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Board from './Board';
import Header from './Header';
import Alert from './Alert';

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
};

const App = () => {
  return (
    <AlertProvider
      template={AlertTemplate}
    {...options}
    >
      <div className='container'>
        <Header />
        <Alert />
        <Board />
      </div>
    </AlertProvider>
  );
};

export default App;
