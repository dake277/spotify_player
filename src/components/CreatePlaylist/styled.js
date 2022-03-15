import styled from 'styled-components'


export const CreatePlaylistWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: ${props => props.isOpen ? 1 : 0};
    z-index: 99;
    background: rgba(0, 0, 0, 0.7);
    color: rgb(255,255,255,1);

    .create-playlist-title {
        font-size: 3.5em;
        letter-spacing: -2px;
        font-weight:bold;
    }

    .create-playlist-actions {
        margin-top: 40px;

        .btn {
            letter-spacing: 1px;
            font-weight: bolder;
            padding: 10px;
            border:none;
            margin: 0 10px;
            border-radius: 16px;
            width: 130px;
            color: rgb(255,255,255,1);
            cursor: pointer;
            &:hover {
                transform:scale(1.1);
            }

        }

        .create {
            background-color:#1db954;
        }
        .cancel {
            border: 1px solid rgb(255,255,255,1);
            background-color: rgb(0,0,0,0.2);
        }
    }


    .create-playlist-input {
        width: calc(100% - 80px);
        padding: 40px;
        background: #282828;
        display: flex;
        flex-direction:column;
        justify-content: center;

        .input-box {
            min-width: 700px;
            margin: 0 auto;

            input {
                font-weight: bold;
                color: rgb(255,255,255);
                ::-webkit-input-placeholder {
                    font-weight: bold;
                }
                font-size: 40px;
                background: transparent;
                border: 0;
                width: 100%;
            }
        }
    }
`