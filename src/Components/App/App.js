import React from 'react';
import './App.css';
import {Guess} from '../Guess/Guess.js';
import Hangman from '../hangmanImage/Hangman.js';
import { useEffect, useState } from 'react';

function App(){
  const [numberOfIncorrect, setNumberOfIncorrect] = useState(0);

    return ( 
    <div className='App'>
      <header>
        <h1>Hangman</h1>
      </header>
      <div className='rules'>
        <h2>Rules</h2>
           <ul>
            <li>To guess a letter, click on the keybaord or enter a letter and then select the guess button.</li>
            <li>To guess a word, enter the word and the select guess</li>
            <li>The game is over when you successfully guess the word, or when you run out of guesses</li>
            <li>Once the entire stick figure is drawn, you are out of guesses and have lost the game!</li>
           </ul>
      </div>
      <Hangman numberOfIncorrect={numberOfIncorrect}/>
      <Guess numberOfIncorrect={numberOfIncorrect} setNumberOfIncorrect={setNumberOfIncorrect} />
    </div>
    );
  }

export default App;