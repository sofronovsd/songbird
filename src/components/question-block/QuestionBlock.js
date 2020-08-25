import React from "react";

import './question-block.css'
import CustomAudioPlayer from "../custom-audio-player/CustomAudioPlayer";

function QuestionBlock({question, isCorrect}) {
    return (
        <div className="jumbotron question-container">
            <img className="question-image" src={isCorrect ? question.image : `./assets/blank.jpg`} alt="Bird"/>
            <div className="question-info">
                <h5>{isCorrect ? question.name : `******`}</h5>
                <div className="question-info__sound">
                    {question && <CustomAudioPlayer
                        streamUrl={question.audio}
                        isCorrect={isCorrect}
                    />}
                </div>
            </div>
        </div>
    )
}

export default QuestionBlock;