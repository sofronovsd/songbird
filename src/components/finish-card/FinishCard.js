import React from 'react';

function FinishCard({score, reset}) {
    return (
        <div className="jumbotron">
            <h2 className="text-center">Поздравляем!</h2>
            <p className="text-center">Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
            <hr className="my-4" />
            <button className="btn btn-next btn-block btn-lg" onClick={reset}>
                Попробовать ещё раз!
            </button>
        </div>
    )
}

export default FinishCard;