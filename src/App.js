import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';
import AddSongForm from './Components/AddSongForm/AddSongForm';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const [songs, setSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    try {
      let response = await axios.get('http://127.0.0.1:5000/api/songs');
      setSongs(response.data.songs);
    } catch (error) {
      console.log(error);
    }
  }

  async function addSong(newSong) {
    console.log(newSong);
    try {
      let response = await axios.post('http://127.0.0.1:5000/api/songs', newSong)
      if (response.status === 201) {
        await getAllSongs(); 
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <SearchBar setSearchQuery={setSearchQuery}/>
      </div>
      <div>
        <MusicTable songs={songs} searchQuery={searchQuery}/>
      </div>
      <div>
        <AddSongForm addSong={addSong}/>
      </div>
    </div>
  );
}

export default App;
