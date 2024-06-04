import React, {useState, useContext, useCallback} from 'react';
import Track from './Track.jsx';
import Tracklist from './Tracklist.jsx';

function App() {
  const TrackTitle = useContext(TrackTitleContext);
  const TrackArtist = useContext(TrackArtistContext);
  const TrackAlbum = useContext(TrackAlbumContext);

  const [searchedTracks, setSearchedTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchedTracks);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return(
    <>
      <h1>Jammming</h1>
        <div className="App">
          <SearchBar onSearch={search} />
        </div>
        <p> `Track title is ${TrackTitle}</p><br/>
        <p> `Track artist is ${TrackArtist}</p><br/>
        <p> `Track album is ${TrackAlbum}</p><br/>
      <Track />

    </>
  );
  
}

export default App;
