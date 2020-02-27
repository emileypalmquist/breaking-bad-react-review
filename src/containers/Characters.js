import React, {Component} from 'react'
import Character from '../components/Character.js'


class Characters extends Component {

    render() {
        const {handleCharClick, characters} = this.props
        return (
            <div className='card-container'>
                {characters.map(character => <Character key={character.char_id} char={character} handleCharClick={handleCharClick}/>)}
            </div>
        )
    }
}

export default Characters