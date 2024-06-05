import React from 'react';
import TrackList from 'Tracklist.jsx';

function Playlist(){

    const handleNameChange= useCallback((event) => {
        props.onNameChange(event.target.value);
    }, [props.onNameChange]);
    


    return(
        <div>
            <input onChange={handleNameChange} defaultValue= {"Playlist Name"}/>
            <TrackList 
                tracks={props.playlistTracks}
                onRemove = {props.onRemove}
                isRemoval = {true}
            />
            <button onclick={saveToSpotify}>Save to Spotify</button>

        </div>
    );
};

export default Playlist;