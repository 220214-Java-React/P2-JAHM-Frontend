import React, {useState} from 'react';

const GiveHint = props => {
    const hint = ["Weight", "Height"];

    function getHint() {
        if (props.hintNumber >= 0) {
            props.newHint(hint[props.hintNumber]);
        }
    }

    return (
        <div id="GiveHint">
            <button value="submit" onClick={getHint}>Give me a hint</button>
        </div>
    );
}

export default GiveHint;
