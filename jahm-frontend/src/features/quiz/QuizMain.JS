import TimedQuiz from "./timed";
import UntimedQuiz from "./untimed";
function Quiz() {
  const [qType, setType] = usestate("");
  const [qDiff, setDiff] = usestate("");



  if (qType == "") { return (selectType()) }
  else if (qDiff == "") { return (selectDifficulty) }
  else {
    if (qType == "Timed") { return (TimedQuiz()) }
    else { return (UntimedQuiz()) }
  }


  function quizTypeSelected(event) {

    setType(event.target.value)

  };


  function difficultySelected(event) {

    setDiff(event.target.value)

  };

  function selectType() {
    return (<div className="pokeQuiz">
      <h2>Welcome to the Pokemon Quiz</h2>
      <br />
      <h3>Select the type of quiz you would like to play!</h3>

      <div onChange={quizTypeSelected}>
        <input type="radio" value="Untimed" name="quizType" /> Untimed
        <input type="radio" value="Timed" name="quizType" /> Timed
      </div>


    </div>)
  }

  function selectDifficulty() {
    return (<div className="pokeQuiz">

      <h3>Select the difficulty of the quiz you would like to play!</h3>

      <div onChange={difficultySelected}>
        <input type="radio" value="Easy" name="quizDifficulty" /> Easy
        <input type="radio" value="Medium" name="quizDifficulty" /> Medium
        <input type="radio" value="Hard" name="quizDifficulty" /> Hard
      </div>


    </div>)
  }

}