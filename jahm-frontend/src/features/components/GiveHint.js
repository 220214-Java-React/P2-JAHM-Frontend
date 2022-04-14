import React, {useState} from 'react';

const GiveHint = props => {

    function getHint() {
        if (props.gamePlaying && props.hintsRemaining > 0) {

            // <Game/> Should contain:
            // playerHints[]: a list of possible hints
            // newHint(): a function that chooses a new hint, appends it to playerHints[], and subtracts from the score
            // numberOfHints int: number of hints received thus far
            props.newHint();
        }
    }

    return (
        <div id="GiveHint">
            <button value="submit" onClick={getHint}>Give me a hint</button>
        </div>
    );
}

export default GiveHint;
