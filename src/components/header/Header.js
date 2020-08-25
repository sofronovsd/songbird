import React from "react";
import TopPanel from "./TopPanel";
import TopicsBar from "./TopicsBar";

import './header.css'

function Header({score, topics}) {
    return (
        <div className="header">
            <TopPanel score={score}/>
            <TopicsBar topics={topics}/>
        </div>
    )
}

export default Header;