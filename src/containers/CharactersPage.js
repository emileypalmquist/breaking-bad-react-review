import React, {Component} from 'react'
import Characters from '../containers/Characters.js'
import FavCharacters from '../containers/FavCharacters.js'


// https://www.breakingbadapi.com/api/characters


class CharactersPage extends Component {

    render() {
        return (
            <div>
                <FavCharacters />
                <Characters />
            </div>
        )
    }
}

export default CharactersPage