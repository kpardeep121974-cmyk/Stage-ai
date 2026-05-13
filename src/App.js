import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState('login'); 
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('music');
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const artists = [
    { name: "Sidhu Moose Wala", img: "https://i.scdn.co/image/ab6761610000e5eb19db620023068e1363673c6a", id: "70m6_H_H9_Y" },
    { name: "Diljit Dosanjh", img: "https://i.scdn.co/image/ab6761610000e5eb1e967a57c1d7634f1ec5f79b", id: "cl0a3i2wDzQ" },
    { name: "Karan Aujla", img: "https://i.scdn.co/image/ab6761610000e5eb2d04a69e36500473e120803c", id: "9S7m9uN67-M" },
    { name: "Arijit Singh", img: "https://i.scdn.co/image/ab6761610000e5eb026139ca7486e41c6969282c", id: "Heeriye" }
  ];

  const plans = [
    { name: "Mini", price: "₹7", duration: "1 Day", features: ["Ad-free music", "30 song downloads"] },
    { name: "Student", price: "₹59", duration: "Month", features: ["Full Premium", "Student Verification"] },
    { name: "Individual", price: "₹119", duration: "Month", features: ["1 Account", "Ad-free & Offline"] },
    { name: "Duo", price: "₹149", duration: "Month", features: ["2 Accounts", "Shared Premium"] },
    { name: "Family", price: "₹179", duration: "Month", features: ["Up to 6 accounts", "Kids filter"] }
  ];

  const filteredArtists = artists.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (step === 'login') {
    return (
      <div style={{ background: '#000', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h1 style={{ color: '#FF0000', fontSize: '4rem', letterSpacing: '10px', textShadow: '0 0 20px #FF0000' }}>STAGE.AI</h1>
        <button onClick={() => setStep('language')} style={{ background: '#fff', color: '#000', padding: '15px 40px', borderRadius: '30px', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '20px' }}>Continue to Stage</button>
      </div>
    );
  }

  if (step === 'language') {
    return (
      <div style={{ background: '#080808', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h2>Select Language</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '30px' }}>
          {['English', 'हिन्दी', 'ਪੰਜਾਬੀ'].map((l, i) => (
            <button key={l} onClick={() => { setLang(['en', 'hi', 'pa'][i]); setStep('lobby'); }} style={{ padding: '20px 40px', background: 'transparent', color: 'white', border: '2px solid #FF0000', borderRadius: '15px', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#000', color: 'white', minHeight: '100vh', paddingBottom: '100px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', background: '#111', borderBottom: '1px solid #222', position: 'sticky', top: 0, zIndex: 10 }}>
        <h2 style={{ color: '#FF0000', margin: 0 }}>STAGE.AI</h2>
        <div style={{ display: 'flex', gap: '25px', cursor: 'pointer' }}>
          <span onClick={() => setActiveTab('music')} style={{ color: activeTab === 'music' ? '#FF0000' : '#fff' }}>Music</span>
          <span onClick={() => setActiveTab('plans')} style={{ color: activeTab === 'plans' ? '#FF0000' : '#fff' }}>Plans</span>
          <span onClick={() => setActiveTab('settings')} style={{ color: activeTab === 'settings' ? '#FF0000' : '#fff' }}>Settings ⚙️</span>
        </div>
      </nav>

      <div style={{ padding: '40px' }}>
        {activeTab === 'music' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <h1>Top Artists</h1>
              <input type="text" placeholder="Search Artist..." onChange={(e) => setSearchTerm(e.target.value)} style={{ padding: '12px 20px', borderRadius: '25px', width: '300px', background: '#111', border: '1px solid #FF0000', color: 'white' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '30px' }}>
              {filteredArtists.map(artist => (
                <div key={artist.name} onClick={() => setCurrentVideoId(artist.id)} style={{ background: '#111', padding: '20px', borderRadius: '20px', textAlign: 'center', cursor: 'pointer', border: '1px solid #222' }}>
                  <img src={artist.img} style={{ width: '130px', height: '130px', borderRadius: '50%', border: '3px solid #FF0000' }} alt={artist.name} />
                  <h3 style={{ marginTop: '10px' }}>{artist.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'plans' && (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            {plans.map(p => (
              <div key={p.name} style={{ background: '#111', padding: '25px', borderRadius: '20px', width: '220px', border: '1px solid #333' }}>
                <h2 style={{ color: '#FF0000' }}>{p.name}</h2>
                <h3>{p.price}</h3>
                <p style={{ color: '#888' }}>for {p.duration}</p>
                <button style={{ width: '100%', background: '#fff', padding: '10px', borderRadius: '20px', fontWeight: 'bold', marginTop: '10px' }}>Get Plan</button>
              </div>
            ))}
          </div>
        )}

        {/* --- SETTINGS SECTION (Ab ye sahi kaam karega) --- */}
        {activeTab === 'settings' && (
          <div style={{ maxWidth: '600px', margin: '0 auto', background: '#111', padding: '40px', borderRadius: '20px', border: '1px solid #333' }}>
            <h2 style={{ textAlign: 'center', color: '#FF0000' }}>Account Settings</h2>
            <div style={{ marginTop: '30px' }}>
              <p><strong>Language:</strong> {lang.toUpperCase()}</p>
              <p><strong>Account Type:</strong> Free Tier</p>
              <hr style={{ border: '0.1px solid #222', margin: '20px 0' }} />
              <button onClick={() => setStep('login')} style={{ background: '#FF0000', color: '#fff', border: 'none', padding: '15px', borderRadius: '10px', width: '100%', fontWeight: 'bold', cursor: 'pointer' }}>LOGOUT</button>
            </div>
          </div>
        )}
      </div>

      {currentVideoId && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#111', borderTop: '2px solid #FF0000', padding: '10px' }}>
          <iframe width="100%" height="60" src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`} frameBorder="0" allow="autoplay"></iframe>
          <button onClick={() => setCurrentVideoId('')} style={{ position: 'absolute', right: '20px', top: '10px', color: 'red', border: 'none', background: 'none', fontSize: '20px', cursor: 'pointer' }}>X</button>
        </div>
      )}
    </div>
  );
}

export default App;
