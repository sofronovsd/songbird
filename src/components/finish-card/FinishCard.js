import React from 'react';

import './finish-card.css';

function FinishCard({score, reset}) {
    return (
        <div className="jumbotron">
            <h2 className="text-center">Поздравляем!</h2>
            <p className="text-center">Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
            {score === 30 ?
                <>
                    <h3 className="text-center">Вы заслужили звание почётного орнитолога</h3>
                    <div className="finish-image__container">
                        <img className="finish-image" src="./assets/final_image.jpg" alt="Bird"/>
                    </div>
                </>
                : null
            }
            <hr className="my-4"/>
            <button className="btn btn-next btn-block btn-lg" onClick={reset}>
                Попробовать ещё раз!
            </button>
        </div>
    )
}

export default FinishCard;