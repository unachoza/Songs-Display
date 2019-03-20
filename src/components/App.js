import React from 'react'
import { selectSong } from "../actions";
import Songlist from './SongList';

const App = () => {
    return (
        <div>
            <Songlist/>
        </div>
    )
}

export default App