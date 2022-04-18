import { useState, useEffect } from "react";
import GiveHint from "../components/GiveHint";
import ShowHints from "../components/ShowHints";

function Quiz(props) {

  let totalQuizTime = 10;
  let scoreMultiplier = 1;
  let score = 10;
  let hints = 0;


  const [timeRemaining, setTimeRemaining] = useState(totalQuizTime);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [hintList, setHintList] = useState([]);
  const [hintsRemaining, setHintsRemaining] = useState(2);


  useEffect(() => {

    // If there is time remaining and this is a timed quiz
    if (timeRemaining > 0 && props.quizType === "Timed") {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1)
      }, 1000);
    } else {
      // There is no time remaining and this is a timed quiz
      if (correctGuess !== true && props.quizType === "Timed") {
        console.log("You lose!");
        scoreCalculation();
      }

      // Set gamePlaying to false (this will immediately send you back to the settings select screen according to current logic)
      //props.gamePlaying(false);
    }
  }, [timeRemaining])

  /**
   * Tell Main the game is over
   */
  function quitQuiz() {
    props.gamePlaying(false);
  }

  /**
   * What to do after selecting an answer. If the user has already guessed correctly the buttons won't do anything.
   * @param {*} e 
   */
  function selectAnswer(e) {

    if (!correctGuess) {

      console.log("You picked: " + e.target.innerHTML);

      // CORRECT
      if (props.correctPokemon.name == e.target.innerHTML) {

        console.log("Correct!");

        setCorrectGuess(true);
        scoreMultiplier = timeRemaining;
        scoreCalculation();

      } else {
        console.log("Incorrect!");
      }

      // Disable the button
      e.target.disabled = true;
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

  function createNewHint(hintTemplate) {
    if (hintsRemaining >= 0 && timeRemaining > 0) {

      let hintProperty = "";

      switch (hintTemplate) {
        case "Weight":

          hintProperty = hintTemplate.concat(`: ${props.correctPokemon.weight}`);
          break;

        case "Height":
          hintProperty = hintTemplate.concat(`: ${props.correctPokemon.height}`);
          break;
      }

      let newHint = {
        "content": hintProperty
      }
      setHintList([...hintList, newHint]);
      setHintsRemaining(hintsRemaining - 1);
    } else {
      console.log("No hints remaining!");
      alert("No hints remaining!");
    }
  }

  /**
   * Send score to DB
   */
  async function sendScore(score) {
    let newScore = {
      "player": props.currentUser,
      "points": score,
      "quizMode": props.quizType,
      "quizDifficulty": props.quizDifficulty
    }

    console.log(newScore);

    // Send the score entry
    let data = await fetch(`http://localhost:8080/scores`,
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newScore)
      }).then(response => processResponse(response.json()));

    function processResponse(resp) {
      alert("Score submitted!");
      quitQuiz();
    }
  }

  return (
    <div className="pokeQuiz">
      <h1>Who's that Pokemon?</h1>

      {props.quizType === "Timed" && !correctGuess ? <p>{timeRemaining}</p> : <p hidden>No content</p>}

      <div className="choiceArea">
        <button id="pokemonChoice0" onClick={selectAnswer}>
          {props.pokemonChoice[0].name}
        </button>
        <button id="pokemonChoice1" onClick={selectAnswer}>
          {props.pokemonChoice[1].name}
        </button>
        <button id="pokemonChoice2" onClick={selectAnswer}>
          {props.pokemonChoice[2].name}
        </button>
        <button id="pokemonChoice3" onClick={selectAnswer}>
          {props.pokemonChoice[3].name}
        </button>
        <button id="pokemonChoice4" onClick={selectAnswer}>
          {props.pokemonChoice[4].name}
        </button>
      </div>

      <div>
        <button id="quitButton" onClick={quitQuiz}>Quit</button>
      </div>

      <GiveHint hintNumber={hintsRemaining} gamePlaying={timeRemaining} newHint={createNewHint} />

      {hintList ?
        <div className="all-hints">

          {hintList.map((hint) => (
            <ShowHints key={hints++} num={hints} hint={hint.content} />
          ))}
        </div>
        : null}

    </div>
  );

}

export default Quiz;