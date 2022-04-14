import React from "react";
import { useState } from "react";
const Settings = props => {

    return (
        <>
            <div className="pokeQuiz">
                <h2>Welcome to the Pokemon Quiz</h2>
                <h3>Select the type of quiz you would like to play!</h3>

                <div onChange={quizTypeSelected}>
                    <input type="radio" value="Untimed" name="quizType" /> Untimed
                    <input type="radio" value="Timed" name="quizType" /> Timed
                </div>


                <h3>Select the difficulty of the quiz you would like to play!</h3>

                <div onChange={difficultySelected}>
                    <input type="radio" value="Easy" name="quizDifficulty" /> Easy
                    <input type="radio" value="Medium" name="quizDifficulty" /> Medium
                    <input type="radio" value="Hard" name="quizDifficulty" /> Hard
                </div>


            </div>
        </>
    )

    function quizTypeSelected(event) {

        props.type(event.target.value);

    };


    function difficultySelected(event) {

        props.difficulty(event.target.value);

    };


}

export default Settings;