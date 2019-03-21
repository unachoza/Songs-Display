import React from 'react'
import {connect} from 'react-redux'

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a Song</div>
    }
    return (
        <div>
            <h3 style={{ fontSize : 50 }}> Details for:</h3>
            <p>
                Title: {song.title} <br />
                Artist: {song.artist} <br />
                Release Date: {song.released} <br/>
                Duration: {song.duration}
            </p>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
   return  {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)