import React, {Component} from 'react';
import Characters from './Characters.js';
import FavCharacters from './FavCharacters.js';



// https://www.breakingbadapi.com/api/characters


class CharactersPage extends Component {
    state = {
        characters: [],
        favCharacters: []
    }

    componentDidMount() {
        fetch('https://www.breakingbadapi.com/api/characters')
            .then(resp => resp.json())
            .then(data => this.setState({characters: data}))
    }

    handleFavsClick = (char) => {
        if(!this.state.favCharacters.includes(char)) {
            this.setState(prevState => ({
                ...prevState,
                favCharacters: [...prevState.favCharacters, char]
            }))
        }
    }

    removeFavCharacter = (character) => {
        const newFavs = this.state.favCharacters.filter(char => char !== character)
        this.setState(prevState => ({
            ...prevState,
            favCharacters: newFavs
        }))
    }

    render() {
        console.log(this.state.favCharacters)
        return (
            <div>
                <FavCharacters favCharacters={this.state.favCharacters} removeFavCharacter={this.removeFavCharacter}/>
                <Characters handleFavsClick={this.handleFavsClick} characters={this.state.characters}/>
            </div>
        )
    }
}

export default CharactersPage