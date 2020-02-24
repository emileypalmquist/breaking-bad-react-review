import React, {Component} from 'react';
import Character from '../components/Character.js'

class FavCharacters extends Component {

    render() {
        console.log(this.props.favCharacters)
        return (
        <div className="FavCharacters">
            {this.props.favCharacters.map(char => <Character char={char} handleCharClick={this.props.removeFavCharacter}/>)}
        </div>
        )
    }
}

export default FavCharacters