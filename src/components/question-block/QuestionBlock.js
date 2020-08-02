import React from "react";

import './question-block.css'

function QuestionBlock() {
    return (
        <div className="jumbotron question-container">
            <img className="question-image" src="https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg" alt="Bird"/>
            <div className="question-info">
                <h5>Ворон</h5>
                <div className="question-info__sound">
                    <h5>Bird sound</h5>
                </div>
            </div>
        </div>
    )
}

export default QuestionBlock;