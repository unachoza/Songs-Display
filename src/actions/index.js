
//Action Creator
export const selectSong = () => {
    //return an action object
    return {
        type: "SONG_SELECTED",
        payload: song
    }
}