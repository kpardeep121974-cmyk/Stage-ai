import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState('login'); 
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('music');
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // --- Artist List (Tenu hor gaane bharne ne ta bas yaha ID badal de) ---
  const artists = [
    { name: "Sidhu Moose Wala", img: "https://i.scdn.co/image/ab6761610000e5eb19db620023068e1363673c6a", id: "70m6_H_H9_Y", bio: "Legend" },
    { name: "Diljit Dosanjh", img: "https://i.scdn.co/image/ab6761610000e5eb1e967a57c1d7634f1ec5f79b", id: "cl0a3i2wDzQ", bio: "G.O.A.T" },
    { name: "Karan Aujla", img: "https://i.scdn.co/image/ab6761610000e5eb2d04a69e36500473e120803c", id: "9S7m9uN67-M", bio: "Geetan Di Machine" },
    { name: "Shubh", img: "https://i.scdn.co/image/ab6761610000e5eb7986007e28c40331070624d4", id: "StillRollin", bio: "Elevated" },
    { name: "Amrit Maan", img: "https://i.scdn.co/image/ab6761610000e5ebda6094469f6920f79669046c", id: "6xoBzk-Zk_8", bio: "Bamb Jatt" },
    { name: "Satinder Sartaaj", img: "https://i.scdn.co/image/ab6761610000e5eb981880e61f2510860000d60c", id: "Udaarian", bio: "Sufi Prince" }
  ];

  const filteredArtists = artists.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (step === 'login') {
    return (
      <div style={{ background: '#000', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h1 style={{ color: '#FF0000', fontSize: '4rem', letterSpacing: '10px' }}>STAGE.AI</h1>
        <button onClick={() => setStep('language')} style={{ background: '#fff', color: '#000', padding: '15px 50px', borderRadius: '30px', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '20px' }}>ENTER THE STAGE</button>
      </div>
    );
  }

  if (step === 'language') {
    return (
      <div style={{ background: '#080808', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h2>Select Language / ਭਾਸ਼ਾ ਚੁਣੋ</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '30px' }}>
          {['English', 'हिन्दी', 'ਪੰਜਾਬੀ'].map((l, i) => (
            <button key={l} onClick={() => { setLang(['en', 'hi', 'pa'][i]); setStep('lobby'); }} style={{ padding: '20px 40px', background: 'transparent', color: 'white', border: '2px solid #FF0000', borderRadius: '15px', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#000', color: 'white', minHeight: '100vh', paddingBottom: '120px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', background: '#111', borderBottom: '2px solid #FF0000', position: 'sticky', top: 0, zIndex: 100 }}>
        <h2 style={{ color: '#FF0000', margin: 0 }}>STAGE.AI</h2>
        <div style={{ display: 'flex', gap: '25px', cursor: 'pointer', fontWeight: 'bold' }}>
          <span onClick={() => setActiveTab('music')} style={{ color: activeTab === 'music' ? '#FF0000' : '#fff' }}>MUSIC</span>
          <span onClick={() => setActiveTab('ai')} style={{ color: activeTab === 'ai' ? '#FF0000' : '#fff' }}>AI STUDIO ✨</span>
          <span onClick={() => setActiveTab('stream')} style={{ color: activeTab === 'stream' ? '#FF0000' : '#fff' }}>LIVE 🔴</span>
          <span onClick={() => setActiveTab('settings')} style={{ color: activeTab === 'settings' ? '#FF0000' : '#fff' }}>SETTINGS ⚙️</span>
        </div>
      </nav>

      <div style={{ padding: '40px' }}>
        {activeTab === 'music' && (
          <div>
            <input type="text" placeholder="Search Artist..." onChange={(e) => setSearchTerm(e.target.value)} style={{ padding: '12px 25px', borderRadius: '25px', background: '#111', border: '1px solid #FF0000', color: 'white', marginBottom: '30px', width: '300px' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '30px' }}>
              {filteredArtists.map(artist => (
                <div key={artist.name} onClick={() => setCurrentVideoId(artist.id)} style={{ background: '#111', padding: '20px', borderRadius: '20px', textAlign: 'center', border: '1px solid #222', cursor: 'pointer' }}>
                  <img src={artist.img} style={{ width: '150px', height: '150px', borderRadius: '50%', border: '3px solid #FF0000' }} alt={artist.name} />
                  <h3>{artist.name}</h3>
                  <p style={{ color: '#FF0000', fontSize: '12px' }}>{artist.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'stream' && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#FF0000' }}>🔴 LIVE NOW</h2>
            <div style={{ width: '100%', maxWidth: '800px', height: '400px', background: '#111', margin: '20px auto', borderRadius: '20px', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p>Camera Connecting... User is Streaming</p>
            </div>
            <h3>Send a Tip</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
              {['₹10', '₹50', '₹100', '₹500'].map(amt => (
                <button key={amt} onClick={() => alert(`Tipped ${amt}!`)} style={{ background: '#D4AF37', color: '#000', padding: '15px 30px', borderRadius: '10px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Tip {amt}</button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div style={{ textAlign: 'center' }}>
            <h2>AI Magic Studio</h2>
            <div style={{ background: '#111', padding: '30px', borderRadius: '20px', border: '1px solid #333', marginTop: '20px' }}>
              <textarea placeholder="Write lyrics topic for AI..." style={{ width: '100%', height: '80px', background: '#222', color: '#fff', border: 'none', padding: '10px' }}></textarea>
              <button style={{ marginTop: '10px', background: '#FF0000', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '10px' }}>Generate Lyrics</button>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div style={{ textAlign: 'center', background: '#111', padding: '40px', borderRadius: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h2>Settings</h2>
            <p>User: kpardeep121974</p>
            <button onClick={() => setStep('login')} style={{ background: '#FF0000', color: '#fff', border: 'none', padding: '10px 40px', borderRadius: '10px', fontWeight: 'bold', marginTop: '20px' }}>LOGOUT</button>
          </div>
        )}
      </div>

      {currentVideoId && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#111', borderTop: '2px solid #FF0000', padding: '10px', zIndex: 1000 }}>
          <iframe width="100%" height="80" src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`} frameBorder="0" allow="autoplay"></iframe>
          <button onClick={() => setCurrentVideoId('')} style={{ position: 'absolute', right: '20px', top: '10px', color: 'red', background: 'none', border: 'none', fontSize: '20px' }}>X</button>
        </div>
      )}
    </div>
  );
}

export default App;
