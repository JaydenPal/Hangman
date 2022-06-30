import './hangman.css';
function Hangman(props){
let head = <br></br>;
let torsoAndArms = <br></br>;
let legs = <br></br>;
const returnHangmanImage = (head, torsoAndArms, legs) => {  //create textbased image for hangman with dynamic parts 
    return (
<div className='grid'>
   <p className="topOfHangman">______________</p>
   <p className="topOfHangman">______________</p>
   <p>|</p>
   <p className='rightSide'>|</p>
   <p>|</p>
   <p className='rightSide'>| </p>
   <p>|</p>
   <p className='rightSide'>|</p>
   <p>|</p>
   {head}
   <p>|</p>
   {torsoAndArms}
   <p>|</p>
   {legs}
   <p>|</p>
   <br></br>
   <p>|</p>
   <br></br>
   <p>|</p>
   <br></br>
   <p>|</p>
   <br></br>
   <p>|</p>
   <br></br>
   <p className="bottomOfHangman">=============</p>
   <p className="bottomOfHangman">=============</p>
</div>
    );
   }
   let hangmanImage;
    switch(props.numberOfIncorrect){
        //display certain parts of hangman depending on number of incorrect guesses
        case 0: 
            hangmanImage = returnHangmanImage(head, torsoAndArms, legs);
            return hangmanImage;
        case 1:
            head = <p id='head' className='rightSide'>O</p>
            hangmanImage = returnHangmanImage(head, torsoAndArms, legs);
            return hangmanImage;
        case 2:
            head = <p id='head' className='rightSide'>O</p>
            torsoAndArms = <p id='torsoAndArms' className='rightSide'>|<em id="periodToHide">.</em></p>
            hangmanImage = returnHangmanImage(head, torsoAndArms, legs);
            return hangmanImage;
        case 3:
            head = <p id='head' className='rightSide'>O</p>
            torsoAndArms = <p id='torsoAndArms' className='rightSide'>|\</p>
            hangmanImage = returnHangmanImage(head, torsoAndArms, legs);
            return hangmanImage;
        case 4:
            head = <p id='head' className='rightSide'>O</p>
            torsoAndArms = <p id='torsoAndArms' className='rightSide'>/|\</p>
            hangmanImage = returnHangmanImage(head, torsoAndArms, legs);
            return hangmanImage;
        case 5:
            head = <p id='head' className='rightSide'>O</p>
            torsoAndArms = <p id='torsoAndArms' className='rightSide'>/|\</p>
            legs = <p id='legs' className='rightSide'>\</p>;
            hangmanImage = returnHangmanImage(head, torsoAndArms, legs);
            return hangmanImage;
        case 6:
            head = <p id='head' className='rightSide'>O</p>
            torsoAndArms = <p id='torsoAndArms' className='rightSide'>/|\</p>
            legs = <p id='legs' className='rightSide'>/ \</p>;
            hangmanImage = returnHangmanImage(head, torsoAndArms, legs);
            return hangmanImage;

    }
}

export default Hangman;