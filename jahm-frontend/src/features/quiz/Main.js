import React from "react";
import Quiz from "./Quiz.JS";
import Settings from "./Settings";

function Main() {

    const [qType, setType] = useState("");
    const [qDiff, setDiff] = useState("");
    let selected = false;

    function changeDifficulty(e) { setDiff(e); }

    function changeType(e) { setType(e); }

    return <>
        <h1> Main here</h1>
        {selected ? <Quiz/> : <Settings difficulty={changeDifficulty} type={changeType} /> }


        </>;

}

        export default Main;