import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs'
import GuessScore from '../GuessScore/GuessScore'
const GuessRow = (props) => { 
  return (
  <div className="component flex-component">
    GuessRow #
    <GuessPegs />
    <GuessScore />
  </div>
  )
};

export default GuessRow; 