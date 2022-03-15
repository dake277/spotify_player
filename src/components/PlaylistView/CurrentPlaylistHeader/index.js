import React from 'react'
import LikeIcon from '@material-ui/icons/Favorite';
import { LikedSongsCoverArt, CurrentPlaylistHeaderWrapper } from './style'

const MusicNoteIcon = require('../../../images/note.svg')

const CurrentPlaylistHeader = ({ 
    isUserLikedSongs, 
    currentPlaylist, 
    headerTitle, 
    user
}) => {

    return (
            <CurrentPlaylistHeaderWrapper>
                <div className="current-playlist">
                    <div className="playlist-cover-art">
                            <div className="cover-image-wrapper">
                            {isUserLikedSongs ? 
                            <LikedSongsCoverArt >
                                <LikeIcon style={{ minWidth: '70px', maxWidth: '80px', filter:'brightness(2)', width: '7vw', height: 'auto'}}/>
                            </LikedSongsCoverArt> :  currentPlaylist.images.length ?
                            <img alt="playlist-cover" className="playlist-cover-image"
                            src={currentPlaylist.images[0].url}/> :
                            <div className="empty-playlist">
                                <img className="note-icon" alt="music-note-icon" src={MusicNoteIcon} />
                            </div>}
                        </div>
                    </div>
                    <div className="playlist-body">
                        <div className="playlist-entity">
                            <div className="playlist-type">{(currentPlaylist && currentPlaylist.type) || '歌单'}</div>
                            <div className="playlist-title"><h2>{headerTitle}</h2></div>
                            <div><span className="playlist-owner">{isUserLikedSongs ? user : currentPlaylist.owner.display_name}</span></div>
                        </div>
                    </div>
                </div>
               
            </CurrentPlaylistHeaderWrapper>
    )
}

export default CurrentPlaylistHeader