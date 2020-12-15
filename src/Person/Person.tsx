import React from 'react';

interface Iperson {
  children?: string;
  username: string;
  age: number;
}

const person = (props: Iperson) => {
  return (
    <div>      
      <h3>I'm {props.username} and I am {props.age}</h3>
      <p>{props.children}</p>
    </div>
  )
}

export default person;