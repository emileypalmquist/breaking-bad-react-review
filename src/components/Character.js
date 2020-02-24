import React from "react";

const Character = props => {
  return (
    <div className='card' onClick={() => props.handleCharClick(props.char)}>
	    <h3>{props.char.name}</h3>
      <img src={props.char.img}/>
    </div>
  );
};

export default Character;