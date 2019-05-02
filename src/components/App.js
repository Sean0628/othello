import React from 'react';
import Board from './Board';
import Header from './Header';
import Alert from './Alert';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Alert />
      <Board />
    </div>
  );
};

export default App;
