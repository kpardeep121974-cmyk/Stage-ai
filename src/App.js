import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState('login'); 
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('music');
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // --- Artist List (Spotify Ton Copy Kita Style) ---
  const artists = [
    { name: "Sidhu Moose Wala", img: "https://i.scdn.co/image/ab6761610000e5eb19db620023068e1363673c6a", id: "70m6_H_H9_Y", followers: "20M", bio: "The Legend of Punjabi Music Industry." },
    { name: "Diljit Dosanjh", img: "https://i.scdn.co/image/ab6761610000e5eb1e967a57c1d7634f1ec5f79b", id: "cl0a3i2wDzQ", followers: "15M", bio: "Global Superstar and G.O.A.T." },
    { name: "Karan Aujla", img: "https://i.scdn.co/image/ab6761610000e5eb2d04a69e36500473e120803c", id: "9S7m9uN67-M", followers: "12M", bio: "Geetan Di Machine." },
    { name: "Shubh", img: "https://i.scdn.co/image/ab6761610000e5eb7986007e28c40331070624d4", id: "hXm-zS-2nCg", followers: "8M", bio: "Elevated and Still Rollin." },
    { name: "Amrit Maan", img: "https://i.scdn.co/image/ab6761610000e5ebda6094469f6920f79669046c", id: "6xoBzk-Zk_8", followers: "5M", bio: "The Bamb Jatt." },
    { name: "Arijit Singh", img: "https://i.scdn.co/image/ab6761610000e5eb026139ca7486e41c6969282c", id: "RLzC55ai0eo", followers: "40M", bio: "Soul of Bollywood." },
    { name: "Babbu Maan", img: "https://i.scdn.co/image/ab6761610000e5eba652bc5a6d57318a67c51483", id: "Hashar", id: "oM1zK0vM9Xk", followers: "10M", bio: "Kattar Fan Base Legend." },
    { name: "Satinder Sartaaj", img: "https://i.scdn.co/image/ab6761610000e5eb981880e61f2510860000d60c", id: "h6mYn5_N_vE", followers: "4M", bio: "The Sufi Prince." },
    { name: "AP Dhillon", img: "https://i.scdn.co/image/ab6761610000e5eb56e87b7a66b9623e105e46e3", id: "6z_W6O7f78c", followers: "11M", bio: "Brown Munde Worldwide." }
  ];

  const filteredArtists = artists.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (step === 'login') {
    return (
      <div style={{ background: '#000', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h1 style={{ color: '#FF0000', fontSize: '5rem', letterSpacing: '15px', textShadow: '0 0 20px red' }}>STAGE.AI</h1>
        <button onClick={() => setStep('language')} style={{ background: '#fff', color: '#000', padding: '18px 60px', borderRadius: '40px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>LOG IN TO STAGE</button>
      </div>
    );
  }

  if (step === 'language') {
    return (
      <div style={{ background: '#080808', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Select Your Vibe</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '25px' }}>
          {['English', 'हिन्दी', 'ਪੰਜਾਬੀ'].map((l, i) => (
            <button key={l} onClick={() => { setLang(['en', 'hi', 'pa'][i]); setStep('lobby'); }} style={{ padding: '25px 50px', background: 'transparent', color: 'white', border: '2px solid #FF0000', borderRadius: '15px', cursor: 'pointer', fontSize: '1.2rem' }}>{l}</button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#000', color: 'white', minHeight: '100vh', paddingBottom: '120px' }}>
      {/* SIDEBAR/NAVBAR */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 50px', background: '#111', borderBottom: '2px solid #FF0000', position: 'sticky', top: 0, zIndex: 100 }}>
        <h2 style={{ color: '#FF0000', margin: 0, fontSize: '2rem' }}>STAGE.AI</h2>
        <div style={{ display: 'flex', gap: '30px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem' }}>
          <span onClick={() => setActiveTab('music')} style={{ color: activeTab === 'music' ? '#FF0000' : '#fff' }}>HOME</span>
          <span onClick={() => setActiveTab('ai')} style={{ color: activeTab === 'ai' ? '#FF0000' : '#fff' }}>AI STUDIO ✨</span>
          <span onClick={() => setActiveTab('stream')} style={{ color: activeTab === 'stream' ? '#FF0000' : '#fff' }}>LIVE 🔴</span>
          <span onClick={() => setActiveTab('settings')} style={{ color: activeTab === 'settings' ? '#FF0000' : '#fff' }}>SETTINGS ⚙️</span>
        </div>
      </nav>

      <div style={{ padding: '50px' }}>
        {activeTab === 'music' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <h1 style={{ fontSize: '2.5rem' }}>Popular Artists</h1>
              <input type="text" placeholder="Search 1000+ songs..." onChange={(e) => setSearchTerm(e.target.value)} style={{ padding: '15px 30px', borderRadius: '30px', background: '#181818', border: '1px solid #333', color: 'white', width: '400px', outline: 'none' }} />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '35px' }}>
              {filteredArtists.map(artist => (
                <div key={artist.name} onClick={() => setCurrentVideoId(artist.id)} style={{ background: '#181818', padding: '25px', borderRadius: '20px', textAlign: 'center', border: '1px solid #282828', cursor: 'pointer', transition: '0.3s' }}>
                  <img src={artist.img} style={{ width: '170px', height: '170px', borderRadius: '50%', border: '4px solid #FF0000', objectFit: 'cover' }} alt={artist.name} />
                  <h3 style={{ marginTop: '15px', fontSize: '1.4rem' }}>{artist.name}</h3>
                  <p style={{ color: '#888', fontSize: '0.9rem' }}>{artist.followers} Followers</p>
                  <p style={{ color: '#FF0000', fontSize: '0.8rem', marginTop: '5px' }}>{artist.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LIVE SECTION */}
        {activeTab === 'stream' && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#FF0000', fontSize: '2.5rem' }}>🔴 LIVE CONCERT</h2>
            <div style={{ width: '100%', maxWidth: '900px', height: '500px', background: '#111', margin: '30px auto', borderRadius: '30px', border: '2px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <p style={{ fontSize: '1.5rem', color: '#666' }}>[ Camera Feed Connecting... ]</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
               {['₹10', '₹50', '₹100', '₹500'].map(amt => (
                 <button key={amt} onClick={() => alert(`Tip of ${amt} sent!`)} style={{ background: '#D4AF37', color: '#000', padding: '15px 40px', borderRadius: '12px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Tip {amt}</button>
               ))}
            </div>
          </div>
        )}

        {/* AI STUDIO */}
        {activeTab === 'ai' && (
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ color: '#FF0000' }}>AI Magic Studio</h1>
            <div style={{ background: '#181818', padding: '40px', borderRadius: '25px', border: '1px solid #333', marginTop: '30px' }}>
              <h3>Write Song Script with AI</h3>
              <textarea placeholder="Enter song topic..." style={{ width: '100%', height: '100px', background: '#222', border: 'none', color: '#fff', padding: '15px', borderRadius: '12px', marginTop: '15px' }}></textarea>
              <button style={{ background: '#FF0000', color: '#fff', border: 'none', padding: '15px 40px', borderRadius: '30px', marginTop: '15px', fontWeight: 'bold' }}>Generate Lyrics</button>
            </div>
          </div>
        )}

        {/* SETTINGS */}
        {activeTab === 'settings' && (
          <div style={{ textAlign: 'center', background: '#181818', padding: '60px', borderRadius: '30px', maxWidth: '600px', margin: '0 auto', border: '1px solid #333' }}>
            <h2 style={{ color: '#FF0000' }}>Account Settings</h2>
            <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>Username: <strong>kpardeep121974</strong></p>
            <p>Plan: <strong>Family Premium (₹179/mo)</strong></p>
            <button onClick={() => setStep('login')} style={{ background: '#FF0000', color: '#fff', border: 'none', padding: '15px 50px', borderRadius: '15px', fontWeight: 'bold', marginTop: '40px', cursor: 'pointer' }}>LOG OUT</button>
          </div>
        )}
      </div>

      {/* FLOATING PLAYER */}
      {currentVideoId && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: 'rgba(17,17,17,0.95)', borderTop: '3px solid #FF0000', padding: '15px', zIndex: 1000, backdropFilter: 'blur(10px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '25px' }}>
            <iframe width="100%" height="85" src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=0`} frameBorder="0" allow="autoplay; encrypted-media"></iframe>
            <button onClick={() => setCurrentVideoId('')} style={{ background: '#FF0000', color: 'white', border: 'none', borderRadius: '50%', width: '45px', height: '45px', fontWeight: 'bold', cursor: 'pointer' }}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
