import React, {Component} from 'react';
import Character from '../components/Character.js'

import CharacterInfo from '../components/CharacterInfo.js'

class Characters extends Component {
    state = {
        character: null
    }

    handleCharClick = (char) => {
        this.setState({
            character: char
        })
    }

    handleBackButton = () => {
        this.setState({
            character: null
        })
    }

    render() {
        
        return (
        <div className='card-container'>
            {this.state.character ?  <CharacterInfo character={this.state.character} handleFavsClick={this.props.handleFavsClick} handleBackButton={this.handleBackButton}/> : this.props.characters.map(char => <Character key={char.char_id} char={char} handleCharClick={this.handleCharClick}/>)}
        </div>
        )
    }
}

export default Characters