import React, {useState} from 'react';
import './App.css';

import Person from './Person/Person'

const App = (props: any) => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { username: 'Carla', age: 26},
      { username: 'Luca', age: 23},
      { username: 'Dauph', age: 23}
    ]
  });

  const [otherState, setOtherState] = useState({
    otherState: 'undefined'
  });

  const switchNameHandler = (newName: string): void => {
    setPersonsState({
      persons: [
        { username: newName, age: 62},
        { username: 'Luquita', age: 32},
        { username: 'Dufo', age: 32}
      ]
    });
    setOtherState({
      otherState: 'null'
    });
  }

  const usernameChangedHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setPersonsState({
      persons: [
        { username: 'Carlita', age: 26},
        { username: e.target.value, age: 23},
        { username: 'Dufo', age: 23}
      ]
    });
  }

  return (
    <div className="App">
      <button 
        onClick={() => switchNameHandler('Carlos')}
      >Switch Name</button>
      <Person 
        switchNameHandler={switchNameHandler.bind(this, 'Carlita')}
        username={personsState.persons[0].username}
        age={personsState.persons[0].age}>My hobbies: Roasting peoples</Person>
      <Person
        username={personsState.persons[1].username} 
        age={personsState.persons[1].age}
        usernameChangedHandler={usernameChangedHandler}
        >My hobbies: Cyberpunk</Person>
      <Person
        username={personsState.persons[2].username} 
        age={personsState.persons[2].age} />
      <p>{otherState.otherState}</p>
    </div>
  );
}

export default App;

