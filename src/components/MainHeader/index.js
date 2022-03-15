import React from 'react'
import { connect } from 'react-redux'

import ArrowDropDownIcon from   '@material-ui/icons/ArrowDropDown'
import LibraryNavigation from './LibraryNavigation'
import { viewType, libraryView } from '../../constants'
import useOutsideClick from '../OutsideClick'
import { PageHistoryButton,HeaderLayout } from './style'




const UserIcon = require('../../images/user.svg')

const MainHeader = ({ opacity, currentView, library, user }) => {
    const [isMenuOpen,openMenu] = React.useState(false)
    const ref = React.useRef()

    useOutsideClick(ref, () => {
        openMenu(false)
    })

    return (
        <HeaderLayout opacity={opacity}>
            <div className="view-state-actions">
                <PageHistoryButton disabled={1} alt="Go back"><i className="arrow left" /></PageHistoryButton>
                <PageHistoryButton disabled={1} alt="Go forward"><i className="arrow right" /></PageHistoryButton>
                {currentView === viewType.USER_LIBRARY && (
                    <div className="library-nav">
                        {Object.values(libraryView).map(view => (
                            <LibraryNavigation key={view.trim()} active={view === library} view={view} />
                        ))}
                    </div>
                    )}
            </div>
            
            <div  ref={ref} onClick={() => openMenu(true)} className="current-user"style={{ display: 'flex' }}>
                <div className="user-icon">
                    <img alt="user" src={UserIcon} />
                </div>
                <span className="username">{user}</span>
                <div className="arrow-dropdown"><ArrowDropDownIcon /></div>
                {isMenuOpen && 
                <div className="toggle-menu">
                    <ul style={{
                        background: 'rgb(40,40,40)',
                        borderRadius: '4px'
                    }}>
                        <li onClick={() => window.location.href = "https://accounts.spotify.com/en/logout"}><h4 style={{ padding: '15px' }}>退出</h4></li>
                    </ul>
                </div>}
            </div>
        </HeaderLayout>
    )
}

export default connect(state => ({
    currentView: state.uiReducer.title,
    library: state.uiReducer.library,
    user: (state.userReducer.user && state.userReducer.user.display_name) || ''
}))(MainHeader)