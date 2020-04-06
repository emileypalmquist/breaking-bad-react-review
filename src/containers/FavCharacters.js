import React, {Component} from 'react';
import CharacterCard from '../components/CharacterCard'


class FavCharacters extends Component {

    render() {
        console.log(this.props.favChars)
        return (
            <div className="FavCharacters">
                {this.props.favChars.map( char => <CharacterCard character={char} handleClick={this.props.removeFavChar}/>)}
            </div>
        )
    }
}

export default FavCharacters