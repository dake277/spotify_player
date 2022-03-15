import axios from 'axios'


export default {
    albums : async accessToken => { 
            const { data } = await axios.get('https://api.spotify.com/v1/me/albums',{
                headers : { 'Authorization': 'Bearer '+ accessToken }
            })
            return data.items
    },
    artists : async (accessToken,artistIds) => {
            const { data } = await axios.get(`https://api.spotify.com/v1/artists?ids=${artistIds}`,{ 
                headers : {'Authorization': 'Bearer '+ accessToken }
            })
            return data
    },
    songs : {
        fetchSongs : async accessToken => { 
            const { data } = await axios.get('https://api.spotify.com/v1/me/tracks?limit=50',{ 
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data.items
        },
        searchSongs : async (accessToken,searchTerm) => {
            const { data } = await axios.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`,{
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data.items
        },
        fetchRecentlySongs : async accessToken => {
            const { data } = await axios.get('https://api.spotify.com/v1/me/player/recently-played',{
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data.items
        }
    },
    browse : {
        fetchCategories : async accessToken => {
            const { data } = await axios.get('https://api.spotify.com/v1/browse/categories',{
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data.categories
        },
        fetchNewReleases : async accessToken => {
            const { data } = await axios.get('https://api.spotify.com/v1/browse/new-releases',{
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data.albums
        },
        fetchFeatured : async accessToken => {
            const { data } = await axios.get('https://api.spotify.com/v1/browse/featured-playlists',{
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data.playlists
        }
    },
    playlist : {
        fetchPlaylistMenu : async (accessToken,userId) => {
            const { data } = await axios.get(`https://api.spotify.com/v1/users/${userId}/playlists`,{
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data.items
        },
        fetchPlaylistSongs : async (userId,playlistId,accessToken) => {
            const { data } = await axios.get(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,{
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data.items
        },
        createPlaylist: async (accessToken, userId, playlistData) => {
            const res = await axios.post(`https://api.spotify.com/v1/users/${userId}/playlists`, playlistData , {
                headers : { 'Authorization': 'Bearer ' + accessToken },
            })
            return res.data
        }
    },
    user : {
        fetchUser : async (accessToken) => {
            const { data } = await axios.get(`https://api.spotify.com/v1/me`,{
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data
        },
        addSongToLibrary : async (accessToken,id) => {
            await axios.put(`https://api.spotify.com/v1/me/tracks?ids=${id}`,{
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
        }
    }
}