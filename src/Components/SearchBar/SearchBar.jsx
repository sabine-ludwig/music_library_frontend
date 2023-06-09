import './SearchBar.css'

const SearchBar = (props) => {

    function handleSubmit(event) {
        event.preventDefault();
    };

    return ( 
        <form className='search' onSubmit={(handleSubmit)}>
            <input className='search-bar' type="text" placeholder="Search" onChange={(event) => props.setSearchQuery(event.target.value)}/> 
            <button className='search-button' type='button' >Search Song</button>
        </form>
     );
}

export default SearchBar;