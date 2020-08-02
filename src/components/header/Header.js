import React from "react";
import TopPanel from "./TopPanel";
import TopicsBar from "./TopicsBar";

import './header.css'

function Header() {
    return (
        <div className="header">
            <TopPanel />
            <TopicsBar />
        </div>
    )
}

export default Header;