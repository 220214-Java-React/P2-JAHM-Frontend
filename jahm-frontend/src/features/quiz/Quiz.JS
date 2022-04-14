import TimedQuiz from "./timed";
import UntimedQuiz from "./untimed";


function Quiz(props) {

  let type = props.quizType;
  let difficulty = props.difficulty;
  
return <>
    {(type == "Timed") ? <TimedQuiz />//quizType={qType} quizDifficulty={qDiff} typeSet={setType} diffSet={setDiff} user={props.User} />
      :
      <UntimedQuiz /> //</UntimedQuiz>quizType={qType} quizDifficulty={qDiff} typeSet={setType} diffSet={setDiff} user={props.User} />}
}

  </>;

}

export default Quiz;