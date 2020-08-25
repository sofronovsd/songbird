import React, {useEffect} from 'react'
import {PlayButton, Progress, Timer, VolumeControl} from 'react-soundplayer/components';
import {withCustomAudio} from 'react-soundplayer/addons';

import './audio-player.css';

const CustomAudioPlayer = withCustomAudio(props => {
    const {isCorrect} = props;

    useEffect(() => {
        if (isCorrect) {
            props.soundCloudAudio.pause()
        }
    }, [isCorrect])
    return (
        <div className="audio-player">
            <div className="audio-player__top">
                <PlayButton
                    className=""
                    {...props}
                />
                <div className="audio-player__info">
                    <Timer {...props}/>
                    <Progress {...props}/>
                </div>
            </div>
                <div className="audio-player__bottom">

                    <VolumeControl
                        className="volume-btn"
                        buttonClassName=""
                        {...props}
                    />
                </div>
        </div>
    )
})

export default CustomAudioPlayer;