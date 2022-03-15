import styled from 'styled-components'
import React from 'react'

const DotIconWrapper = styled.span`
    transform:translateY(-3px);
    margin: 0 5px;
    display: inline-flex;
    align-items: center;

    .dot {
        background: gray;
        height: 4px;
        width: 4px;
        border-radius: 50%;
    }
`



export const DotIcon = () => (
    <DotIconWrapper>
        <span className="dot" />
    </DotIconWrapper>
)