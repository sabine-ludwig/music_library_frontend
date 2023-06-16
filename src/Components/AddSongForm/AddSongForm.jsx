import React, { useState } from 'react'
import './AddSongForm.css'

const AddSongForm = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date
        };
        props.addSong(newSong)
        setTitle('')
        setArtist('')
        setAlbum('')
        setReleaseDate('')
    }

    return ( 
        <form className='form' onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(event => setTitle(event.target.value))}/>
            <label>Artist</label>
            <input type="text" value={artist} onChange={(event => setArtist(event.target.value))}/>
            <label>Album</label>
            <input type="text" value={album} onChange={(event => setAlbum(event.target.value))}/>
            <label>Release Date</label>
            <input type="date" value={release_date} onChange={(event => setReleaseDate(event.target.value))}/>
            <button type='submit'>Add Song</button>
        </form>
     );
}
 
export default AddSongForm;