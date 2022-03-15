import React from 'react'
import { connect } from 'react-redux'
import ProgressBar from '../../ProgressBar'
import { TrackPlayerWrapper, CurrentTrackActions, IconWrapper } from './style'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

import { TRACK_STATE_PLAYING , TRACK_STATE_STOPPED , TRACK_STATE_PAUSED } from '../../../actionTypes'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const ShuffleIcon = require('../../../images/change.svg')
const RepeatIcon = require('../../../images/repeat.svg')
const PauseIcon = require('../../../images/pause.svg')



class TrackPlayerSection extends React.Component {

    renderPlayerButton = () => {
        const { currentTrackState, onPlay, onPause, onResume, loading } = this.props
        switch (currentTrackState) {
            case TRACK_STATE_PAUSED :
                return (<IconWrapper onClick={onResume}>
                    <CurrentTrackActions loading={0}>
                        <div/><div/><div/>
                        <PlayArrowIcon className="play-icon" />
                    </CurrentTrackActions>
                </IconWrapper>)
            case TRACK_STATE_PLAYING :
                return (<IconWrapper onClick={onPause}>
                    <CurrentTrackActions>
                        <img alt="pause" className="pause-icon" src={PauseIcon} style={{ width: '1em', }} />
                    </CurrentTrackActions>
                </IconWrapper>)
            case TRACK_STATE_STOPPED :
                return (<IconWrapper onClick={onPlay}>
                    <CurrentTrackActions loading={loading ? 1 : 0}>
                        <div/><div/><div/>
                        <PlayArrowIcon className="play-icon" />
                    </CurrentTrackActions>
                </IconWrapper>)
            default:
                return null
        }
    }


    render() {
        const { duration, timeLeft } = this.props

        return (
            <TrackPlayerWrapper>
                <div className="track-options">
                    <IconWrapper><span>
                        <img alt="shuffle" className="shuffle-icon" src={ShuffleIcon} style={{ width: '1em', }} />
                    </span></IconWrapper>
                    <IconWrapper>
                        <span><SkipPreviousIcon /></span>
                    </IconWrapper>
                    {this.renderPlayerButton()}
                    <IconWrapper>
                        <span><SkipNextIcon /></span>
                    </IconWrapper>
                    <IconWrapper><span>
                        <img alt="repeat" className="repeat-icon" src={RepeatIcon} style={{ width: '1em'}} /></span>
                    </IconWrapper>
                </div>

                <div className="track-progress-bar">
                    <div className="track-time-left">
                        00:{duration < 10 ? "0" + duration : duration}
                    </div>
                    <ProgressBar timeLeft={timeLeft}/>
                    <div className="track-progress-time">
                        00:{timeLeft < 10 ? "0" + timeLeft : timeLeft}
                    </div>
                </div>
            </TrackPlayerWrapper>
        )
    }
}

export default connect(state => ({
    currentTrackState: (state.playerReducer && state.playerReducer.currentTrackState) || '',
}))(TrackPlayerSection)

