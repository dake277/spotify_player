import styled from 'styled-components'


export const TrackPlayerWrapper = styled.section` 
    width: 40%;
    min-width: 386px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 722px;



    .track-options {
        margin-bottom: 12px;
        width: 224px;
        justify-content: space-between;
        display: flex; 
        align-items:center;
    }

    .track-progress-bar {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;

        .track-time-left {
            font-size: 11px;
            line-height: 16px;
            letter-spacing: .015em;
            min-width: 40px;
            text-align: center;
        }

        .track-progress-time {
            font-size: 11px;
            line-height: 16px;
            letter-spacing: .015em;
            min-width: 40px;
            text-align: center;
        }
    }

`

export const IconWrapper = styled.div` 
    width: 34px; 
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    .shuffle-icon, .repeat-icon {
        filter:invert(0.5);
    }
`

export const CurrentTrackActions = styled.span` 
    border: ${props => props.loading ? 'none' : '1px solid'};
    border-radius: 50%;
    width: 32px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        filter: brightness(2);
        transform: scale(1.05);
        
        svg {
            filter: brightness(2);
            transform: scale(1.05);
        }
    }



    .pause-icon {
        filter:invert(0.8);
    }

    div {
        box-sizing: border-box;
        display: ${props => props.loading ? 'block' : 'none'};
        position: absolute;
        width: 32px;
        height: 32px;
        border: 2px solid #fff;
        border-radius: 50%;
        animation: loading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }
    .loading div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .loading div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .loading div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
` 
