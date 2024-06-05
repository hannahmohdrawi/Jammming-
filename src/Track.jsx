import React, {useCallback} from 'react';

const TrackTitleContext = createContext();
const TrackArtistContext = createContext();
const TrackAlbumContext = createContext();


function Track(props){

    const addTrack = useCallback((event) => {
        props.onAdd(props.track);
    }, [props.onAdd, props.track]);

    const removeTrack = useCallback((event) => {
        props.onRemove(props.track);
    }, [props.onRemove, props.track]);

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
    
    };
    

    return(
        <div className="Track">
            <div className="Track info">
                <h2>{props.track.name}</h2>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {changeToPlaylist()}
        </div>
    );
};

export default Track;




