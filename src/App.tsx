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

  const switchNameHandler = (): void => {
    setPersonsState({
      persons: [
        { username: 'Carlita', age: 26},
        { username: 'Luquita', age: 23},
        { username: 'Dufo', age: 23}
      ]
    });
    setOtherState({otherState: 'null'});
  }

  return (
    <div className="App">
      <Person username={personsState.persons[0].username} age={personsState.persons[0].age}>My hobbies: Roasting peoples</Person>
      <Person username={personsState.persons[1].username} age={personsState.persons[1].age}>My hobbies: Cyberpunk</Person>
      <Person username={personsState.persons[2].username} age={personsState.persons[2].age} />
      <hr />
      <br />
      <p>App others states: <b>{otherState.otherState}</b></p>
      <button onClick={switchNameHandler}>Switch Name</button>
    </div>
  );
}

export default App;

