import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';


function App() {

  const [songs, setSongs] = useState([]);

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
    try {
      let response = await axios.post('http://127.0.0.1:5000/api/songs', newSong)
      if (response.status === 201) {
        await getAllSongs(); 
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function searchSongs(searchQuery) {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/songs/')
      const filteredSongs = response.data.songs.filter((song) => {
        return (
          song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.album.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.release_date.toLowerCase().includes(searchQuery.toLowerCase()) 
        );
      });
      setSongs(filteredSongs);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <div>
        {/* navbar */}
        <NavBar searchSongs={searchSongs} addSong={addSong}/>
      </div>
      <div>
        <MusicTable songs={songs}/>
      </div>
    </div>
  );
}

export default App;
