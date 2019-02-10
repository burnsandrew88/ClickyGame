import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import CharCards from "./components/CharCards";
import character from "./characters.json";
import './App.css';

class App extends Component {
  state = {
    character,
    clickedCharacter: [],
    score: 0
  };
  // When you click on a card... the Bob's Burger character is taken out of the arry
  imageClick = event => {
    const currentCharacter = event.target.alt;
    const CharacterAlreadyClicked = this.state.clickedCharacter.indexOf(currentCharacter) > -1;

    if (CharacterAlreadyClicked) {
      this.setState({
        character: this.state.character.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharacter: [],
        score: 0
      });
      alert("You lose. Play again?");
    } else {
      this.setState(
        {
          character: this.state.character.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedCharacter: this.state.clickedCharacter.concat(
            currentCharacter
          ),
          score: this.state.score + 1

        },
        () => {
          if (this.state.score === 12) {
            alert("YAY! YOU WIN! ALLLLL RIGHTTTTT!");
            this.setState({
              character: this.state.character.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedCharacter: [],
              score: 0
            });
          }
        }
      );
    }
  };
  render() {
    return (
      <div>
        <Navbar
        score={this.state.score} />
        <Jumbotron />
        <div className="wrapper">
          {this.state.character.map(character => (
            <CharCards imageClick={this.imageClick}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </div>
        <Footer />
      </div>

    )
  }
}

export default App;
