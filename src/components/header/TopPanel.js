import React from "react";

function TopPanel() {
    return (
            <div className="top-panel">
                <img
                    className="logo"
                    src="./assets/songbird-logo.svg"
                    alt="SongBird logo"
                />
                <h5>Score: 0</h5>
            </div>
    )
}

export default TopPanel;