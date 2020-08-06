import React from 'react'
import { PlayButton, Timer, Progress } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

import './audio-player.css';

const CustomAudioPlayer = withCustomAudio(props => {
    return (
        <div className="audio-player">
            <PlayButton {...props}/>
            <div className="audio-player__info">
                <Timer {...props}/>
                <Progress {...props}/>
            </div>
        </div>
    )
})

export default CustomAudioPlayer;