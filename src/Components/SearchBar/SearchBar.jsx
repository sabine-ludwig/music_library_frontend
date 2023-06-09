import React, {useState} from 'react';
import './SearchBar.css'

const SearchBar = ({searchSongs}) => {

    const [searchQuery, setSearchQuery] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        searchSongs(searchQuery);
    };

    return ( 
        <form className='search' onSubmit={(handleSubmit)}>
            <input className='search-bar' type="text" value={searchQuery} placeholder="Search" onChange={(event) => setSearchQuery(event.target.value)}/> 
            <button className='search-button' type='button' >Search Song</button>
        </form>
     );
}

export default SearchBar;