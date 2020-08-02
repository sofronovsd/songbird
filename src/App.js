import React from 'react';
import Header from "./components/header/Header";
import QuestionBlock from "./components/question-block/QuestionBlock";
import OptionsBlock from "./components/options-block/OptionsBlock";
import AnswerCard from "./components/answer-card/AnswerCard";

function App() {
    return (
        <div className="container">
            <Header/>
            <QuestionBlock/>
            <div className="row">
                <div className="col-6">
                    <OptionsBlock/>
                </div>
                <div className="col-6">
                    <AnswerCard/>
                </div>
            </div>
            <button className="btn btn-next btn-block disabled">Next</button>
        </div>
    );
}

export default App;
