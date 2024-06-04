import React, {useContext} from 'react';
import Track from './Track.jsx';

function Tracklist(){

    const TrackTitle = useContext(TrackTitleContext);
    const TrackArtist = useContext(TrackArtistContext);
    const TrackAlbum = useContext(TrackAlbumContext);


    return(
        <div className="Tracklist">
            {props.tracks.map((track) => {
                return(
                    <>
                        <Track 
                            value={track}
                            key={track.id}
                            

                        />
                    </>
                )
            })}

        </div>
    )

}

export default Tracklist;

