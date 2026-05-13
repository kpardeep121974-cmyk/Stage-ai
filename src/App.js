import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState('login'); // login, language, lobby
  const [lang, setLang] = useState('en');

  // --- 1. LOGIN PAGE ---
  if (step === 'login') {
    return (
      <div style={{ background: '#000', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center' }}>
        <h1 style={{ color: '#FF0000', fontSize: '3rem', letterSpacing: '5px' }}>STAGE.AI</h1>
        <p style={{ marginBottom: '30px', color: '#888' }}>Login to start your musical journey</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px' }}>
          <button onClick={() => setStep('language')} style={{ background: '#fff', color: '#000', padding: '12px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>Continue with Google</button>
          <button onClick={() => setStep('language')} style={{ background: '#4267B2', color: '#fff', padding: '12px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>Continue with Facebook</button>
          <button onClick={() => setStep('language')} style={{ background: '#1DA1F2', color: '#fff', padding: '12px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>Continue with Twitter (X)</button>
        </div>
      </div>
    );
  }

  // --- 2. LANGUAGE PAGE ---
  if (step === 'language') {
    return (
      <div style={{ background: '#0a0a0a', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h2>Select Your Language / अपनी भाषा चुनें</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
          <button onClick={() => { setLang('en'); setStep('lobby'); }} style={{ padding: '20px 40px', background: '#222', color: 'white', border: '1px solid #FF0000', borderRadius: '10px' }}>English</button>
          <button onClick={() => { setLang('hi'); setStep('lobby'); }} style={{ padding: '20px 40px', background: '#222', color: 'white', border: '1px solid #FF0000', borderRadius: '10px' }}>हिन्दी</button>
          <button onClick={() => { setLang('pa'); setStep('lobby'); }} style={{ padding: '20px 40px', background: '#222', color: 'white', border: '1px solid #FF0000', borderRadius: '10px' }}>ਪੰਜਾਬੀ</button>
        </div>
      </div>
    );
  }

  // --- 3. MAIN LOBBY ---
  const content = {
    en: { songs: "All Songs", ai: "AI Tools", live: "Live Stream", sub: "Plans", settings: "Settings" },
    hi: { songs: "सभी गाने", ai: "एआई टूल्स", live: "लाइव स्ट्रीम", sub: "योजनाएं", settings: "सेटिंग्स" },
    pa: { songs: "ਸਾਰੇ ਗੀਤ", ai: "ਏਆਈ ਟੂਲਸ", live: "ਲਾਈਵ ਸਟ੍ਰੀਮ", sub: "ਪਲਾਨ", settings: "ਸੈਟਿੰਗਾਂ" }
  };

  return (
    <div style={{ background: '#000', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Top Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', background: '#111', borderBottom: '2px solid #FF0000' }}>
        <h2 style={{ color: '#FF0000', margin: 0 }}>STAGE.AI</h2>
        <div style={{ display: 'flex', gap: '25px', fontWeight: 'bold', cursor: 'pointer' }}>
          <span onClick={() => alert('Opening Music Library...')}>{content[lang].songs}</span>
          <span onClick={() => alert('AI Studio Loading...')}>{content[lang].ai}</span>
          <span onClick={() => alert('Going Live...')}>{content[lang].live}</span>
          <span onClick={() => alert('Plans...')}>{content[lang].sub}</span>
          <span onClick={() => alert('Settings Menu...')}>{content[lang].settings}</span>
        </div>
      </nav>

      {/* Main Content Area */}
      <div style={{ padding: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>{content[lang].songs}</h1>
          <input type="text" placeholder="Search Artist or Song..." style={{ padding: '10px 20px', borderRadius: '20px', width: '300px', background: '#222', border: '1px solid #444', color: 'white' }} />
        </div>

        {/* Artist & Song List */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px', marginTop: '30px' }}>
          {[
            { name: "Sidhu Moose Wala", img: "https://via.placeholder.com/150/red/white?text=Sidhu" },
            { name: "Diljit Dosanjh", img: "https://via.placeholder.com/150/blue/white?text=Diljit" },
            { name: "Karan Aujla", img: "https://via.placeholder.com/150/green/white?text=Karan" },
            { name: "Shubh", img: "https://via.placeholder.com/150/yellow/black?text=Shubh" }
          ].map(artist => (
            <div key={artist.name} style={{ background: '#111', padding: '15px', borderRadius: '15px', textAlign: 'center', border: '1px solid #333' }}>
              <img src={artist.img} style={{ borderRadius: '50%', width: '120px', marginBottom: '10px' }} alt={artist.name} />
              <h4>{artist.name}</h4>
              <button style={{ background: '#FF0000', border: 'none', color: 'white', padding: '5px 15px', borderRadius: '20px' }}>Play All</button>
            </div>
          ))}
        </div>

        {/* Live Stream & Tipping Section */}
        <div style={{ marginTop: '50px', background: 'linear-gradient(to right, #1a0000, #000)', padding: '30px', borderRadius: '20px', border: '1px solid #FF0000' }}>
          <h3>🔴 {content[lang].live} - User is Streaming</h3>
          <div style={{ width: '100%', height: '300px', background: '#333', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
            [Live Video Camera View]
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => alert('Tipped ₹10!')} style={{ background: '#D4AF37', color: '#000', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold' }}>Tip ₹10</button>
            <button onClick={() => alert('Tipped ₹50!')} style={{ background: '#D4AF37', color: '#000', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold' }}>Tip ₹50</button>
            <button onClick={() => alert('Tipped ₹100!') } style={{ background: '#D4AF37', color: '#000', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold' }}>Tip ₹100</button>
          </div>
        </div>
      </div>

      {/* Settings Preview Overlay (Hidden by default, triggered by Nav) */}
      <footer style={{ textAlign: 'center', padding: '20px', color: '#444', fontSize: '12px' }}>
        Stage.ai Premium Music & AI Platform | <span onClick={() => setStep('login')} style={{ cursor: 'pointer', color: '#FF0000' }}>Logout</span>
      </footer>
    </div>
  );
}

export default App;
