function UntimedQuiz ()
{
    let totalHints;
    let scoreMultiplier;

    function difficultySelected(event) {

       
      };

    return(
        <div className = "pokeQuiz">
          
            <h3>Select the difficulty of the quiz you would like to play!</h3>

        <div onChange={difficultySelected}>
        <input type="radio" value="Easy" name="quizType" /> Easy
        <input type="radio" value="Medium" name="quizType" /> Medium
        <input type="radio" value="Hard" name="quizType" /> Hard
      </div>

            
        </div>
    );
 
}