import styled from 'styled-components'

export const PlaylistViewLayout = styled.div`
    overflow:auto;
    display:grid;
    max-width: 1955px;
    background: linear-gradient(0deg, ${props => props.mute} 0%, ${props => props.vibrant} 100%);

    /* max-height: 4200px; */
    /* min-width: 1500px; */
    grid-template-columns: 1fr;
    grid-template-rows: 340px 1fr;
    grid-template-areas:    "playlist"
                            "tracks";

    .grid-area-tracks {
        padding: 20px 32px;
        grid-area: tracks; 
        overflow: auto;
        background:linear-gradient(180deg,rgba(0,0,0,.5) 50%, rgba(18,18,18,1) 100%);

        .playlist-actions {
            display: flex;
            align-items: center;
            flex-direction:column;
            order:1;
            margin: auto 0 0 0;

            .button-wrapper {
                display: flex;
                width: 100%;

                .three-dots {
                    display:flex;
                    align-items: center;
                    margin-left:40px;

                    &:hover {
                        .dot {
                            background-color:#ffffff;
                        }
                    }

                    .dot {
                        margin-right:6px;
                        height: 5px;
                        width: 5px;
                        background-color: #bbb;
                        border-radius: 50%;
                        display: inline-block;
                    }
                }
                
                .play-btn {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width: 55px;
                    height: 55px;
                    background:#1db954;
                    border-radius:50%;
                    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);

                    > svg {
                        filter: brightness(1.5);
                        width: 1.5em;
                        height: 1.5em;
                    }

                    &:hover {
                        transform:scale(1.1);
                    }
                }
            }
        }

        .empty-playlist {
            display:flex;
            justify-content:center;
            align-items:center;
            height: 300px;
            flex-direction: column;

            .empty-msg {
                text-align:center;
                color: #f3f3f3;
            }

            .cd-circle {
                .big-circle {
                    width: 60px;
                    height: 60px;
                    background: transparent;
                    border-radius: 50%;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border: 3px solid;

                    .small-circle {
                        width: 15px;
                        height: 15px;
                        background: transparent;
                        border-radius: 50%;
                        display: inline-block;
                        border: 3px solid;
                    }
                }
            }
        }
    }

    .cover-image-wrapper {
        min-width:190px;
        display: flex;
        align-items: flex-end;
        width: 17vw;
        max-width:230px;
        height: auto;

        .playlist-cover-image {
            width: 100%;
            height: 100%;
            background-size: contain;
            background-position: 50%;
            background-color: #000;
            background-repeat: no-repeat;
        }

    }
`

