import React from "react";

const CharacterInfo = props => {
  const {removeChar, addToFavorites, character} = props
  const {name, img, nickname, portrayed} = props.character
 
  return (
    <div>
      <h6>{name}</h6>
      <h6>Nickname: {nickname}</h6>
      <h6>Actor/Actress: {portrayed}</h6>
      <img src={img}/><br/>
      <button onClick={() => addToFavorites(character)}>Add To Favorites</button>
      <button onClick={removeChar}>Back</button>
    </div>
  );
};

export default CharacterInfo;