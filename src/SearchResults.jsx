import React from 'react';
import Tracklist from 'Tracklist.jsx';
 
function SearchResults(props){
    return(
        <div className="SearchResults">
            <h2>Search Results</h2>
            <Tracklist 
                tracks={props.searchResults} onAdd = {props.onAdd}
            />
        </div>
    )

}

export default SearchResults;