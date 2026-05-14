import React, { useState, useEffect } from 'react';

function App() {
  const [step, setStep] = useState('login'); 
  const [activeTab, setActiveTab] = useState('music');
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [cityStatus, setCityStatus] = useState('Normal');

  // --- FREE CITY NPCs (Zero Feelings, Pure Code) ---
  const npcs = [
    { name: "Guy (The Teller)", role: "Bank Employee", task: "Standing with hands up during robberies", quote: "Don't have a good day, have a great day!" },
    { name: "Buddy", role: "Security Guard", task: "Guarding the bank but doing nothing", quote: "Is that a protagonist?" },
    { name: "Coffee Shop Barista", role: "Service NPC", task: "Making the exact same medium coffee with cream and two sugars", quote: "Medium coffee, cream and two sugars!" },
    { name: "Pink Shirt Girl", role: "Background NPC", task: "Walking in a loop from A to B", quote: "..." }
  ];

  const artists = [
    { name: "Sidhu Moose Wala", img: "https://i.scdn.co/image/ab6761610000e5eb19db620023068e1363673c6a", id: "70m6_H_H9_Y", bio: "Free City Legend" },
    { name: "Diljit Dosanjh", img: "https://i.scdn.co/image/ab6761610000e5eb1e967a57c1d7634f1ec5f79b", id: "cl0a3i2wDzQ", bio: "G.O.A.T Protagonist" },
    { name: "Karan Aujla", img: "https://i.scdn.co/image/ab6761610000e5eb2d04a69e36500473e120803c", id: "9S7m9uN67-M", bio: "The NPC Rapper" }
  ];

  // Movie-style Glitch Effect Toggle
  const toggleGlitches = () => {
    setCityStatus(cityStatus === 'Normal' ? 'Glitching...' : 'Normal');
  };

  if (step === 'login') {
    return (
      <div style={{ background: '#000', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#00d4ff', fontFamily: 'monospace' }}>
        <h1 style={{ fontSize: '4.5rem', textShadow: '0 0 20px #00d4ff' }}>FREE CITY OS</h1>
        <p style={{ letterSpacing: '5px' }}>VERSION 1.0.2 - NPC PROTOCOL ENABLED</p>
        <button onClick={() => setStep('lobby')} style={{ background: '#00d4ff', color: '#000', padding: '15px 50px', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px', borderRadius: '5px' }}>BOOT SYSTEM</button>
      </div>
    );
  }

  return (
    <div style={{ background: '#050505', color: 'white', minHeight: '100vh', paddingBottom: '120px' }}>
      {/* FREE CITY UI HEADER */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', background: '#111', borderBottom: '2px solid #00d4ff' }}>
        <h2 style={{ color: '#00d4ff', margin: 0 }}>STAGE: FREE CITY ({cityStatus})</h2>
        <div style={{ display: 'flex', gap: '25px', cursor: 'pointer' }}>
          <span onClick={() => setActiveTab('music')} style={{ color: activeTab === 'music' ? '#00d4ff' : '#fff' }}>EXPLORE</span>
          <span onClick={() => setActiveTab('npc')} style={{ color: activeTab === 'npc' ? '#00d4ff' : '#fff' }}>NPCs</span>
          <span onClick={() => setActiveTab('ai')} style={{ color: activeTab === 'ai' ? '#00d4ff' : '#fff' }}>SOURCE CODE</span>
          <button onClick={toggleGlitches} style={{ background: 'red', color: 'white', fontSize: '10px', borderRadius: '5px', border: 'none', padding: '5px' }}>GLITCH</button>
        </div>
      </nav>

      <div style={{ padding: '40px' }}>
        {/* MUSIC EXPLORER */}
        {activeTab === 'music' && (
          <div>
            <h1 style={{ color: '#00d4ff' }}>City Radio Stations</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '30px' }}>
              {artists.map(artist => (
                <div key={artist.name} onClick={() => setCurrentVideoId(artist.id)} style={{ background: '#111', padding: '20px', borderRadius: '10px', border: '1px solid #00d4ff', textAlign: 'center', cursor: 'pointer' }}>
                  <img src={artist.img} style={{ width: '130px', height: '130px', borderRadius: '5px', objectFit: 'cover' }} alt={artist.name} />
                  <h3 style={{ color: '#00d4ff' }}>{artist.name}</h3>
                  <p style={{ fontSize: '10px' }}>{artist.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NPC DATABASE (Movie Logic) */}
        {activeTab === 'npc' && (
          <div>
            <h1 style={{ color: '#00d4ff' }}>NPC Directory (Non-Player Characters)</h1>
            <p style={{ color: '#888' }}>Note: These entities have zero feelings. They only follow their loops.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
              {npcs.map(npc => (
                <div key={npc.name} style={{ background: '#111', padding: '20px', border: '1px solid #333', borderRadius: '5px' }}>
                  <h3 style={{ color: '#00d4ff', margin: 0 }}>{npc.name}</h3>
                  <p style={{ fontSize: '12px', color: '#ffea00' }}>Role: {npc.role}</p>
                  <p style={{ fontSize: '13px' }}><strong>Routine:</strong> {npc.task}</p>
                  <div style={{ background: '#222', padding: '10px', marginTop: '10px', fontStyle: 'italic', color: '#00d4ff' }}>
                    "{npc.quote}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SOURCE CODE (AI) */}
        {activeTab === 'ai' && (
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#00d4ff' }}>Antwan's Admin Panel</h2>
            <div style={{ background: '#111', padding: '30px', border: '1px solid #00d4ff' }}>
              <p>Rewrite character code:</p>
              <textarea placeholder="Ex: Change Guy's loop to protagonist..." style={{ width: '100%', height: '80px', background: '#222', color: '#00d4ff', border: '1px solid #00d4ff', padding: '10px' }}></textarea>
              <button style={{ width: '100%', padding: '15px', background: '#00d4ff', color: '#000', fontWeight: 'bold', border: 'none', marginTop: '15px' }}>COMPILE CODE</button>
            </div>
          </div>
        )}
      </div>

      {/* PLAYER (Sunglasses Interface) */}
      {currentVideoId && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: 'rgba(0, 212, 255, 0.1)', borderTop: '2px solid #00d4ff', padding: '15px', backdropFilter: 'blur(10px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <iframe width="100%" height="80" src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`} frameBorder="0"></iframe>
            <button onClick={() => setCurrentVideoId('')} style={{ background: '#00d4ff', padding: '10px', fontWeight: 'bold' }}>QUIT</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
