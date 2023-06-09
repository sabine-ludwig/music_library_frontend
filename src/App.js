import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';
import AddSongForm from './Components/AddSongForm/AddSongForm';
import SearchBar from './Components/SearchBar/SearchBar';

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

  async function searchSongs(searchQuery) {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/songs/')
      const filteredSongs = response.data.songs.filter((song) => {
        return (
          song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.album.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.release_date.includes(searchQuery) 
        );
      });
      setSongs(filteredSongs);
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

  // function addNewSong(song) {
  //   let tempSongs = [song, ...songs];
  //   setSongs(tempSongs);
  // }

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <SearchBar searchSongs={searchSongs}/>
      </div>
      <div>
        <MusicTable songs={songs}/>
      </div>
      <div>
        <AddSongForm addSong={addSong}/>
      </div>
    </div>
  );
}

export default App;
