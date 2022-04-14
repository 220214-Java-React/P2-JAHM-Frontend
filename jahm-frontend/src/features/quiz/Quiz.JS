import TimedQuiz from "./timed";
import UntimedQuiz from "./untimed";
export default function Quiz(props) {
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

 

 

}