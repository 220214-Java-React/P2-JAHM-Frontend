import TimedQuiz from "./timed";
import UntimedQuiz from "./untimed";


function Quiz(props) {

  let type = props.quizType;
  let difficulty = props.difficulty;

  function selectAnswer(e) {
    console.log("You picked: " + e.target.innerHTML);
    if (props.correctPokemon.name == e.target.innerHTML) {
      console.log("Correct!");
    }
  }

  return (
    <div className="choiceArea">
      <h1>Who's that Pokemon? (Untimed)</h1>
      <div id="pokemonChoice0" onClick={selectAnswer}>
        {props.pokemonChoice[0].name}
      </div>
      <div id="pokemonChoice1">
        {props.pokemonChoice[1].name}
      </div>
      <div id="pokemonChoice2">
        {props.pokemonChoice[2].name}
      </div>
      <div id="pokemonChoice3">
        {props.pokemonChoice[3].name}
      </div>
      <div id="pokemonChoice4">
        {props.pokemonChoice[4].name}
      </div>
    </div>
    )

}

export default Quiz;