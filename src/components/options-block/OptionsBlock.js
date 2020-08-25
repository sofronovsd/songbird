import React, {useCallback, useEffect, useState} from "react";
import {checkIsCorrect} from "../../utils";

import './options.css'

function OptionsBlock({data, setBird, question}) {

    const [options, setOptions] = useState(data);
    const [complete, setComplete] = useState(false);

    const handleClick = useCallback((bird) => {
        setBird(bird);
        const correct = checkIsCorrect(question, bird);
        let audio;
        if (correct) {
            setComplete(true)
            audio = new Audio('./assets/success.mp3');
        } else {
            audio = new Audio('./assets/failure.mp3');
        }
        if (!complete) {
            audio.play();
            setOptions(prevState => {
                const elemIdx = prevState.findIndex(el => el.id === bird.id);
                prevState[elemIdx] = {...prevState[elemIdx], isCorrect: correct};
                return prevState;
            })
        }
    }, [question, setBird, complete])

    useEffect(() => {
        const cloned = data.concat();
        setOptions(cloned)
        setComplete(false)
    }, [data])

    return (
        <ul className="list-group">
            {
                options.map(bird =>
                    <li
                        key={bird.id}
                        className="list-group-item list-group-item-action"
                        onClick={() => handleClick(bird)}
                    >
                        <span
                            className={`circle ${bird.isCorrect !== undefined ? bird.isCorrect ? 'circle_green' : 'circle_red' : ''}`}/>
                        <span>{bird.name}</span>
                    </li>
                )
            }
        </ul>
    )
}

export default OptionsBlock;
