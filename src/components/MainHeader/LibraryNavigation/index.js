import React from 'react'
import styled from 'styled-components'


const LibraryNavStyleWrapper = styled.div`
    padding:10px;
    background: ${props => props.active ? '#282828' : 'transparent'};
    border-radius: 4px;
    cursor:pointer;
    margin-right:8px;
    
    .nav-button {
        outline:0;
        border:0;
        background:transparent;
        color: #fff;
        font-weight: bold;
    }

`

const LibraryNavigation = ({ view, active }) => {
    return (
        <LibraryNavStyleWrapper active={active}>
            <button className="nav-button">{view}</button>
        </LibraryNavStyleWrapper>
    )
}


export default LibraryNavigation