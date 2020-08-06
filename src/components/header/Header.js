import React from "react";
import TopPanel from "./TopPanel";
import TopicsBar from "./TopicsBar";

import './header.css'

function Header({score}) {
    return (
        <div className="header">
            <TopPanel score={score}/>
            <TopicsBar />
        </div>
    )
}

export default Header;