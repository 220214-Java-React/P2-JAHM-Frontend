import { useState, useEffect } from "react";
export default function TimedQuiz(props) {
    let totalQuizTime = 10;
    let timeBetweenHints;
    let scoreMultiplier;

    const [timeRemaining, setTimeRemaining] = useState(totalQuizTime)


    useEffect(() => {

        if (timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(timeRemaining - 1)
            }, 1000);
        }
    }, [timeRemaining])



    return (
        <div className="pokeQuiz">
            <h1>Who's that Pokemon? (Timed)</h1>

            <p>{timeRemaining}</p>

        </div>
    );

}