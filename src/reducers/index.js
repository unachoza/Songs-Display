import { combineReducers } from 'redux'


const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            artist: "TLC",
            released: 1999,
            duration: "4: 05"
        },
        {
            title: 'Macarena',
            artist: "Los Del Rio",
            released: 1993,
            duration: "4: 45"
        },
        {
            title: 'I want it that Way',
            artist: "Backstreet Boys",
            released: 1999,
            duration: "4: 15"
        },
        {
            title: "I Wanna Dance with Somebody ",
            artist: "Whitney Houston",
            released: 1987,
            duration: "4: 55"
        },
        {
            title: "Girls Just Wanna Have Fun",
            artist: "Cyndi Lauper",
            released: 1983,
            duration: "4: 19"
        },
        {
            title: "Don't Stop Believin'",
            artist: "Journey",
            released: 1981,
            duration: "4: 10"
        }
    ]
}

const selectedSongsReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    } 
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongsReducer
})