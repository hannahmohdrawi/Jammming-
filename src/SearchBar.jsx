import playlist from './playlist.jsx';
import React, {useState, useCallback} from 'react';

function SearchBar(){
    
    const [song, setSong] = useState([]);

    const search = useCallback((event) => {
        preprocessCSS.onSearch(song);
    }, [props.onSearch, song]);

    const handleChange = useCallback((event) => {
        setEvent(event.target.value);

    }, []);

    return(
        <div className="searchBar">
            <input
                placeholder="Enter a song name"
                onChange={handleChange}
            />

            <button className = "searchBtn" onClick={search}>Search</button>
        </div>
    );
};

export default SearchBar;