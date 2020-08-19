import React, {useCallback, useEffect, useState} from 'react';
import Header from "./components/header/Header";
import QuestionBlock from "./components/question-block/QuestionBlock";
import OptionsBlock from "./components/options-block/OptionsBlock";
import AnswerCard from "./components/answer-card/AnswerCard";
import birdsData from "./data/birds";
import FinishCard from "./components/finish-card/FinishCard";
import {checkIsCorrect} from "./utils";

function App() {
    const defaultTopics = [
        {
            header: 'Разминка',
            isActive: true
        },
        {
            header: 'Воробьиные',
            isActive: false
        },
        {
            header: 'Лесные птицы',
            isActive: false
        },
        {
            header: 'Певчие птицы',
            isActive: false
        },
        {
            header: 'Хищные птицы',
            isActive: false
        },
        {
            header: 'Морские птицы',
            isActive: false
        }
    ];

    const [currentBird, setCurrentBird] = useState(null)
    const [topics, setTopics] = useState(defaultTopics)
    const [question, setQuestion] = useState(null)
    const [page, setPage] = useState(0)
    const [options, setOptions] = useState(birdsData[0])
    const [isCorrect, setCorrect] = useState(false)
    const [score, setScore] = useState(0)
    const [attempts, setAttempts] = useState(0)
    const [isFinish, setFinish] = useState(false)
    const [isComplete, setComplete] = useState(false)

    const nextTopic = useCallback(() => {
        if (isComplete) {
            const nextPage = page + 1;
            if (nextPage <= birdsData.length - 1) {
                setPage(nextPage)
                setOptions(birdsData[nextPage])

                const newTopics = topics.concat();
                const idx = newTopics.findIndex(topic => topic.isActive);
                newTopics[idx].isActive = false;
                newTopics[idx + 1].isActive = true;
                setTopics(newTopics);
                setComplete(false);
            } else {
                setFinish(true)
            }
        }
    }, [page, topics, isComplete])

    const reset = useCallback(() => {
        setCurrentBird(null);
        setTopics(defaultTopics);
        setPage(0);
        setOptions(birdsData[0]);
        setScore(0);
        setFinish(false);
        setComplete(false);
    }, [defaultTopics])

    useEffect(() => {
        const index = Math.floor(Math.random() * options.length);
        console.log(options[index])
        setQuestion(options[index])
        setCurrentBird(null)
    }, [options])

    useEffect(() => {
        if (!isComplete) {
            const correct = checkIsCorrect(question, currentBird);
            setCorrect(correct)
            if (correct) {
                setComplete(true);
            }
        }
    }, [question, currentBird])

    useEffect(() => {
        if (isComplete) {
            const bonus = 6 - attempts >= 0 ? 6 - attempts : 0;
            setScore(prev => prev + bonus);
        }
    }, [isComplete])

    useEffect(() => {
        if (currentBird === null) {
            setAttempts(0);
        } else {
            setAttempts(prev => prev + 1);
        }
    }, [currentBird])

    return (
        <div className="container">
            <Header
                score={score}
                topics={topics}
            />
            {isFinish ? <FinishCard score={score} reset={reset}/>
                : <>
                    <QuestionBlock
                        question={question}
                        isCorrect={isCorrect}
                    />
                    <div className="row">
                        <div className="col-sm-6">
                            <OptionsBlock
                                data={options}
                                setBird={setCurrentBird}
                                question={question}
                            />
                        </div>
                        <div className="col-sm-6">
                            <AnswerCard bird={currentBird}/>
                        </div>
                    </div>
                    <button
                        className={`btn btn-next btn-block ${isCorrect ? '' : 'disabled'}`}
                        onClick={nextTopic}
                    >Next
                    </button>
                </>
            }
        </div>
    );
}

export default App;
