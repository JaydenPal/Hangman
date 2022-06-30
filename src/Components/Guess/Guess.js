import React, { useEffect, useState } from 'react';
import Keyboard from '../Keyboard/Keyboard.js';
import ReactDOM from 'react-dom/client';
import './Guess.css';

export function Guess(props){
    // declare states and useEffect hooks to update app as states change
    const [word, setWord] = useState('random');
    const [wordlen, setWordlen] = useState(word.length);
    const [guess, setGuess] = useState('');
    const [wordAsArr, setWordAsArr] = useState(word.split(''));
    const [toGuessArr, setToGuessArr] = useState([...wordAsArr].fill('_'));
    
    useEffect(() => {
        getRandomWord(); 
    }, []) //gets random word on page load

    useEffect(() => {
        setWordlen(word.length);
        setWordAsArr(word.split(''))
        document.getElementById('winningMessage').style.display = 'none';
        document.getElementById('losingMessage').style.display = 'none';
    }, [word]) //cleans up winning/losing messages and reassigns word array to new word. This will happen every getRandomWord() call

    useEffect(() => {
        setToGuessArr([...wordAsArr].fill('_'));
    }, [wordAsArr]) //reassigns toGuessArr to wordAsArr when word is changed. Seprate from above hook bc wordAsArr needs to update first

    useEffect(() => {
        if(areArraysEqual(wordAsArr, toGuessArr) == true){
            document.getElementById('winningMessage').style.display = 'block';
        }
    }, [toGuessArr]) //if a guess results in the full word being guessed, display winning message

      const areArraysEqual = (a, b) => {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
      
        for (var i = 0; i < a.length; ++i) {
          if (a[i].toLowerCase() !== b[i].toLowerCase()) return false;
        }
        return true;
      } //returns boolean (are arrays equal or not)

    const getRandomWord = () => {
        try{fetch(`https://random-words-api.vercel.app/word`).then(response => //fetch random word from API
        response.json()).then(jsonResp => {
        setWord(jsonResp[0].word);
    }).then(() => {
        setWordAsArr(word.split(''));
    })} catch(error){
        console.log(error);
        let words = ["word", "dictionary", "yellow", "diamond", "rainbow", "depression"] //list of words to use if fetch fails
        let newWord = words[Math.floor(Math.random() * 6)]
        setWord(newWord);
    }
    rerenderKeybaord(); //rerender keyboard after new word is chosen
    props.setNumberOfIncorrect(0);
    document.getElementById('guessInput').value = '';
    }

    const handleTermChange = (e) => {
        setGuess(e.target.value)
    }

    const handleGuess = () => {
        if(props.numberOfIncorrect == 6){ //if all guesses are used guess button does nothing
            return null;
        }
        if(guess == ''){
            return null; //if no guess is made, do nothing
        }
        if(guess.length > 1){
            guessWord();
        } else {
            guessLetter();
        }
        document.getElementById('guessInput').value = ''; //clear guess input
    }

   const guessWord = () => {
    if(guess.toLowerCase() == word.toLowerCase()){
        setToGuessArr(guess.toLowerCase().split(''));
    } else {
        props.setNumberOfIncorrect(props.numberOfIncorrect + 1);
    }
    } 
    const handleNumOfIncorrect = () => {
        let temp = props.numberOfIncorrect;
        props.setNumberOfIncorrect(temp + 1);
    }

   const guessLetter = () => {
    let index = 0;
    let arr = [...toGuessArr];
    let isCorrect;
    isCorrect = false;
    wordAsArr.forEach((letter) => { //checks each letter against guess
        if(letter.toLowerCase() == guess.toLowerCase()){
            arr[index] = letter;
            isCorrect = true;
        }
        index++;
    })
    if(isCorrect == false){
        handleNumOfIncorrect();
    }
    let letterID = "letter_" + guess.toUpperCase();  //get id of letter guessed and remove it from the keyboard but doesnt stop user from manually entering it
    document.getElementById(letterID).style.display = 'none'
    setToGuessArr(arr);
   } 

   const rerenderKeybaord = () => {
    const letters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l' ,'z' ,'x' ,'c' ,'v' ,'b' ,'n' ,'m' ]

    for(let i = 0; i < letters.length; i++){
        let letterID = "letter_" + letters[i].toUpperCase();
        document.getElementById(letterID).style.display = "inline";
    }
   }
        return(
        <div>
            <Keyboard setGuess={setGuess} guess={guess}/>
            <div className="Guess" style={{display: 'flex', flexDirection:'column' }}>
                <div style={{alignSelf: 'center'}}>
                    <p id='guessArray' style={{letterSpacing:'5px'}}>{toGuessArr} | {wordlen}</p>
                    <p id='winningMessage' style={{display: 'none'}}>You won!</p>
                    <p id='losingMessage' style={{display: 'none'}}>You lost :( The word was {word}!</p>
                </div>
                <div style={{width: '60%', display:'flex', flexDirection:'column', alignSelf:'center', alignContent:'center', justifyContent:'center'}}>
                    <input className='guessButtons' id='guessInput' onChange={handleTermChange} placeholder="Click here to enter a guess..." />
                    <button className='guessButtons' onClick={handleGuess}>Guess</button>
                    <button className='guessButtons' onClick={getRandomWord}>Get New Word</button>
                </div>
            </div>
        </div>
        );
    
}