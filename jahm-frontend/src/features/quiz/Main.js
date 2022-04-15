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

    function populatePokemonChoice(props) {
        console.log("Main added " + props.name + " to the list of Pokemon choices.");
        setPokemonChoice(pokemonChoice => [...pokemonChoice, props]);
    }

    function changeGameState(newState) {
        setGamePlaying(newState);
    }

    useEffect(() => {
        if (pokemonChoice.length > 4) {
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

        { gamePlaying === false ? <Settings difficulty={changeDifficulty} type={changeType} /> : null }
        { qDiff !== "" && qType !== "" && gamePlaying !== true ?  <PlayButton populatePokemonChoice={populatePokemonChoice} currentNumPokemon={pokemonChoice}/> : null }
        { gamePlaying === true ?

            <Quiz quizType={qType} 
            quizDifficulty={qDiff} 
            typeSet={setType} 
            diffSet={setDiff} 
            user={currentUser} 
            pokemonChoice={pokemonChoice} 
            correctPokemon={correctPokemon}
            /> : null }

    </>;

}

export default Main;