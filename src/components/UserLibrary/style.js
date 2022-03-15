import styled from 'styled-components'


export const UserLibraryLayout = styled.div`
    height: auto;
    min-width: 455px;
    margin-top: 95px;
    padding: 0 32px;
    letter-spacing: 0.1px;

    .collection-layout {
        margin:35px 0;
        display: grid;
        grid-gap: 16px;
        grid-template-columns: repeat(auto-fill,minmax(164px,1fr));
    }

    h1 {
        color:#fff;
        font-size:1.9em;
        margin: 0 0 20px 0;
    }
    h3 {
        color: #fff;
        margin: 0;
        font-weight:100;
        line-height:10px;
        letter-spacing: 0.5px;
        font-size: 1.2em;
    }
`

export const CollectionItem = styled.li`
    position:relative;
    overflow:hidden;
    cursor:pointer;
    background: #282828;
    border-radius: 8px;
    padding: 20px 20px 16px;

    .item-detail {
        .item-description {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size:12px;
            height:40px;
        }

        .item-title {
            font-size: 14px;
            line-height: 20px;
            font-weight: 700;
            letter-spacing: .24px;
            color: #fff;
            h4 {
                margin:0;
            }
        }
    }

    .cover-art {
        margin-bottom:16px;
    }

    .item-cover {
        width: 100%;
        height: auto;
        box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
    }

    .empty-playlist {
        box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
        background: #383838;
        width:100%;
        height:160px;
        max-width: 186.5px;
        max-height: 186.5px;
        display:flex;
        justify-content:center;
        align-items:center;

        .empty-icon {
            transform: translateX(-5px);
            filter:invert(0.7);
            width: 80px;
            height: 80px;
        }
    }

    .play-btn {
        right:16px;
        bottom:13px;
        opacity:0;
        display:flex;
        position:absolute;
        justify-content:center;
        align-items:center;
        width: 43px;
        height: 43px;
        background:#1db954;
        border-radius:50%;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);

        > svg {
            filter: brightness(1.5);
        }
    }
    &:hover {
        .play-btn {
            opacity:1;
        }
    }
`