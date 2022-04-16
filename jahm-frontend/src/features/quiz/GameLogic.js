import PlayButton from "../PlayButton";
import { useState } from "react";

function Game(props){


    return <>

    <h1>Quiz Logic</h1>
    {(correctPKMN == "e") ? <PlayButton/> : <PlayQuiz/>}
    
    </>;

    function PlayQuiz(props){
        return <>
        <h1>QUIZ TIME</h1>
        </>


    }
}

export default Game;