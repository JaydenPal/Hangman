import './LetterKey.css';
function LetterKey (props){
    let letterId = "letter_" + props.letter;
    return(
        <div>
            <button className='letterButton' onClick={props.onClick} id={letterId}>{props.letter}</button>
        </div> 
    );
}
export default LetterKey;