import React from 'react'
import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';
import LikeIcon from '@material-ui/icons/Favorite';
import { CurrentTrackSection, EllipsisText } from './style'

class CurrentTrack extends React.Component {
    render() {
        const { currentTrack } = this.props

        return (
        <CurrentTrackSection>
            {currentTrack ?
            <React.Fragment>
                <div className="current-track-wrapper">
                    <div className="current-track-cover-art">
                        <div className="cover-art-wrapper" >
                            <img 
                                alt="album-cover" 
                                className="track-cover-art"  
                                src={currentTrack.track.album.images[2].url} 
                            />
                        </div>
                        <div className="ellipsis-text-wrapper">
                            <EllipsisText color="white">
                                <span>
                                    <a>
                                        {currentTrack.track.name}
                                    </a>
                                </span>
                            </EllipsisText>
                            <EllipsisText size={12}>
                                <span>
                                    <a>
                                        {currentTrack.track.artists.length > 1 ? 
                                        currentTrack.track.artists.map((artist, idx) => currentTrack.track.artists.length - 1 === idx ? (
                                            `${artist.name} `
                                        ) : `${artist.name}, `)
                                        :
                                        currentTrack.track.artists[0].name}
                                    </a>
                                </span>
                            </EllipsisText>
                        </div>
                    </div>
                </div>
                <div className="current-track-actions">
                    <div className="like-track-icon">
                        <span>
                            <LikeIcon style={{ width: '17px '}} />
                        </span>
                    </div>
                    <div className="screen-icon">
                        <span>
                            <PictureInPictureAltIcon style={{ width: '17px '}} />
                        </span>
                    </div>
                </div>
            </React.Fragment>
            : null}
        </CurrentTrackSection>)
    }
}

export default CurrentTrack