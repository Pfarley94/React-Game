import React, { Component } from 'react';
import './App.css';
import Container from "./Container";
import CharacterCard from "./components/CharacterCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Column from "./Column";
import Title from "./components/Title";
import characters from "./characters.json";


function sortCharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleSort();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Glaven!",
      clicked: []
    });
    this.handleSort();
  };

  handleSort = () => {
    let sortedCharacters = sortCharacters(characters);
    this.setState({ characters: sortCharacters });
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          title="TMNT CLICKY"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          tehmpo
        </Title>

        <Container>
        
            {this.state.character.map(character => (
              <Column size="md-3 sm-6">
                <CharacterCard
                  key={character.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleSort={this.handleSort}
                  id={character.id}
                  image={character.image}
                />
              </Column>
            ))}
        
        </Container>
      </Wrapper>
    );
  }
}

export default App;
