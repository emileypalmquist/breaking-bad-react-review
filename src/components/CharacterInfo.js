import React from "react";

const CharacterInfo = props => {
  console.log(props.handleBackButton)
  return (
    <div >
      <img src={props.character.img}/>
      <h3>{props.character.nickname}</h3>
      <h6>{props.character.name}</h6>
      <h6>{props.character.birthday}</h6>
      <button onClick={() => props.handleFavsClick(props.character)}>Add Favorite</button>
      <button onClick={() => props.handleBackButton()}>back</button>
    </div>
  );
};

export default CharacterInfo;