import PlayButton from "../PlayButton";
import { useState } from "react";

function Game(props){

    const [correctPKMN, setcorrectPKMN] = useState("e");


 if(cPKMN !==""){console.log(cPKMN)}

console.log(correctPKMN);
    return <>

    <h1>Quiz Logic</h1>
    {(correctPKMN == "e") ? <PlayButton cPKMN = {rPKMN} /> : <PlayQuiz/>}
    
    </>;

    function PlayQuiz(props){
        return <>
        <h1>QUIZ TIME</h1>
        </>


    }
}

export default Game;