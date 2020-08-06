import React from "react";

function OptionsBlock({data, setBird}) {
    return (
        <ul className="list-group">
            {
                data.map(bird =>
                    <li
                        key={bird.id}
                        className="list-group-item list-group-item-action"
                        onClick={() => setBird(bird)}
                    >{bird.name}</li>
                )
            }
        </ul>
    )
}

export default OptionsBlock;