import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState('login'); 
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('music');
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // --- BIG ARTIST LIST (Asli Photos & Songs) ---
  const artists = [
    { name: "Sidhu Moose Wala", img: "https://i.scdn.co/image/ab6761610000e5eb19db620023068e1363673c6a", id: "70m6_H_H9_Y", bio: "Legend of Punjabi Music" },
    { name: "Diljit Dosanjh", img: "https://i.scdn.co/image/ab6761610000e5eb1e967a57c1d7634f1ec5f79b", id: "cl0a3i2wDzQ", bio: "Global Punjabi Icon" },
    { name: "Karan Aujla", img: "https://i.scdn.co/image/ab6761610000e5eb2d04a69e36500473e120803c", id: "9S7m9uN67-M", bio: "Geetan Di Machine" },
    { name: "Amrit Maan", img: "https://i.scdn.co/image/ab6761610000e5ebda6094469f6920f79669046c", id: "6xoBzk-Zk_8", bio: "Bamb Jatt" },
    { name: "Shubh", img: "https://i.scdn.co/image/ab6761610000e5eb7986007e28c40331070624d4", id: "StillRollin", bio: "Elevated King" },
    { name: "Arijit Singh", img: "https://i.scdn.co/image/ab6761610000e5eb026139ca7486e41c6969282c", id: "Heeriye", bio: "Soul of Bollywood" },
    { name: "Babbu Maan", img: "https://i.scdn.co/image/ab6761610000e5eba652bc5a6d57318a67c51483", id: "Hashar", bio: "The Living Legend" },
    { name: "Satinder Sartaaj", img: "https://i.scdn.co/image/ab6761610000e5eb981880e61f2510860000d60c", id: "Udaarian", bio: "Sufi Prince" }
  ];

  const filteredArtists = artists.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (step === 'login') {
    return (
      <div style={{ background: '#000', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h1 style={{ color: '#FF0000', fontSize: '4.5rem', letterSpacing: '12px', textShadow: '0 0 30px #FF0000' }}>STAGE.AI</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>Your Music, Your Rules.</p>
        <button onClick={() => setStep('language')} style={{ background: '#fff', color: '#000', padding: '15px 50px', borderRadius: '30px', fontWeight: 'bold', border: 'none', cursor: 'pointer', transition: '0.3s' }}>ENTER THE STAGE</button>
      </div>
    );
  }

  if (step === 'language') {
    return (
      <div style={{ background: '#080808', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h2 style={{ marginBottom: '40px' }}>Select Language / ਭਾਸ਼ਾ ਚੁਣੋ</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '25px' }}>
          {['English', 'हिन्दी', 'ਪੰਜਾਬੀ'].map((l, i) => (
            <button key={l} onClick={() => { setLang(['en', 'hi', 'pa'][i]); setStep('lobby'); }} style={{ padding: '25px 50px', background: 'transparent', color: 'white', border: '2px solid #FF0000', borderRadius: '15px', fontSize: '1.2rem', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#000', color: 'white', minHeight: '100vh', paddingBottom: '120px' }}>
      {/* NAVBAR */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 50px', background: '#111', borderBottom: '2px solid #FF0000', position: 'sticky', top: 0, zIndex: 100 }}>
        <h2 style={{ color: '#FF0000', margin: 0, fontSize: '2rem' }}>STAGE.AI</h2>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center', fontWeight: 'bold', cursor: 'pointer' }}>
          <span onClick={() => setActiveTab('music')} style={{ color: activeTab === 'music' ? '#FF0000' : '#fff' }}>MUSIC</span>
          <span onClick={() => setActiveTab('ai')} style={{ color: activeTab === 'ai' ? '#FF0000' : '#fff' }}>AI STUDIO ✨</span>
          <span onClick={() => setActiveTab('settings')} style={{ color: activeTab === 'settings' ? '#FF0000' : '#fff' }}>SETTINGS ⚙️</span>
        </div>
      </nav>

      <div style={{ padding: '50px' }}>
        {/* MUSIC SECTION */}
        {activeTab === 'music' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <h1>Top Artists & Profiles</h1>
              <input type="text" placeholder="Search Artist (e.g. Sidhu)..." onChange={(e) => setSearchTerm(e.target.value)} style={{ padding: '15px 30px', borderRadius: '30px', background: '#111', border: '1px solid #FF0000', color: 'white', width: '400px', outline: 'none' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '35px' }}>
              {filteredArtists.map(artist => (
                <div key={artist.name} onClick={() => setCurrentVideoId(artist.id)} style={{ background: '#111', padding: '25px', borderRadius: '25px', textAlign: 'center', cursor: 'pointer', border: '1px solid #222', transition: '0.3s' }}>
                  <img src={artist.img} style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #FF0000', marginBottom: '15px' }} alt={artist.name} />
                  <h3 style={{ margin: '5px 0' }}>{artist.name}</h3>
                  <p style={{ color: '#FF0000', fontSize: '12px', fontWeight: 'bold' }}>{artist.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI STUDIO SECTION */}
        {activeTab === 'ai' && (
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', color: '#FF0000', marginBottom: '40px' }}>AI Magic Studio ✨</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div style={{ background: '#111', padding: '40px', borderRadius: '25px', border: '1px solid #333' }}>
                <h3>AI Script Writer</h3>
                <p style={{ color: '#888', fontSize: '14px' }}>AI will write your next hit song lyrics.</p>
                <textarea placeholder="Describe your song theme..." style={{ width: '100%', height: '120px', background: '#222', border: 'none', color: '#fff', padding: '15px', borderRadius: '10px', marginTop: '15px' }}></textarea>
                <button style={{ width: '100%', padding: '15px', background: '#FF0000', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', marginTop: '15px', cursor: 'pointer' }}>Generate Lyrics</button>
              </div>
              <div style={{ background: '#111', padding: '40px', borderRadius: '25px', border: '1px solid #333' }}>
                <h3>AI Poster Maker</h3>
                <p style={{ color: '#888', fontSize: '14px' }}>Create stunning album covers with AI.</p>
                <input type="text" placeholder="Describe the visual..." style={{ width: '100%', padding: '15px', background: '#222', border: 'none', color: '#fff', borderRadius: '10px', marginTop: '15px' }} />
                <button style={{ width: '100%', padding: '15px', background: '#FF0000', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', marginTop: '15px', cursor: 'pointer' }}>Generate Image</button>
              </div>
            </div>
          </div>
        )}

        {/* SETTINGS SECTION */}
        {activeTab === 'settings' && (
          <div style={{ maxWidth: '600px', margin: '0 auto', background: '#111', padding: '50px', borderRadius: '25px', border: '1px solid #333', textAlign: 'center' }}>
            <h2 style={{ color: '#FF0000' }}>User Profile & Settings</h2>
            <div style={{ marginTop: '30px', textAlign: 'left' }}>
              <p><strong>Account:</strong> kpardeep121974 (Admin)</p>
              <p><strong>Current Plan:</strong> Stage Pro (Family)</p>
              <p><strong>Region:</strong> Punjab, India</p>
              <hr style={{ border: '0.1px solid #222', margin: '30px 0' }} />
              <button onClick={() => setStep('login')} style={{ background: '#FF0000', color: '#fff', border: 'none', padding: '15px', borderRadius: '10px', width: '100%', fontWeight: 'bold', cursor: 'pointer' }}>LOGOUT</button>
            </div>
          </div>
        )}
      </div>

      {/* FLOATING MUSIC PLAYER */}
      {currentVideoId && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: 'rgba(17,17,17,0.95)', borderTop: '2px solid #FF0000', padding: '15px', backdropFilter: 'blur(10px)', zIndex: 1000 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '20px' }}>
             <iframe width="100%" height="80" src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`} frameBorder="0" allow="autoplay"></iframe>
             <button onClick={() => setCurrentVideoId('')} style={{ background: '#FF0000', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', fontWeight: 'bold', cursor: 'pointer' }}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
