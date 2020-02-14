import React, {Component} from 'react'
import Character from '../components/Character.js'
import CharacterInfo from '../components/CharacterInfo.js'

class Characters extends Component {

    render() {
        const {addToFavorites, char, removeChar, handleCharClick, characters} = this.props
        return (
            <div className='card-container'>
                {char !== null ? 
                <CharacterInfo character={char} addToFavorites={addToFavorites} removeChar={removeChar}/> 
                : characters.map(character => <Character key={character.char_id} char={character} handleCharClick={handleCharClick}/>)}
            </div>
        )
    }
}

export default Characters