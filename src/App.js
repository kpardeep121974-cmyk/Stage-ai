import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState('login'); 
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('music');
  const [currentVideoId, setCurrentVideoId] = useState('');

  const artists = [
    { name: "Sidhu Moose Wala", img: "https://i.scdn.co/image/ab6761610000e5eb19db620023068e1363673c6a", id: "70m6_H_H9_Y" },
    { name: "Diljit Dosanjh", img: "https://i.scdn.co/image/ab6761610000e5eb1e967a57c1d7634f1ec5f79b", id: "cl0a3i2wDzQ" },
    { name: "Karan Aujla", img: "https://i.scdn.co/image/ab6761610000e5eb2d04a69e36500473e120803c", id: "9S7m9uN67-M" },
    { name: "Arijit Singh", img: "https://i.scdn.co/image/ab6761610000e5eb026139ca7486e41c6969282c", id: "Heeriye" }
  ];

  const plans = [
    { name: "Mini", price: "₹7", duration: "1 Day", features: ["Ad-free music on mobile", "30 song downloads", "Short-term use"] },
    { name: "Student", price: "₹59", duration: "Month", features: ["Full Premium features", "Discounted rate", "Verification required"] },
    { name: "Individual", price: "₹119", duration: "Month", features: ["1 Premium account", "Ad-free & Offline", "Play any track"] },
    { name: "Duo", price: "₹149", duration: "Month", features: ["2 Premium accounts", "For couples/roommates", "Living together"] },
    { name: "Family", price: "₹179", duration: "Month", features: ["Up to 6 accounts", "Spotify Kids app", "Explicit content filter"] }
  ];

  if (step === 'login') {
    return (
      <div style={{ background: '#000', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h1 style={{ color: '#FF0000', fontSize: '4rem', letterSpacing: '10px', textShadow: '0 0 20px #FF0000' }}>STAGE.AI</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '320px', marginTop: '30px' }}>
          <button onClick={() => setStep('language')} style={{ background: '#fff', color: '#000', padding: '15px', borderRadius: '30px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Continue with Google</button>
          <button onClick={() => setStep('language')} style={{ background: '#1877F2', color: '#fff', padding: '15px', borderRadius: '30px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Continue with Facebook</button>
        </div>
      </div>
    );
  }

  if (step === 'language') {
    return (
      <div style={{ background: '#080808', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h2 style={{ marginBottom: '40px' }}>Select Language</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
          {['English', 'हिन्दी', 'ਪੰਜਾਬੀ'].map((l, i) => (
            <button key={l} onClick={() => { setLang(['en', 'hi', 'pa'][i]); setStep('lobby'); }} style={{ padding: '20px 40px', background: 'transparent', color: 'white', border: '2px solid #FF0000', borderRadius: '15px', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#000', color: 'white', minHeight: '100vh' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', background: '#111', borderBottom: '1px solid #222', position: 'sticky', top: 0, zIndex: 10 }}>
        <h2 style={{ color: '#FF0000', margin: 0 }}>STAGE.AI</h2>
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center', cursor: 'pointer' }}>
          <span onClick={() => setActiveTab('music')} style={{ color: activeTab === 'music' ? '#FF0000' : '#fff' }}>Music</span>
          <span onClick={() => setActiveTab('ai')} style={{ color: activeTab === 'ai' ? '#FF0000' : '#fff' }}>AI Studio</span>
          <span onClick={() => setActiveTab('live')} style={{ color: activeTab === 'live' ? '#FF0000' : '#fff' }}>Live Stream</span>
          <span onClick={() => setActiveTab('plans')} style={{ color: activeTab === 'plans' ? '#FF0000' : '#fff' }}>Premium Plans</span>
          <span onClick={() => setActiveTab('settings')} style={{ color: activeTab === 'settings' ? '#FF0000' : '#fff' }}>Settings ⚙️</span>
        </div>
      </nav>

      <div style={{ padding: '40px' }}>
        {activeTab === 'music' && (
          <div>
            <h1>All Songs & Artists</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '30px', marginTop: '30px' }}>
              {artists.map(artist => (
                <div key={artist.name} onClick={() => setCurrentVideoId(artist.id)} style={{ background: '#111', padding: '20px', borderRadius: '20px', textAlign: 'center', border: '1px solid #222', cursor: 'pointer' }}>
                  <img src={artist.img} style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #FF0000' }} alt={artist.name} />
                  <h3 style={{ marginTop: '15px' }}>{artist.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'plans' && (
          <div>
            <h1 style={{ textAlign: 'center' }}>Choose Your Plan</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
              {plans.map(plan => (
                <div key={plan.name} style={{ background: '#111', padding: '25px', borderRadius: '20px', width: '220px', border: '1px solid #333', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h2 style={{ color: '#FF0000', margin: '0 0 10px 0' }}>{plan.name}</h2>
                    <h3 style={{ margin: '0' }}>{plan.price}</h3>
                    <p style={{ color: '#888', fontSize: '14px' }}>for {plan.duration}</p>
                    <ul style={{ padding: '15px 0', fontSize: '13px', color: '#ccc', listStyle: 'none' }}>
                      {plan.features.map(f => <li key={f} style={{ marginBottom: '5px' }}>• {f}</li>)}
                    </ul>
                  </div>
                  <button style={{ background: '#fff', color: '#000', border: 'none', padding: '10px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>Get {plan.name}</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Music Player Bar */}
        {currentVideoId && (
          <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#111', borderTop: '2px solid #FF0000', padding: '10px', zIndex: 1000 }}>
            <iframe width="100%" height="60" src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`} frameBorder="0" allow="autoplay"></iframe>
            <button onClick={() => setCurrentVideoId('')} style={{ position: 'absolute', right: '20px', top: '20px', background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}>X</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
