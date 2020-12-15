import React, {useState} from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = () => {
  const [boardBrandState, setBoardBrandState] = useState({
    brand: 'Primitive'
  })

  const boardBrandHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setBoardBrandState({
      brand: e.target.value
    })
  }

  return (
    <div className="App">
      <h1>Assignment 0</h1>
      <br />
      <UserInput 
        boardBrandHandler={boardBrandHandler} 
        brand={boardBrandState.brand} />
      <UserOutput 
        size={8.5} 
        brand={boardBrandState.brand} />
      <UserOutput 
        size={8.125} 
        brand='REAL' />
      <UserOutput 
        size={8.3} 
        brand='Palace' />
    </div>
  );
}

export default App;

