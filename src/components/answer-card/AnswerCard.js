import React from "react";

import './answer-card.css'
import CustomAudioPlayer from "../custom-audio-player/CustomAudioPlayer";

function AnswerCard({bird}) {
    return (
        <div className="card">
            <div className="card-body">
                {bird ?
                    <>
                        <div className="card-top">
                            <img className="answer-image" src={bird.image} alt="Bird"/>
                            <ul className="list-group list-group-flush answer-info">
                                <li className="list-group-item">
                                    <h5>{bird.name}</h5>
                                </li>
                                <li className="list-group-item">
                                    <span>{bird.species}</span>
                                </li>
                                <li className="list-group-item">
                                    <CustomAudioPlayer
                                        streamUrl={bird.audio}
                                    />
                                </li>
                            </ul>
                        </div>
                        <p className="card-text">{bird.description}</p>
                    </>
                    : <p className="card-text">Выберите ответ</p>}
            </div>
        </div>
    )
}

export default AnswerCard;