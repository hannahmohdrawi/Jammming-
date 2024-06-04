import React, {createContext} from 'react';

const TrackTitleContext = createContext();
const TrackArtistContext = createContext();
const TrackAlbumContext = createContext();


function Track(){

    return(
        <div className="Track">
            {/* Using useContext to avoid prop drilling */}

            <TrackTitleContext.Provider value ={TrackTitle}>
                <p> `Track title is ${TrackTitle}</p><br/>
            </TrackTitleContext.Provider>

            <TrackArtistContext.Provider value ={TrackArtist}>
                <p> `Track title is ${TrackArtist}</p><br/>
            </TrackArtistContext.Provider>

            <TrackAlbumContext.Provider value ={TrackAlbum}>
                <p> `Track title is ${TrackAlbum}</p><br/>
            </TrackAlbumContext.Provider>



        </div>
    )


}

export default Track;


function changeToPlaylist(){
    if (props.isRemoval){
        return(
            <button onClick={removeTrack}>-</button>
        )
    }else{
        return(
            <button onClick={addTrack}>+</button>
        )
    }

}

function addTrack(){
    props.addition(props.track);
}

function removeTrack(){
    props.removal(props.track);
}