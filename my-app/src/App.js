import React, { Component } from 'react';
import './App.css';
import Container from "./Container";
import CharacterCard from "./components/CharacterCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Column from "./Column";
import Title from "./components/Title";
import characters from "./characters.json";
import Row from "./Row";


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

    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 8) {
      this.setState({ currentScore: "Cowabunga! You Won" });
    }
    this.handleSort();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      clicked: []
    });
    this.handleSort();
  };

  handleSort = () => {
    let sortedCharacters = sortCharacters(characters);
    this.setState({ characters: sortedCharacters });
  };

  render() {
    console.log(CharacterCard)
    return (
      <Wrapper>
        <Navbar
          title="TMNT CLICKY"
          score={this.state.currentScore}
        />

        <Title>
          Click the pictures to win, but dont click any duplicates!
        </Title>

        <Container>
          <Row>
            {this.state.characters.map(character => (
              <Column size="md-3 sm-6">
                <CharacterCard
                  key={character.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleSort={this.handleSort}
                  id={character.id}
                  image={character.image}
                  name={character.name}
                />
              </Column>
            ))}
          </Row>

        </Container>
      </Wrapper>
    );
  }
}
export default App;
