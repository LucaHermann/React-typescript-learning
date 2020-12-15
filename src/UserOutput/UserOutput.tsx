import React from 'react';
import './UserOutput.css';

interface IUserOutput {
  size: number;
  brand: string
}

const UserOutput = (props: IUserOutput) => {
  return(
    <div className="UserOutput--card">
      <p>I skate a <b>{props.size}</b> board</p>
      <p>this is a <b>{props.brand}</b> board</p>
    </div>
  );
}

export default UserOutput;