import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard'
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">REACT MASTERMIND</header>
        <Gameboard />
        <ColorPicker />
        <GameTimer />
        <NewGameButton />
        <footer className="component">footer</footer>
      </div>
    );    
  }
}

export default App;
