import React from 'react'
import { connect } from 'react-redux'
import { viewType } from '../../constants'
import { play } from '../../actions/player'
import { bindActionCreators } from 'redux'
import { PlaylistViewLayout } from './style'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CurrentPlaylistHeader from './CurrentPlaylistHeader'
import PlaylistTracklist from './PlaylistTracklist'
import { Palette } from 'react-palette';


class PlaylistView extends React.Component {

    render() {
        const { playlists, headerTitle, user } = this.props
        const isUserLikedSongs = headerTitle === viewType.LIKED_SONGS
        const currentPlaylist =  playlists && playlists.find(playlist => 
            playlist.name === headerTitle)
         
        const playlistImageUrl = isUserLikedSongs ? ''  : 
            currentPlaylist.images.length ? currentPlaylist.images[0].url : ''
        return (
            <Palette src={playlistImageUrl}>
                {({data, loading }) => {
                    return loading ? <h2>LOADING</h2> :
                        (<PlaylistViewLayout 
                            vibrant={isUserLikedSongs ? '#3c3565' : 
                            currentPlaylist.images.length > 1 ? 
                            'darkgray' : data.vibrant}
                            mute={data.darkMuted}
                            >
                            <CurrentPlaylistHeader
                                isUserLikedSongs={isUserLikedSongs} 
                                currentPlaylist={currentPlaylist}
                                headerTitle={headerTitle}
                                user={user}
                            />

                            <div className="grid-area-tracks">
                                <div className="playlist-actions"> 
                                    <div className="button-wrapper">
                                        <div className="play-btn" onClick={() => 
                                            this.props.songs.length && 
                                            this.props.onPlay(this.props.songs[0])
                                        }>
                                            <PlayArrowIcon />
                                        </div>
                                        <div className="three-dots">
                                            <span className="dot" />
                                            <span className="dot" />
                                            <span className="dot" />
                                        </div>
                                    </div>
                                </div>
                                {this.props.songs.length ? 
                                <PlaylistTracklist 
                                    onPlay={this.props.onPlay} 
                                    songs={this.props.songs}
                                />:
                                <div className="empty-playlist">
                                    <div className="cd-circle">
                                        <span className="big-circle">
                                            <span className="small-circle" />
                                        </span>
                                    </div>
                                    <div className="empty-msg">
                                        <h1>这里是空的...</h1>
                                        <p>为你的歌单添加一些歌曲吧</p>
                                    </div>
                                </div>}
                            </div>
                        </PlaylistViewLayout>)}
                }
            </Palette>
            
        )
    }
}

export default connect(state => ({
    headerTitle: state.uiReducer.title,
    songs: state.songReducer.songs ? state.songReducer.songs : '',
    playlists: state.playlistReducer.playlists,
    user: (state.userReducer.user && state.userReducer.user.display_name) || ''
}),dispatch => bindActionCreators({
	play,
}, dispatch))(PlaylistView)