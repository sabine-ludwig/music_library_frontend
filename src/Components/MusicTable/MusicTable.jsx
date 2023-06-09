import './MusicTable.css';

const MusicTable = (props) => {

    let filteredSongs = props.songs.filter(song => (
        (song.title && song.title.toLowerCase().includes(props.searchQuery.toLowerCase())) ||
        (song.artist && song.artist.toLowerCase().includes(props.searchQuery.toLowerCase())) ||
        (song.album && song.album.toLowerCase().includes(props.searchQuery.toLowerCase())) ||
        (song.genre && song.genre.toLowerCase().includes(props.searchQuery.toLowerCase())) ||
        (song.release_date && song.release_date.toLowerCase().includes(props.searchQuery))
      ));

    return ( 
        <table className='music-table' >
            <thead>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Genre</th>
                <th>Release Date</th>
            </tr>
            </thead>
            <tbody>
            {filteredSongs.map((song, index) => {
                return (
                <tr key={index}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
     );
}
 
export default MusicTable;


