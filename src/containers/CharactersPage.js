import React, {Component} from 'react';
import Characters from './Characters.js';
import FavCharacters from './FavCharacters.js'
import CharacterInfo from '../components/CharacterInfo.js'



class CharactersPage extends Component {

    constructor(){
        super()
        this.state={
            characters: [],
            character: null,
            favChars: []
        }
    }


    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character')
        .then(resp => resp.json())
        .then(chars => this.setState({characters: chars.results}))
    }

    handleClick = (character) => {
        this.setState({
            character
        })
    }

    handleBack = () => {
        this.setState({
            character: null
        })
    }

    removeFavChar = (char) => {
        const newFavs = this.state.favChars.filter(character => character !== char)
        this.setState({
            favChars: newFavs
        })
    }

    addToFavs = (char) => {
        if (!this.state.favChars.includes(char)) {
            this.setState(prevState => ({
                favChars: [...prevState.favChars, char]
            }))
        }
    }


    render() {
        return (
            <div>
                <FavCharacters favChars={this.state.favChars} removeFavChar={this.removeFavChar}/>
                {this.state.character ? <CharacterInfo char={this.state.character} handleBack={this.handleBack} addToFavs={this.addToFavs}/>:<Characters handleClick={this.handleClick} chars={this.state.characters} />} 
            </div>
        )
    }
}


export default CharactersPage