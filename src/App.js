import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard'
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      selColorIdx: 0,
      guesses: [this.getNewGuess(), this.getNewGuess()],
      code: this.genCode(),

    };
  };

  genCode() {
    return new Array(4).fill().map( () => Math.floor(Math.random() * colors.length));
  };

  getNewGuess() { 
    return {
      code: [3, 2, 1, 0],
      score: {
        perfect: 0,
        almost: 0,
      }
    }
  }
  
  render() {
    return (
      <div className="App">
        Selected Color: {colors[this.state.selColorIdx]}

        <button onClick= { () => {this.setState( (state) => ({ selColorIdx: state.selColorIdx++ % 4 }) );  } }>

          NEXT Color
        </button>
        <header className="App-header">REACT MASTERMIND</header>
        <div className="gameboard">
          <Gameboard colors={colors} guesses={this.state.guesses} />
        </div>

        <div className="game-aside">
          <ColorPicker colors={colors} selColorIdx={this.state.selColorIdx}/>
          <GameTimer />
          <NewGameButton />
        </div>

        <footer className="component App-footer">footer</footer>
      </div>
    );    
  }
}

export default App;
