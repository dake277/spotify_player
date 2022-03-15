import styled from 'styled-components'

export const EllipsisText = styled.div`
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
font-weight: 400;
font-size: ${props => props.size || 14}px;
line-height: 20px;
letter-spacing: .015em;
text-align: left;

 ${props => `color:${props.color || '#b3b3b3'}`};

`

export const CurrentTrackSection = styled.section`
    width: 30%;
    min-width: 180px;
    display: flex;
    align-items:center;

    .current-track-wrapper {
        overflow: hidden;

        .current-track-cover-art {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 100%;

            .cover-art-wrapper {
                min-width:56px;
                min-height:56px;
                box-shadow: 0 0 10px rgba(0,0,0,.3);

                .track-cover-art {
                    width: 56px;
                    height: 56px;
                }
            }

            .ellipsis-text-wrapper {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin:0 0 0 14px;
            }
        }

        .current-track-actions {
            display: flex; 
            align-items: center;
            justify-content:center;
            max-width: 80px;
            height: 30px;

            .like-track-icon {
                display: flex;
                justify-content: center;
                width: 32px;
            }

            .screen-icon {
                display: flex;
                justify-content: center; 
                width: 32px;
            }
        }
    }
 `