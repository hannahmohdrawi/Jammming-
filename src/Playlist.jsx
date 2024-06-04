import React from 'react';
import TrackList from 'Tracklist.jsx';

function Playlist(){

    const Playlist = (props) => {
        const handleNameChange(event){
            props.onNameChange(event.target.value);
        }, [props.onNameChange]
    }

    

    function addTrack(){
        const songAdded = 
    }


    return(
        <div>
            <input onChange={handleNameChange} defaultValue= "Playlist Name"/>
            <TrackList 
                tracks={props.playlistTracks}
            />
            <button onclick={saveToSpotify}>Save to Spotify</button>

        </div>
    );
}

export default Playlist;