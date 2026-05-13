import React, { useState } from 'react';
import { artists } from './MusicData';

function App() {
  const [likedArtists, setLikedArtists] = useState([]);

  const toggleLike = (artistName) => {
    if (likedArtists.includes(artistName)) {
      setLikedArtists(likedArtists.filter(a => a !== artistName));
    } else if (likedArtists.length < 20) {
      setLikedArtists([...likedArtists, artistName]);
    } else {
      alert("Aap sirf 20 artists hi select kar sakte hain!");
    }
  };

  return (
    <div style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1>Stage-ai Personalized Music</h1>
      
      <h3>Select your top 20 Artists ({likedArtists.length}/20)</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {artists.map(artist => (
          <button 
            key={artist.id}
            onClick={() => toggleLike(artist.name)}
            style={{
              padding: '10px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: likedArtists.includes(artist.name) ? '#1db954' : '#333',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            {artist.name}
          </button>
        ))}
      </div>

      <hr style={{ margin: '40px 0' }} />

      <h3>Your Personalized Feed</h3>
      {likedArtists.length === 0 ? (
        <p>Please select some artists to see their songs!</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {/* Yahan hum logic lagayenge jo sirf selected artists ke gaane dikhayega */}
          <p>Showing songs for: {likedArtists.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default App;
