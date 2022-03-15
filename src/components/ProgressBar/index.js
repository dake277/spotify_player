import React from 'react'
import styled from 'styled-components'

const ProgressBarOuterLayout = styled.div`
    height: 12px;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`

const BufferLine = styled.div`
    background-color: rgb(64, 64, 64);
    border-radius: 2px;
    display: flex;
    height: 4px;
    width: 100%;
    overflow:hidden;
`

const CurrentProgress = styled.div`
    background-color: #b3b3b3;
    border-radius: 2px;
    height: 4px;
    width: 100%;
    transform:translateX(-${props => props.timeLeft * 100 / 30}%);

    &:hover {
        background-color:#1db954;
    }
`


const ProgressBar = ({ timeLeft }) => {
    // const [currentTime, setCurrentTime] = React.useState(0)

    return (
        <ProgressBarOuterLayout>
            <BufferLine>
                <CurrentProgress timeLeft={timeLeft} />
            </BufferLine>
        </ProgressBarOuterLayout>
    )
}


export default ProgressBar