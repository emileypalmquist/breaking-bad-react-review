import React from "react";

const CharacterInfo = props => {
  console.log(props.char)
  return (
    <div>
      <h1>{props.char.name}</h1>
      <p>{props.char.status}</p>
      <p>{props.char.species}</p>
      <p>{props.char.gender}</p>
      <p>{props.char.location.name}</p>
      <img src={props.char.image} /><br/>
      <button onClick={props.handleBack}>Back</button>
      <button onClick={() => props.addToFavs(props.char)}>Add to Favorites</button>
    </div>
  );
};

export default CharacterInfo;