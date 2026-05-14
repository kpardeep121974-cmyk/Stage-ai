import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState('login'); 
  const [activeTab, setActiveTab] = useState('world');
  const [cityStatus, setCityStatus] = useState('Simulation Stable');

  // FREE CITY NPCs - No Feelings, Pure Logic
  const npcs = [
    { name: "Guy", role: "Bank Teller", loop: "Greets customers, hands up during robberies.", quote: "Don't have a good day, have a great day!" },
    { name: "Buddy", role: "Security Guard", loop: "Standing at the bank entrance, observing.", quote: "Is that a protagonist?" },
    { name: "Barista", role: "Coffee Service", loop: "Making medium coffee, cream, two sugars.", quote: "Here is your coffee!" }
  ];

  if (step === 'login') {
    return (
      <div style={{ background: '#000', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#00d4ff', fontFamily: 'monospace' }}>
        <h1 style={{ fontSize: '4rem', textShadow: '0 0 20px #00d4ff' }}>FREE CITY OS</h1>
        <p>RE-BOOTING SYSTEM PROTOCOL...</p>
        <button onClick={() => setStep('lobby')} style={{ background: '#00d4ff', color: '#000', padding: '15px 40px', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' }}>INITIALIZE</button>
      </div>
    );
  }

  return (
    <div style={{ background: '#050505', color: 'white', minHeight: '100vh' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', background: '#111', borderBottom: '2px solid #00d4ff' }}>
        <h2 style={{ color: '#00d4ff', margin: 0 }}>FREE CITY: {cityStatus}</h2>
        <div style={{ display: 'flex', gap: '25px', cursor: 'pointer', fontWeight: 'bold' }}>
          <span onClick={() => setActiveTab('world')} style={{ color: activeTab === 'world' ? '#00d4ff' : '#fff' }}>WORLD MAP</span>
          <span onClick={() => setActiveTab('npc')} style={{ color: activeTab === 'npc' ? '#00d4ff' : '#fff' }}>NPC DATABASE</span>
          <span onClick={() => setActiveTab('missions')} style={{ color: activeTab === 'missions' ? '#00d4ff' : '#fff' }}>MISSIONS</span>
        </div>
      </nav>

      <div style={{ padding: '40px' }}>
        {activeTab === 'world' && (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: '#00d4ff' }}>The Grid: Sector 7</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <div style={{ border: '1px solid #333', padding: '20px', background: '#111' }}>📍 The Bank (Interaction Level: High)</div>
              <div style={{ border: '1px solid #333', padding: '20px', background: '#111' }}>📍 Coffee Shop (Interaction Level: Constant)</div>
            </div>
          </div>
        )}

        {activeTab === 'npc' && (
          <div>
            <h2 style={{ color: '#00d4ff' }}>Non-Player Characters (No Feelings Detected)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
              {npcs.map(n => (
                <div key={n.name} style={{ background: '#111', padding: '20px', borderLeft: '5px solid #00d4ff' }}>
                  <h3>{n.name}</h3>
                  <p style={{ color: '#888' }}>Role: {n.role}</p>
                  <p><strong>Loop:</strong> {n.loop}</p>
                  <p style={{ fontStyle: 'italic', color: '#00d4ff' }}>"{n.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'missions' && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#ffea00' }}>Active Missions</h2>
            <div style={{ background: '#222', padding: '20px', display: 'inline-block', border: '1px dashed #ffea00' }}>
               <p>Mission: Observe the Bank Teller loop for 60 seconds.</p>
               <button onClick={() => alert('System Glitch Detected!')} style={{ background: '#ffea00', border: 'none', padding: '10px 20px', fontWeight: 'bold' }}>START</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
