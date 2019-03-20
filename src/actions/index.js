
//Action Creator
export const selectSong = (song) => {
    //return an action object
    return {
        type: "SONG_SELECTED",
        payload: song
    }
}