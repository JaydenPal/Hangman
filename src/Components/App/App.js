import React from 'react';
import './App.css';
import {Guess} from '../Guess/Guess.js';
import Hangman from '../hangmanImage/Hangman.js';
import Rules from '../Rules/Rules';
import Projects from '../Projects/Projects';
import { useEffect, useState } from 'react';

function App(){
  const [numberOfIncorrect, setNumberOfIncorrect] = useState(0);
  useEffect(() => {
    if(numberOfIncorrect == 6){
      document.getElementById('losingMessage').style.display = 'block';
    }
  }, [numberOfIncorrect])
    return ( 
    <div className='App'>
      <Rules />
      <header>
          <h1>Hangman</h1>
      </header>
      <div className='mainContainer'>
            <Hangman numberOfIncorrect={numberOfIncorrect}/>
            <Guess numberOfIncorrect={numberOfIncorrect} setNumberOfIncorrect={setNumberOfIncorrect} />
      </div>
      <Projects className='side'/>
      <footer>
          <p>Created by Jayden Palacios</p>
      </footer>
    </div>
    );
  }

export default App;



