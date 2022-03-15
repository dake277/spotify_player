import React from 'react'
import styled from 'styled-components'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import  {DotIcon } from '../../shared'


export const LikedTrackPlaylist = styled.li`
    position:relative;
    padding: 20px;
    grid-column:1/3;
    height:auto;
    background: linear-gradient(158deg, rgba(70,12,245,1) 0%, rgba(142,141,230,1) 100%);
    border-radius: 8px;
    cursor:pointer;

    .play-btn {
            right:30px;
            bottom:45px;
            opacity:0;
            display:flex;
            position:absolute;
            justify-content:center;
            align-items:center;
            width: 50px;
            height: 50px;
            background:#1db954;
            border-radius:50%;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);

            > svg {
                filter: brightness(1.5);
                width: 1.5em;
                height: 1.5em;
            }
        }
        &:hover {
            .play-btn {
                opacity:1;
            }
        }

        .liked-track-wrapper {  
            flex-direction:column; 
            display: flex;
            height: 100%; 
            justify-content:space-between;

            .liked-track-text-list {
                margin-bottom:12px;

                .sample-liked-songs {
                    margin: 50px 0;
                    width:100%;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    font-size:16.5px;
                    line-height: 23px;
                }

                @media only screen and (max-width: 830px) {
                    .sample-liked-songs {
                        margin: 0;
                    }
                }
            }
        }
`



class UserLikedSongs extends React.Component {
    render() {
        const { songs, gotoLikedTrackPlaylist } = this.props
        return (
            <LikedTrackPlaylist onClick={gotoLikedTrackPlaylist}>
                <div className="liked-track-wrapper">
                    <div className="liked-track-text-list">
                        <p className="sample-liked-songs">
                        {songs && songs.map(song => (
                                <React.Fragment key={song.track.id}>
                                    <span style={{ color: 'white', marginRight: '5px'}}>{song.track.artists[0].name}</span>
                                    <span>{song.track.name}</span>
                                    <DotIcon />
                                </React.Fragment>
                        ))}
                        </p>
                    </div>
                    <div className="featured-playlist">
                        <h1>已点赞的歌曲</h1>
                        <h3>{songs && songs.length} 已点赞的歌曲</h3>
                    </div>
                </div>
                <div className="play-btn"><PlayArrowIcon /></div>
            </LikedTrackPlaylist>
        )
    }
}


export default UserLikedSongs