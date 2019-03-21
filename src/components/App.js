import React from 'react'
import { selectSong } from "../actions";
import Songlist from './SongList';
import SongDetail from './SongDetail'

const App = () => {
    return (
        < div className = "ui grid " style={{marginLeft: "15%" }}>
            <div className="ui row">
                <div className="column eight wide">
                    <Songlist />
                </div>
                 <div className = "column eight wide" >
                   <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default App