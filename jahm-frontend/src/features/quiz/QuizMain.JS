function Quiz ()
{
    function quizTypeSelected(event) {

        if (event.target.value == "untimed"){ <Navigate to = "/untimed" />}
        else {<Navigate to = "/timed" />}
       
      };

    return(
        <div className = "pokeQuiz">
            <h2>Welcome to the Pokemon Quiz</h2>
            <br/>
            <h3>Select the type of quiz you would like to play!</h3>

        <div onChange={quizTypeSelected}>
        <input type="radio" value="Untimed" name="quizType" /> Untimed
        <input type="radio" value="Timed" name="quizType" /> Timed
      </div>

            
        </div>
    );
 
}