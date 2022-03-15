import React , { Component } from 'react'
import { bindActionCreators } from "redux";
import { fetchPlaylistMenuRequest, 
  fetchPlaylistSongsRequest
 } from '../../actions/playlist';
 import { updateHeaderTitle } from '../../actions/ui'
import { connect } from 'react-redux'
import styled from 'styled-components'

const UserPlaylistLayout = styled.div`
  padding-left:24px;

`

const PlaylistItem = styled.li`
    background:transparent;
    padding: 6px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.015em;
    color: rgb(255, 255, 255,0.5);
    text-align: left;
    cursor:default;

    &:hover {
      color: rgb(255, 255, 255);
    }

`

class UserPlaylists extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.userId !== "" && nextProps.token !== "" && !nextProps.playlistMenu.length) {
        this.props.fetchPlaylistMenuRequest(nextProps.token, nextProps.userId);
      }
    }



    
    render() {
      const { playlistMenu } = this.props
        return (
            <UserPlaylistLayout>
                {playlistMenu.length ? 
                <ul style={{ 
                  overflowY: 'auto', 
                  height: 'calc(100vh - 493px)', 
                  margin: '5px 0',
                
                }}>{playlistMenu.map(playlist => (
                      <PlaylistItem onClick={() => {
                        this.props.fetchPlaylistSongsRequest(
                          playlist.owner.id,
                          playlist.id,
                          this.props.token
                        )
                        this.props.updateHeaderTitle(playlist.name);
                      }} className="playlist-item" key={playlist.id}>{playlist.name}</PlaylistItem>
                    ))}
                  </ul> : null}
            </UserPlaylistLayout>
        )
    }
}

export default connect(state => {
    return {
        userId: state.userReducer.user ? state.userReducer.user.id : '',
        token: state.tokenReducer.token ? state.tokenReducer.token : '',
        playlistMenu: state.playlistReducer.playlistMenu ? state.playlistReducer.playlistMenu : ''
    }
} , dispatch => 
    bindActionCreators({
      fetchPlaylistMenuRequest,
       fetchPlaylistSongsRequest,
       updateHeaderTitle
    }, dispatch)
)(UserPlaylists)