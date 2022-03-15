import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchRecentlyPlayedRequest } from '../../actions/song'
import { viewType } from '../../constants'


class SongList extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (
          nextProps.token !== "" &&
          !nextProps.fetchSongsError &&
          nextProps.fetchSongsRequest &&
          nextProps.viewType === viewType.RECENTLY_PLAYED
          
        ) {
          this.props.fetchRecentlyPlayedRequest(nextProps.token);
        }
      }
    

    renderSongs = () => {
        return this.props.songs.map((song, i) => {
            const playedAt = new Date(song.played_at)
            return (
                <li key={i}>
                    <div>
                        <p>{song.track.name}</p>
                    </div>
        
                    <div>
                        <p>{song.track.artists[0].name}</p>
                    </div>
                    <div>
                        <p>{song.track.album.name}</p>
                    </div>
                    <div><p>{playedAt.getFullYear()} - {playedAt.getMonth() + 1} - {playedAt.getDate()}</p></div>
                </li>
        )
        })
    }
    render() {
        return (
            <div>
                <h2>song list</h2>
                <ul>{this.props.songs && this.renderSongs()}</ul>
            </div>
        )
    }
}



export default connect(state => ({
    token: (state.tokenReducer && state.tokenReducer.token) || '',
    songs: (state.songReducer && state.songReducer.songs) || '',
    fetchSongsError: state.songReducer.fetchSongsFailure,
    fetchSongsRequest: state.songReducer.fetchSongsRequest,
    viewType: state.uiReducer.title,
}),dispatch => bindActionCreators({ fetchRecentlyPlayedRequest }, dispatch))(SongList)