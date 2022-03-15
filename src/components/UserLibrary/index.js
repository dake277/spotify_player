import React from 'react'
import { connect } from 'react-redux'
import { UserLibraryLayout } from './style'
import { libraryView, viewType } from '../../constants'
import { fetchSongs } from '../../actions/song'
import { updateHeaderTitle } from '../../actions/ui'
import { fetchPlaylistSongsRequest } from '../../actions/playlist';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { CollectionItem } from './style'
import UserLikedSongs from './UserLikedSongs'

const MusicNoteIcon = require('../../images/note.svg')
class UserLibrary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount() {
        if (this.props.token) {
            this.props.fetchSongs(this.props.token)
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.token && !nextProps.songs.length) {
            this.props.fetchSongs(nextProps.token)
        }
    }

    handlePlaylistClick = (playlist) => {
            this.props.fetchPlaylistSongsRequest(
              playlist.owner.id,
              playlist.id,
              this.props.token
            )
            this.props.updateHeaderTitle(playlist.name);
    }

    gotoLikedTrackPlaylist = () => {
        this.props.updateHeaderTitle(viewType.LIKED_SONGS);
    }

    renderViewType = () => {
        const { songs } = this.props
        switch(this.props.library) {
            case libraryView.PLAYLISTS :
               return (
               <React.Fragment>
                    <UserLikedSongs gotoLikedTrackPlaylist={this.gotoLikedTrackPlaylist} songs={songs}/>
                    {this.renderCollectionItem(this.props.playlists)}
                </React.Fragment>)
            default :
               return null
        }
    }

    renderCollectionItem = (items) => {
        return items && items.map((item, i) => {
            const collectionDetail = item.description || `By ${item.owner.display_name}`
            
            return <CollectionItem onClick={() => this.handlePlaylistClick(item)} key={i}>
                        <div className="cover-art">
                            {item.images.length ?  <img alt="cover" className="item-cover" src={item.images[0].url}/> : 
                            <div className="empty-playlist">
                                <img alt="empty-playlist" className="empty-icon" src={MusicNoteIcon} />
                            </div>}
                        </div>
                        <div className="item-detail">
                            <div className="play-btn"><PlayArrowIcon /></div>
                            <div className="item-title">
                                <h4>{item.name}</h4>
                            </div>
                            <div className="item-description">
                                <span>{collectionDetail}</span>
                            </div>
                        </div>
                    </CollectionItem>
                })
    }

    render() {
        return (
        <UserLibraryLayout>
            <h1>{this.props.library}</h1>
            <ul className="collection-layout">
                {this.renderViewType()}
            </ul>
        </UserLibraryLayout>
        )
    }
}

export default connect(state => ({
    songs: (state.songReducer && state.songReducer.songs) || '',
    token: state.tokenReducer.token,
    playlists: state.playlistReducer.playlists,
    library: state.uiReducer.library,
    title: state.uiReducer.title
}), (dispatch) => ({
    updateHeaderTitle: (title) => dispatch(updateHeaderTitle(title)),
    fetchSongs: (accessToken) => dispatch(fetchSongs(accessToken)),
    fetchPlaylistSongsRequest: (ownerId,playlistId,token) => 
        dispatch(fetchPlaylistSongsRequest(ownerId, playlistId,token))
}) )(UserLibrary)