import LetterKey from "../LetterKeys/LetterKey.js";
import React, { useEffect, useState } from 'react';
import './Keyboard.css';

function Keyboard(props){
    const handleClick = (e) => {
        props.setGuess(e.target.innerText);
        document.getElementById('guessInput').value = e.target.innerText;
    } 


    return(
    <div className="keyboard" >
        <div className="row" >
            <LetterKey letter="Q" onClick={handleClick} />
            <LetterKey letter="W" onClick={handleClick}/>
            <LetterKey letter="E" onClick={handleClick}/>
            <LetterKey letter="R" onClick={handleClick}/>
            <LetterKey letter="T" onClick={handleClick}/>
            <LetterKey letter="Y" onClick={handleClick}/>
            <LetterKey letter="U" onClick={handleClick}/>
            <LetterKey letter="I" onClick={handleClick}/>
            <LetterKey letter="O" onClick={handleClick}/>
            <LetterKey letter="P" onClick={handleClick}/>
        </div>
        <div className="row">
            <LetterKey letter="A" onClick={handleClick}/>
            <LetterKey letter="S" onClick={handleClick}/>
            <LetterKey letter="D" onClick={handleClick}/>
            <LetterKey letter="F" onClick={handleClick}/>
            <LetterKey letter="G" onClick={handleClick}/>
            <LetterKey letter="H" onClick={handleClick}/>
            <LetterKey letter="J" onClick={handleClick}/>
            <LetterKey letter="K" onClick={handleClick}/>
            <LetterKey letter="L" onClick={handleClick}/>
        </div>
        <div className="row" >
            <LetterKey letter="Z" onClick={handleClick}/>
            <LetterKey letter="X" onClick={handleClick}/>
            <LetterKey letter="X" onClick={handleClick}/>
            <LetterKey letter="C" onClick={handleClick}/>
            <LetterKey letter="V" onClick={handleClick}/>
            <LetterKey letter="B" onClick={handleClick}/>
            <LetterKey letter="N" onClick={handleClick}/>
            <LetterKey letter="M" onClick={handleClick}/>
        </div>
    </div>
    );
}

export default Keyboard;