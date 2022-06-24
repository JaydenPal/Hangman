import React, { useEffect, useState } from 'react';
import Keyboard from '../Keybaord';
import ReactDOM from 'react-dom/client';
import './Guess.css';

export function Guess(props){
    
    const [word, setWord] = useState('random');
    const [wordlen, setWordlen] = useState(word.length);
    const [guess, setGuess] = useState('');
    const [wordAsArr, setWordAsArr] = useState(word.split(''));
    const [toGuessArr, setToGuessArr] = useState([...wordAsArr].fill('_'));
    
    useEffect(() => {
        getRandomWord();
    }, [])

    useEffect(() => {
        setWordlen(word.length);
        setWordAsArr(word.split(''))
        document.getElementById('winningMessage').style.display = 'none';
    }, [word])

    useEffect(() => {
        setToGuessArr([...wordAsArr].fill('_'));
    }, [wordAsArr])

    useEffect(() => {
        if(areArraysEqual(wordAsArr, toGuessArr) == true){
            document.getElementById('winningMessage').style.display = 'block';
        }
    }, [toGuessArr])

      const areArraysEqual = (a, b) => {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
      
        for (var i = 0; i < a.length; ++i) {
          if (a[i].toLowerCase() !== b[i].toLowerCase()) return false;
        }
        return true;
      }

    const getRandomWord = () => {
        fetch(`https://random-words-api.vercel.app/word`).then(response =>
        response.json()).then(jsonResp => {
        setWord(jsonResp[0].word);
    }).then(() => {
        setWordAsArr(word.split(''));
    })
    rerenderKeybaord();
    props.setNumberOfIncorrect(0);

        // let words = ["word", "dictionary", "yellow", "diamond", "rainbow", "depression"]
        // let newWord = words[Math.floor(Math.random() * 6)]
        // setWord(newWord);
    }

    const handleTermChange = (e) => {
        setGuess(e.target.value)
    }


    const handleGuess = () => {
        if(!guess){
            return null;
        }
        if(guess.length > 1){
            guessWord();
        } else {
            guessLetter();
        }
        document.getElementById('guessInput').value = '';
    }

   const guessWord = () => {
    if(guess.toLowerCase() == word.toLowerCase()){
        setToGuessArr(guess.toLowerCase().split(''));
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
    wordAsArr.forEach((letter) => {
        if(letter.toLowerCase() == guess.toLowerCase()){
            arr[index] = letter;
            console.log("hello");
            isCorrect = true;
        }
        index++;
    })
    if(isCorrect == false){
        handleNumOfIncorrect();
    }
    let letterID = "letter_" + guess.toUpperCase();
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
                    <p id='guessArray' style={{letterSpacing:'10px'}}>{toGuessArr} | {wordlen}</p>
                    <p id='winningMessage' style={{display: 'none'}}>You Win!!!</p>
                </div>
                <div style={{width: '60%', display:'flex', flexDirection:'column', alignSelf:'center'}}>
                    <input id='guessInput' onChange={handleTermChange} placeholder="Enter your guess.." />
                    <button className='guessButtons' onClick={handleGuess}>Guess</button>
                    <button className='guessButtons' onClick={getRandomWord}>Get New Word</button>
                </div>
            </div>
        </div>
        );
    
}