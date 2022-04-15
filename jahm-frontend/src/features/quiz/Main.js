import React from "react";
import Quiz from "./Quiz.js";
import Settings from "./Settings";
import { useState } from "react";
import PlayButton from "../PlayButton.js";

function Main(props) {

    const [qType, setType] = useState("");
    const [qDiff, setDiff] = useState("");
    const [gamePlaying, setGamePlaying] = useState(false);
    var result = "";
    let pokemonChoice = [];
    var correctPokemon;

    function changeDifficulty(e) { setDiff(e); }

    function changeType(e) { setType(e); }

    function populatePokemonChoice(props) {
        console.log("Main added " + props.name + " to the list of Pokemon choices.");
        pokemonChoice.push(props);

        // Randomly set the correct pokemon out of the 5 that have now been added.
        if (pokemonChoice.length > 4) {
            correctPokemon = pokemonChoice.at(Math.floor(Math.random() * (4 - 1 + 1) + 1));
            console.log("Main set the correct pokemon to: " + correctPokemon.name);
            // Game is now running
            changeGameState(true);
        }
    }

    function changeGameState(newState) {
        setGamePlaying(newState);
    }

    /**
     * If game is NOT playing, and if user has NOT selected qType and qDifficulty, display the PlayButton.
     * If user has clicked PlayButton, pokemonChoice and correctPokemon are not null.
     * Thus, display quiz.
     */
    return <>

        { gamePlaying == false ? <Settings difficulty={changeDifficulty} type={changeType} /> : null }
        { qDiff !== "" && qType !== "" && gamePlaying !== true ?  <PlayButton populatePokemonChoice={populatePokemonChoice} /> : null }
        { gamePlaying === true ?

            <Quiz quizType={qType} quizDifficulty={qDiff} typeSet={setType} diffSet={setDiff} user={props.User} /> : null }

    </>;

}

export default Main;