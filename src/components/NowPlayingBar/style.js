import styled from 'styled-components'


export const NowPlayingWrapper = styled.footer` 
    height: 91px;
    background-color: #282828;

    .current-track-action-bar {
        padding: 0 16px;
        display: flex;
        height: 100%;
        align-items:center;

        .volume-control-bar {
            width: 30%;
            min-width: 180px;
            display: flex;
            justify-content: flex-end;

            .control-bar-container {
                width:180px ;
                display:flex; 
                justify-content:flex-end;
                flex-direction:row;
                align-items:center;

                .volume-bar {
                    display: flex; 
                    width: 136px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

        }
    }
`
