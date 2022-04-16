import React from "react";
import Quiz from "./Quiz.js";
import Settings from "./Settings";
import { useState, useEffect } from "react";
import PlayButton from "../PlayButton.js";

function Main(props) {

    const [qType, setType] = useState("");
    const [qDiff, setDiff] = useState("");
    const [gamePlaying, setGamePlaying] = useState(false);
    const [pokemonChoice, setPokemonChoice] = useState([]);
    const [correctPokemon, setCorrectPokemon] = useState([]);
    var currentUser = "Sonic";

    function changeDifficulty(e) { setDiff(e); }

    function changeType(e) { setType(e); }

    /**
     * Tell Main what Pokemon the Quiz can use
     * @param {*} props 
     */
    function populatePokemonChoice(props) {
        console.log("Main added " + props.name + " to the list of Pokemon choices.");
        setPokemonChoice(pokemonChoice => [...pokemonChoice, props]);
    }

    /**
     * Set whether the game is playing or not
     * @param {*} newState 
     */
    function changeGameState(newState) {
        console.log("Game state set to " + newState);
        setGamePlaying(newState);
    }

    /**
     * Start the game immediately after we have enough Pokemon. This avoids the "click twice to start" error.
     */
    useEffect(() => {
        if (pokemonChoice.length > 4) {
            // DEBUG: It's always the first Pokemon, but this can be changed back to random.
            setCorrectPokemon(pokemonChoice[0]);
            changeGameState(true);
        }

        console.log('PokemonChoice has changed', pokemonChoice);
    }, [pokemonChoice]);


    /**
     * If game is NOT playing, and if user has NOT selected qType and qDifficulty, display the PlayButton.
     * If user has clicked PlayButton, pokemonChoice and correctPokemon are not null.
     * Thus, display quiz.
     */
    return <>

        {gamePlaying === false ? <Settings difficulty={changeDifficulty} type={changeType} /> : null}
        {qDiff !== "" && qType !== "" && gamePlaying !== true ? <PlayButton populatePokemonChoice={populatePokemonChoice} currentNumPokemon={pokemonChoice} /> : null}
        {gamePlaying === true ?

            <Quiz quizType={qType}
                quizDifficulty={qDiff}
                typeSet={setType}
                diffSet={setDiff}
                currentUser={currentUser}
                pokemonChoice={pokemonChoice}
                correctPokemon={correctPokemon}
                gamePlaying={changeGameState}
            /> : null}

    </>;

}

export default Main;