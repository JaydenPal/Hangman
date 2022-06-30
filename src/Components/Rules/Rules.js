import './Rules.css';
function Rules (){
    //functions for mobile users to toggle info in each section
    const handleClick = () => {
        document.getElementsByClassName("rulesList")[0].style.display == 'block' ? 
        document.getElementsByClassName("rulesList")[0].style.display = 'none': 
        document.getElementsByClassName("rulesList")[0].style.display = 'block'
    }
    const handleClick2 = () => {
        document.getElementsByClassName("about")[0].style.display == 'block' ? 
        document.getElementsByClassName("about")[0].style.display = 'none': 
        document.getElementsByClassName("about")[0].style.display = 'block'
    }
    //track width of of window and display rules or about depending on width
    window.addEventListener('resize', function(event){
        var newWidth = window.innerWidth;
        if(newWidth > 1060){
            document.getElementsByClassName("rulesList")[0].style.display = 'block';
            document.getElementsByClassName("about")[0].style.display = 'block';
        } else {
            document.getElementsByClassName("rulesList")[0].style.display = 'none';
            document.getElementsByClassName("about")[0].style.display = 'none';
        }
    });

    return (
        <div className='rules'>
            <div>
                <div className='howToPlay' >
                    <h2>How to play</h2>
                    <button id='ruleToggle' className='buttons' onClick={handleClick}><i className="arrow down"></i></button>
                </div>
                    <ul className="rulesList toDisplay">
                        <li>To guess a letter, click on the keybaord or enter a letter and then select the guess button.</li>
                        <li>To guess a word, enter the word and then select guess</li>
                        <li>The game is over when you successfully guess the word, or when you run out of guesses</li>
                        <li>Once the entire stick figure is drawn, you are out of guesses and have lost the game!</li>
                    </ul>
            </div>
            <div className="aboutHangman">
                <div className='howToPlay'>
                    <h2>About Hangman</h2>
                    <button className='buttons' onClick={handleClick2}><i className="arrow down"></i></button>
                </div>
                    <p className="about">Hangman is a game with morbid origins. Prisoners in england could demand "Rite of Words and Life" to avoid death. The game was hangman. If they succeeded in guessing the word, they were set free. However, if they failed, they themselevs would be hung. Imagine playing a game of hangman to save your life!</p>
            </div>
      </div>
    );
}

export default Rules;