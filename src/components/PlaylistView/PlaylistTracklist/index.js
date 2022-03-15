import React from 'react'
import { DotIcon } from '../../shared'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { IconWrapper, PlaylistTrack, LinkedText, Outer } from './style'

const MusicalNoteIcon = require('../../../images/musical-note.svg')


const PlaylistTracklist = ({ songs, onPlay }) => {
    return <ol style={{ padding: 0, marginTop:'30px'  }}>{songs.map(song => (
        <PlaylistTrack key={song.track.id} onClick={() => onPlay(song)}>
            <div style={{ display: 'flex'}}>
                <div  className="track-item-play">
                   <IconWrapper>
                        <img
                        alt="musical"
                        className="musical-icon"
                        src={MusicalNoteIcon} />
                        <PlayArrowIcon className="play-icon" />
                   </IconWrapper>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '75%'}}>
                    <LinkedText> <h4 style={{ margin: '0 0 5px 0',color: 'white' }}> {song.track.name} </h4></LinkedText>
                        <div style={{ display: 'flex'}}>
                            <Outer style={{ marginRight:'5px' }}>
                            {song.track.artists.length > 1 ?
                                <LinkedText>
                                    <span>{song.track.artists.map((artist, idx) => song.track.artists.length - 1 === idx ? (
                                                    `${artist.name} `
                                                ) : `${artist.name}, `)}
                                    </span>
                                </LinkedText> : 
                            <LinkedText>
                                <span key={song.track.artists[0].id}>{song.track.artists[0].name}</span>
                            </LinkedText>}
                            </Outer>
                                <DotIcon />
                            <Outer>
                            <LinkedText>
                                <span>{song.track.album.name}</span>
                            </LinkedText>
                        </Outer>
                    </div>
                </div>
                <div className="track-item-options" ></div>
                <div className="track-item-duration">3.33</div>
            </div>
        </PlaylistTrack>
    ))}</ol>
}

export default PlaylistTracklist