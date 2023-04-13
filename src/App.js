import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    try{
      let response = await axios.get('http://127.0.0.1:5000/api/songs');
      setSongs(response.data.songs);
    } catch (error) {
      console.log(error);
    }
  }

  async function searchSongs()

  return (
    <div className="App">
      <div>
        {/* navbar */}
      </div>
      <div>
        {/* table */}
      </div>
    </div>
  );
}

export default App;
