import React, { useState, useEffect } from 'react';
import { getSpotifyToken, searchArtistSongs } from './SpotifyService';

function App() {
  const [likedArtists, setLikedArtists] = useState([]); // Max 20 list
  const [songs, setSongs] = useState([]);

  // Jab user artist like kare
  const handleLike = (artist) => {
    if (likedArtists.length < 20) {
      setLikedArtists([...likedArtists, artist]);
    } else {
      alert("Limit reached! 20 artists only.");
    }
  };

  // Spotify se selected artists ke gaane lana
  useEffect(() => {
    const fetchMusic = async () => {
      const token = await getSpotifyToken();
      let allSongs = [];
      for (let artist of likedArtists) {
        const artistSongs = await searchArtistSongs(token, artist);
        allSongs = [...allSongs, ...artistSongs];
      }
      setSongs(allSongs);
    };
    if (likedArtists.length > 0) fetchMusic();
  }, [likedArtists]);

  return (
    <div style={{ background: '#121212', color: 'white', padding: '20px' }}>
      <h2>Select up to 20 Artists</h2>
      {/* Yahan buttons banayein jo handleLike ko call karein */}
      
      <div className="feed">
        {songs.map(track => (
          <div key={track.id}>
            <img src={track.album.images[0].url} width="50" alt="cover" />
            <p>{track.name} - {track.artists[0].name}</p>
            <audio controls src={track.preview_url}></audio> 
          </div>
        ))}
      </div>
    </div>
  );
}
