import React from 'react'
import ReactDOM from 'react-dom'
import { CreatePlaylistWrapper } from './styled'
import { createPlaylistRequest } from '../../actions/playlist'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'

const modalRoot = document.getElementById("modal-root")

function CreatePlaylist({ 
    onClose, 
    isOpen, 
    createPlaylistRequest, 
    token, 
    userId, 
}) {
    const [open, handleToggle] = React.useState(false)
    const inputRef = React.useRef(null)

    React.useEffect(() => {
        window.addEventListener('keydown', onEscKeyDown)
        setTimeout(() => handleToggle(true), 0)
        return () => {
            window.removeEventListener('keydown',onEscKeyDown, false)
        }
    },[isOpen])

    function onEscKeyDown(e) {
        if (e.key === "Escape") {
            onClose(false)
        }
    }

    function onCreatePlaylist() {
        createPlaylistRequest(token, userId, {
            name: (inputRef && inputRef.current.value) || '新建歌单'
        })
        onClose(false)
    }

    return ReactDOM.createPortal(
        <CreatePlaylistWrapper isOpen={open}>
            <div>
                <span onClick={() => onClose(false)}>X</span>
            </div>
            <h1 className="create-playlist-title">创建新的歌单</h1>
            <div className="create-playlist-input">
                <div className="input-box">
                    <h4>歌单名字</h4>
                    <input ref={inputRef} placeholder="新建歌单" type="text" />
                </div>
            </div>
            <div className="create-playlist-actions">
                <button className="cancel btn" onClick={() => onClose(false)}>取消</button>
                <button className="create btn" onClick={onCreatePlaylist}>确认</button>
            </div>
        </CreatePlaylistWrapper>
    ,modalRoot)
}

export default connect(state => ({
        userId: state.userReducer.user ? state.userReducer.user.id : '',
        token: state.tokenReducer.token ? state.tokenReducer.token : '',
}) , dispatch => 
    bindActionCreators({
      createPlaylistRequest,
    }, dispatch)
)(CreatePlaylist)