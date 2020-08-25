import React from "react";

function TopPanel({score}) {
    return (
            <div className="top-panel">
                <img
                    className="logo"
                    src="./assets/songbird-logo.svg"
                    alt="SongBird logo"
                />
                <h5>Score: {score}</h5>
            </div>
    )
}

export default TopPanel;