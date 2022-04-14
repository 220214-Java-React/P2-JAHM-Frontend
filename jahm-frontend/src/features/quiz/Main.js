import React from "react";
import Quiz from "./Quiz.js";
import Settings from "./Settings";
import { useState } from "react";

function Main(props) {

    const [qType, setType] = useState("");
    const [qDiff, setDiff] = useState("");
    let selected = false;

    function changeDifficulty(e) { setDiff(e); }

    function changeType(e) { setType(e); }

    return <>
        {(qType !== "" && qDiff !== "") ? <Quiz quizType={qType} quizDifficulty={qDiff} typeSet = {setType} diffSet = {setDiff} user = {props.User}/>
            :
            <Settings difficulty={changeDifficulty} type={changeType} />}


    </>;

}

export default Main;