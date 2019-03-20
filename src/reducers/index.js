import { combineReducers } from 'redux'


const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duration: "4: 05"
        },
        {
          title: 'Macarena',
          duration: "4: 45"
        },
        {
          title: 'I want it that Way',
          duration: "4: 15"
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