import React, { useEffect } from 'react';

const ShowHints = (props) => {

    return (
        <div className="hintArea" id={`HintNum${props.num}`}>
            <h2>Hint #{props.num + 1}</h2>
            <span>{props.hint}</span>
        </div>

    );
}

export default ShowHints;
