import React, {Component} from 'react'
import Character from '../components/Character.js'

class FavCharacters extends Component {

    render() {
        const {characters, handleCharClick} = this.props
        return (
        <div className="FavCharacters">
            {characters.length > 0 && characters.map(char => <Character key={char.char_id} char={char} handleCharClick={handleCharClick}/>)}
        </div>
        )
    }
}

export default FavCharacters