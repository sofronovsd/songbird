import React from "react";

function TopicsBar({topics}) {
    return (
        <div className="topics-container">
            {
                topics.map(topic =>
                    <div
                        key={topic.header}
                        className={`topic-button ${topic.isActive ? 'topic-button_active' : ''}`}
                    >
                        {topic.header}
                    </div>)
            }
        </div>
    )
}

export default TopicsBar;