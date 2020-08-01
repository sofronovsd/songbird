import React from "react";

function TopicsBar() {
    const topics = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']
    return (
        <div className="topics-container">
            {topics.map(topic => <div key={topic} className="topic-button">{topic}</div>)}
        </div>
    )
}

export default TopicsBar;