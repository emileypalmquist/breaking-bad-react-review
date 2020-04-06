import React from "react";

const CharacterCard = props => {
  const {name, image} = props.character
  const {handleClick} = props
  
  return (
    <div className='card' onClick={() => handleClick(props.character)}>
      <h1>{name}</h1>
      <img src={image}/>
    </div>
  );
};

export default CharacterCard;