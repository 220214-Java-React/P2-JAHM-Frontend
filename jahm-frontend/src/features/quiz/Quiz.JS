//import TimedQuiz from "./timed";
//import UntimedQuiz from "./untimed";
import { useState, useEffect } from "react";


function Quiz(props) {

  //let difficulty = props.difficulty;
  // Dropped time limit for debug purposes
  let totalQuizTime = 3;
  let scoreMultiplier = 1;
  let score = 10;

  const [timeRemaining, setTimeRemaining] = useState(totalQuizTime);
  const [correctGuess, setCorrectGuess] = useState(false);


  useEffect(() => {

    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1)
      }, 1000);
    } else {
      if (correctGuess !== true) {
        console.log("You lose!");
      }

      // TODO
      scoreCalculation();

      // Set gamePlaying to false (this will immediately send you back to the settings select screen according to current logic)
      //props.gamePlaying(false);
    }
  }, [timeRemaining])



  function selectAnswer(e) {
    console.log("You picked: " + e.target.innerHTML);
    if (props.correctPokemon.name == e.target.innerHTML) {
      console.log("Correct!");

      setCorrectGuess(true);
      scoreMultiplier = timeRemaining;
      setTimeRemaining(0);

      scoreCalculation();

      // Set gamePlaying to false (this will immediately send you back to the settings select screen according to current logic)
      //props.gamePlaying(false);
    } else {
      console.log("Incorrect!");
    }
  }

  /**
   * Do score math here
   */
  function scoreCalculation() {

    // Placeholder
    score = score * scoreMultiplier;

    console.log("Your score is: " + parseInt(score));

    if (props.currentUser != null) {
      sendScore(score);
    }
  }

  /**
   * Send score to DB
   */
  function sendScore(score) {
    console.log("This is where I'd send a bunch of cool score information.");
  }

  return (
    <div className="pokeQuiz">
      <h1>Who's that Pokemon?</h1>

      {props.quizType === "Timed" ? <p>{timeRemaining}</p> : <p hidden>No content</p>}

      <div className="choiceArea">
        <div id="pokemonChoice0" onClick={selectAnswer}>
          {props.pokemonChoice[0].name}
        </div>
        <div id="pokemonChoice1" onClick={selectAnswer}>
          {props.pokemonChoice[1].name}
        </div>
        <div id="pokemonChoice2" onClick={selectAnswer}>
          {props.pokemonChoice[2].name}
        </div>
        <div id="pokemonChoice3" onClick={selectAnswer}>
          {props.pokemonChoice[3].name}
        </div>
        <div id="pokemonChoice4" onClick={selectAnswer}>
          {props.pokemonChoice[4].name}
        </div>
      </div>

    </div>
  );

}

export default Quiz;