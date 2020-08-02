import React from "react";

import './answer-card.css'

function AnswerCard() {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-top">
                    <img className="answer-image" src="https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg" alt="Bird"/>
                    <ul className="list-group list-group-flush answer-info">
                        <li className="list-group-item">
                            <h5>Ворон</h5>
                        </li>
                        <li className="list-group-item">
                            <span>Corvus corax</span>
                        </li>
                    </ul>
                </div>
                <p className="card-text">Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев –
                    до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда
                    черные вороны улетят от Тауэра, монархия рухнет.</p>
            </div>
        </div>
    )
}

export default AnswerCard;