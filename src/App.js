import React, { useState, useEffect } from 'react';
import { getSpotifyToken, searchArtistSongs } from './SpotifyService';

function App() {
  const [likedArtists, setLikedArtists] = useState([]);
  const [songs, setSongs] = useState([]);
  
  // Ye hain aapke artists ki list
  const popularArtists = ["Sidhu Moose Wala", "Diljit Dosanjh", "Karan Aujla", "Shubh", "Drake", "AP Dhillon"];

  const handleLike = (artist) => {
    if (likedArtists.length < 20 && !likedArtists.includes(artist)) {
      setLikedArtists([...likedArtists, artist]);
    }
  };

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
    <div style={{ background: '#121212', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center', color: '#1DB954' }}>Stage.ai - Select Your Artists</h2>
      
      {/* Artists ke Buttons yahan hain */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px' }}>
        {popularArtists.map(artist => (
          <button 
            key={artist} 
            onClick={() => handleLike(artist)}
            style={{ padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', background: likedArtists.includes(artist) ? '#1DB954' : '#333', color: 'white' }}
          >
            {artist} {likedArtists.includes(artist) ? '✓' : '+'}
          </button>
        ))}
      </div>

      <div className="feed" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px' }}>
        {songs.map(track => (
          <div key={track.id} style={{ background: '#181818', padding: '15px', borderRadius: '10px' }}>
            <img src={track.album.images[0].url} width="100%" style={{ borderRadius: '5px' }} alt="cover" />
            <p style={{ fontSize: '14px', margin: '10px 0 5px' }}><b>{track.name}</b></p>
            <p style={{ fontSize: '12px', color: '#b3b3b3' }}>{track.artists[0].name}</p>
            <audio controls src={track.preview_url} style={{ width: '100%', marginTop: '10px' }}></audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
