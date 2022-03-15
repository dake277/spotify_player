import styled from 'styled-components'


export const LikedSongsCoverArt = styled.div`
    min-width:190px;
    width: 17vw;
    height: auto;
    background: linear-gradient(158deg, #431eb3, #b4acd4 100%);
    display:flex;
    justify-content:center;
    align-items:center;
    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`

export const CurrentPlaylistHeaderWrapper = styled.header`
        background: linear-gradient(180deg, rgba(0,0,0,.1) 0%, rgba(0,0,0,.4) 100%);
        grid-area: playlist;
        padding-bottom: 25px;
        padding-left:32px;
        display:flex;
        align-items: flex-end;


        .playlist-body {
            text-align:left !important;
            margin-left:25px;
        }


        .current-playlist {
            height: 240px;
            text-align: center;
            width: 100%;
            display:flex;
            align-items: flex-end;

            .playlist-cover-art {
                width: auto;
                min-height: auto;
                box-shadow: 0 4px 60px rgba(0,0,0,.5);

                .cover-image-wrapper {
                    .empty-playlist {
                        width: 230px;
                        height: 230px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: linear-gradient(180deg, rgba(40,40,40,0) 0%, rgba(40,40,40,1) 100%);

                        .note-icon {
                            width: 80px;
                            height: 80px;
                            filter: invert(0.4);
                        }
                    }
                }
            }

            .playlist-body {
                text-align:center;
                display: flex;
                flex-direction: column;

               

                .playlist-entity {

                    .playlist-type {
                        font-weight:bold;
                        text-transform:uppercase;
                        font-size: 11px;
                        color: #f8f8f8;
                    }

                    .playlist-title {
                        line-height: 36px;
                        letter-spacing: -.005em;
                        font-weight: 700;
                        text-transform: none;
                        color:white;
                        -webkit-text-stroke-width: 2px;
                        letter-spacing: -1px;

                        h2 {
                            @media only screen and (max-width: 1240px) {
                                font-size: 42px;
                            }
                            font-family: 'Prox';
                            font-size:5vw;
                            margin: 0.4em 0;
                        }
                    }

                    .playlist-owner {
                        font-weight:bold;
                        cursor:pointer;
                        color:rgba(255,255,255);
                        &:hover {
                            text-decoration: underline;
                            color:rgba(255,255,255,.8);
                        }
                    }
                }

            }
        }

            

`