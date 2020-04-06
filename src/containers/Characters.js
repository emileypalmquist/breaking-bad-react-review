import React, {Component} from 'react';
import CharacterCard from '../components/CharacterCard';

class Characters extends Component {

generateCharacters = () => {
    return this.props.chars.map(character => <CharacterCard handleClick={this.props.handleClick} character={character}/>)
}


    render() {
        return (
            <div className='card-container'>
                {this.generateCharacters()}
            </div>
        )
    }
}

export default Characters