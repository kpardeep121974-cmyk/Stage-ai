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

  const filteredArtists = artists.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (step === 'login') {
    return (
      <div style={{ background: '#000', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h1 style={{ color: '#FF0000', fontSize: '4rem', letterSpacing: '10px' }}>STAGE.AI</h1>
        <button onClick={() => setStep('language')} style={{ background: '#fff', color: '#000', padding: '15px 40px', borderRadius: '30px', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '20px' }}>Enter Stage</button>
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
    <div style={{ background: '#000', color: 'white', minHeight: '100vh', paddingBottom: '100px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', background: '#111', borderBottom: '1px solid #222', position: 'sticky', top: 0, zIndex: 10 }}>
        <h2 style={{ color: '#FF0000', margin: 0 }}>STAGE.AI</h2>
        <div style={{ display: 'flex', gap: '25px', cursor: 'pointer' }}>
          <span onClick={() => setActiveTab('music')} style={{ color: activeTab === 'music' ? '#FF0000' : '#fff' }}>Music</span>
          <span onClick={() => setActiveTab('ai')} style={{ color: activeTab === 'ai' ? '#FF0000' : '#fff' }}>AI Studio ✨</span>
          <span onClick={() => setActiveTab('plans')} style={{ color: activeTab === 'plans' ? '#FF0000' : '#fff' }}>Plans</span>
          <span onClick={() => setActiveTab('settings')} style={{ color: activeTab === 'settings' ? '#FF0000' : '#fff' }}>Settings ⚙️</span>
        </div>
      </nav>

      <div style={{ padding: '40px' }}>
        {activeTab === 'music' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
              <h1>Top Artists</h1>
              <input type="text" placeholder="Search Artist..." onChange={(e) => setSearchTerm(e.target.value)} style={{ padding: '10px 20px', borderRadius: '25px', background: '#111', border: '1px solid #FF0000', color: 'white' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '30px' }}>
              {filteredArtists.map(artist => (
                <div key={artist.name} onClick={() => setCurrentVideoId(artist.id)} style={{ background: '#111', padding: '20px', borderRadius: '20px', textAlign: 'center', cursor: 'pointer', border: '1px solid #222' }}>
                  <img src={artist.img} style={{ width: '130px', height: '130px', borderRadius: '50%', border: '2px solid #FF0000' }} alt={artist.name} />
                  <h3 style={{ marginTop: '10px' }}>{artist.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#FF0000' }}>AI Magic Studio</h2>
            <div style={{ background: '#111', padding: '30px', borderRadius: '20px', marginTop: '20px', border: '1px solid #333' }}>
              <h4>AI Song Script Writer</h4>
              <textarea placeholder="Lyrics likhwan layi topic duso..." style={{ width: '100%', height: '80px', background: '#222', color: '#fff', border: 'none', padding: '10px' }}></textarea>
              <button style={{ marginTop: '15px', background: '#FF0000', color: '#fff', border: 'none', padding: '10px 30px', borderRadius: '10px' }}>Generate Script</button>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div style={{ maxWidth: '600px', margin: '0 auto', background: '#111', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
            <h2>User Settings</h2>
            <button onClick={() => setStep('login')} style={{ background: '#FF0000', color: '#fff', border: 'none', padding: '15px', borderRadius: '10px', width: '100%', fontWeight: 'bold', marginTop: '30px' }}>LOGOUT</button>
          </div>
        )}
        
        {/* Plans section add karna reh jaye toh yaha se content ayega */}
        {activeTab === 'plans' && ( <div style={{textAlign:'center'}}><h2>Plans Coming Soon</h2></div> )}
      </div>

      {currentVideoId && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#111', borderTop: '2px solid #FF0000', padding: '10px' }}>
          <iframe width="100%" height="60" src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`} frameBorder="0"></iframe>
          <button onClick={()=>setCurrentVideoId('')} style={{position:'absolute', right:'20px', top:'10px', color:'red', background:'none', border:'none', fontSize:'20px'}}>X</button>
        </div>
      )}
    </div>
  );
}

export default App;
