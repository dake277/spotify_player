const home = require('./images/home.svg')
const search = require('./images/search.svg')
const library = require('./images/library.svg')

export const viewType = {
    ALBUMS: 'Albums',
    SONGS: 'Songs',
    RECENTLY_PLAYED: 'Recently Played',
    SEARCH: 'Search',
    PLAYLISTS: 'Playlists',
    ARTISTS: 'Artists',
    LIKED_SONGS: '已点赞的歌曲',
    USER_LIBRARY: 'User Library',
    HOME: 'Home'
}

export const libraryView = {
    PLAYLISTS: '音乐库',
    PODCASTS: '播客',

    ARTISTS: '艺人',
    ALBUMS: '专辑',

}


export const Navigation = [
     {
        title: '主页',
        icon: home
    },
    {
        title: '搜索',
        icon: search
    },
    {
        title: '音乐库',
        icon: library
    },
]