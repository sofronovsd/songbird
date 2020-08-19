import React, {useCallback, useEffect, useState} from "react";
import {isCorrect} from "../../utils";

import './options.css'

function OptionsBlock({data, setBird, question}) {

    const [options, setOptions] = useState(data);

    const handleClick = useCallback((bird) => {
        setBird(bird);
        const correct = isCorrect(question, bird);
        setOptions(prevState => {
            const elemIdx = prevState.findIndex(el => el.id === bird.id);
            prevState[elemIdx].isCorrect = correct;
            return prevState;
        })
    }, [question, setBird])

    useEffect(() => {
        setOptions(data)
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