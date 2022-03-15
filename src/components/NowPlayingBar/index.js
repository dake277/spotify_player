import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import CurrentTrack from './CurrentTrack'
import { fetchRecentlyPlayedSongs } from '../../actions/song'

import TrackPlayerSection from './TrackPlayerSection'
import ProgressBar from '../ProgressBar'

// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { NowPlayingWrapper } from './style'

import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import DevicesIcon from '@material-ui/icons/Devices';
import VolumeUpIcon from '@material-ui/icons/VolumeUp'


export const IconWrapper = styled.div` 
width: 32px; 
height: 30px;
display: flex;
justify-content: start;
align-items: center;
`


class NowPlayingBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeLeft: 30,
            duration: 0
        }
        this.timeout = null
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.token && !nextProps.recentlySongs.length) {
            this.props.fetchRecentlyPlayedSongs(nextProps.token)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.timeLeft <= 0 || prevState.duration >= 30) {
            window.clearInterval(this.timeout)
            this.timeout = null
            this.setState({
                timeLeft: 30,
                duration: 0
            })
        }
    }

    componentWillUnmount() {
        window.clearInterval(this.timeout)
    }

    onPlayerPlay = (currentTrack) => {
        if (this.state.timeLeft <= 30 && !this.timeout) {
        this.props.onPlay(currentTrack)

            this.timeout = window.setInterval(() => {
                this.setState(prevState => ({
                    timeLeft: prevState.timeLeft - 1,
                    duration: prevState.duration + 1
                }))
            }, 1000)
        }
    }

    onPlayerResume = () => {
        this.props.onResume()
        if (this.state.timeLeft <= 30 && !this.timeout) {
            this.timeout = window.setInterval(() => {
                this.setState(prevState => ({
                    timeLeft: prevState.timeLeft - 1,
                    duration: prevState.duration + 1
                }))
            }, 1000)
        }
    }

    onPlayerPause = () => {
        window.clearInterval(this.timeout)
        this.timeout = null
        this.props.onPause()
    }
    

    render() {
        const { currentlyPlaying,recentlySongs } = this.props
        const lastSongPlayed = recentlySongs.length ? recentlySongs[0] : null
        const currentTrack = currentlyPlaying ? currentlyPlaying : lastSongPlayed
        
        return (
            <NowPlayingWrapper>
                <div className="current-track-action-bar">
                    <CurrentTrack currentTrack={currentTrack} />
                    <TrackPlayerSection
                        duration={this.state.duration} 
                        timeLeft={this.state.timeLeft} 
                        trackDuration={currentTrack ? currentTrack.track.duration_ms : 0}
                        onPlay={() => this.onPlayerPlay(currentTrack)} 
                        onPause={this.onPlayerPause} 
                        onResume={this.onPlayerResume} 
                        // loading={this.props.}
                    />
                    <div className="volume-control-bar">
                        <div className="control-bar-container">
                            <IconWrapper>
                                <PlaylistPlayIcon />
                            </IconWrapper>
                            <IconWrapper>
                                <DevicesIcon className="icon"  style={{
                                    width: '18px',
                                    height: '18px'
                                }}/>
                            </IconWrapper>
                            <div className="volume-bar">
                                <IconWrapper>
                                    <VolumeUpIcon className="icon"  style={{
                                    width: '18px',
                                    height: '18px'
                                }} />
                                </IconWrapper>
                                <ProgressBar 
                                    // duration={this.state.duration} 
                                    // timeLeft={this.state.timeLeft} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </NowPlayingWrapper>
        )
    }
}

export default connect(state => ({
    token: state.tokenReducer.token,
    recentlySongs: (state.songReducer && state.songReducer.recentlySongs) || '',
    currentlyPlaying: (state.playerReducer && state.playerReducer.currentlyPlaying) || '',
}), dispatch => ({
    fetchRecentlyPlayedSongs: (accessToken) => dispatch(fetchRecentlyPlayedSongs(accessToken))
}))(NowPlayingBar)