import React from 'react';

interface IUsersInput {
  boardBrandHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  brand: string;
}

const UserInput = (props: IUsersInput) => {
  return(
    <div className="UserInput--container">
      <h3>Your Board brand ?</h3>
      <input 
        type="text" 
        name="boardBrand" 
        id="boardBrand"
        placeholder="Brand ?"
        onChange={props.boardBrandHandler}
        value={props.brand}/>
    </div>
  );
}

export default UserInput;