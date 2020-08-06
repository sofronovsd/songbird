import React, {useCallback, useEffect, useState} from 'react';
import Header from "./components/header/Header";
import QuestionBlock from "./components/question-block/QuestionBlock";
import OptionsBlock from "./components/options-block/OptionsBlock";
import AnswerCard from "./components/answer-card/AnswerCard";
import birdsData from "./data/birds";

function App() {
    const [currentBird, setCurrentBird] = useState(null)
    const [question, setQuestion] = useState(null)
    const [page, setPage] = useState(0)
    const [options, setOptions] = useState(birdsData[0])
    const [isCorrect, setCorrect] = useState(false)
    const [score, setScore] = useState(0)

    const nextTopic = useCallback(() => {
        setScore(prev => prev + 5);
        const nextPage = page + 1;
        setPage(nextPage)
        setOptions(birdsData[nextPage])
    }, [page])

    useEffect(() => {
        const index = Math.floor(Math.random()*options.length);
        console.log(index)
        console.log(options[index])
        setQuestion(options[index])
        setCurrentBird(null)
    }, [options])

    useEffect(() => {
        setCorrect(question && currentBird && question.name === currentBird.name)
    }, [question, currentBird])

    return (
        <div className="container">
            <Header score={score}/>
            <QuestionBlock
                question={question}
                isCorrect={isCorrect}
            />
            <div className="row">
                <div className="col-sm-6">
                    <OptionsBlock
                        data={options}
                        setBird={setCurrentBird}
                    />
                </div>
                <div className="col-sm-6">
                    <AnswerCard bird={currentBird}/>
                </div>
            </div>
            <button
                className={`btn btn-next btn-block ${isCorrect ? '' : 'disabled'}`}
                onClick={nextTopic}
            >Next</button>
        </div>
    );
}

export default App;
