import React from "react";
// import CharacterInfo from './CharacterInfo.js'


const Character = props => {
    const {name, img} = props.char
    
  return (
    <div className='card' onClick={() => props.handleCharClick(props.char)}>
        <h6>{name}</h6>
        <img src={img} />
    </div>
  );
};

export default Character;