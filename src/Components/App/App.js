import React from 'react';
import './App.css';
import {Guess} from '../Guess/Guess.js';
import Hangman from '../hangmanImage/Hangman.js';
import Rules from '../Rules/Rules';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { useEffect, useState } from 'react';

function App(){
  //keep track of the number of incorrect guesses and update image dpending on number of incorrect guesses
  const [numberOfIncorrect, setNumberOfIncorrect] = useState(0);
  useEffect(() => {
    if(numberOfIncorrect == 6){
      document.getElementById('losingMessage').style.display = 'block';
    }
  }, [numberOfIncorrect])
    return ( 
    <div className='App'>
      <header>
          <h1>Hangman</h1>
      </header>
      <Rules />
      <div className='mainContainer'> 
            {/* pass state and functions to components that need to aceess or alter it */}
            <Hangman numberOfIncorrect={numberOfIncorrect}/>
            <Guess numberOfIncorrect={numberOfIncorrect} setNumberOfIncorrect={setNumberOfIncorrect} />
      </div>
      <Projects className='side'/>
      <Contact className="footer" />
    </div>
    );
  }

export default App;



