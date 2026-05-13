import React, { useState } from 'react';

function App() {
  const [lang, setLang] = useState('en');
  const [showAI, setShowAI] = useState(false);

  const content = {
    en: { welcome: "Welcome to Stage.ai", search: "Search artists, songs...", ai: "AI Studio", plans: "Subscription Plans", login: "Login / Sign Up", tip: "Tip Artist" },
    hi: { welcome: "Stage.ai में आपका स्वागत है", search: "कलाकार, गाने खोजें...", ai: "एआई स्टूडियो", plans: "सब्सक्रिप्शन प्लान", login: "लॉगिन / साइन अप", tip: "टिप दें" },
    pa: { welcome: "Stage.ai ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ", search: "ਕਲਾਕਾਰ, ਗੀਤ ਲੱਭੋ...", ai: "ਏਆਈ ਸਟੂਡੀਓ", plans: "ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਪਲਾਨ", login: "ਲੌਗਇਨ / ਸਾਈਨ ਅੱਪ", tip: "ਟਿਪ ਦਿਓ" }
  };

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* --- PREMIUM NAVBAR --- */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid #222', sticky: 'top' }}>
        <h1 style={{ color: '#FF0000', fontSize: '24px', letterSpacing: '3px' }}>STAGE.AI</h1>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <select onChange={(e) => setLang(e.target.value)} style={{ background: '#111', color: '#fff', border: '1px solid #444', padding: '5px' }}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="pa">Punjabi</option>
          </select>
          <button style={{ background: '#D4AF37', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold' }}>{content[lang].login}</button>
        </div>
      </nav>

      {/* --- HERO & SEARCH --- */}
      <div style={{ textAlign: 'center', padding: '60px 20px', background: 'radial-gradient(circle, #1a0000 0%, #000 100%)' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>{content[lang].welcome}</h2>
        <input type="text" placeholder={content[lang].search} style={{ width: '60%', padding: '15px 25px', borderRadius: '40px', border: '1px solid #FF0000', background: '#111', color: '#fff' }} />
      </div>

      {/* --- SUBSCRIPTION PLANS --- */}
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>{content[lang].plans}</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
          {/* Student Plan */}
          <div style={{ border: '1px solid #333', padding: '30px', borderRadius: '15px', width: '280px', background: '#0a0a0a' }}>
            <h3 style={{ color: '#4285F4' }}>STUDENT</h3>
            <p style={{ fontSize: '24px' }}>₹79 <span style={{ fontSize: '14px' }}>/ 2 Months</span></p>
            <ul style={{ textAlign: 'left', fontSize: '14px', color: '#aaa' }}>
              <li>✔ All Indian & International Songs</li>
              <li>✔ Student ID Required</li>
              <li>✔ No Ads</li>
            </ul>
            <button style={{ width: '100%', padding: '10px', background: '#4285F4', border: 'none', color: '#fff', borderRadius: '5px' }}>Subscribe</button>
          </div>
          {/* Premium Plan */}
          <div style={{ border: '2px solid #D4AF37', padding: '30px', borderRadius: '15px', width: '280px', background: '#0a0a0a', transform: 'scale(1.05)' }}>
            <h3 style={{ color: '#D4AF37' }}>PREMIUM VIP</h3>
            <p style={{ fontSize: '24px' }}>₹999 <span style={{ fontSize: '14px' }}>/ Year</span></p>
            <ul style={{ textAlign: 'left', fontSize: '14px', color: '#aaa' }}>
              <li>✔ AI Image & Script Studio</li>
              <li>✔ Live Stream & Tip Artists</li>
              <li>✔ Ultra HD Audio</li>
            </ul>
            <button style={{ width: '100%', padding: '10px', background: '#D4AF37', border: 'none', color: '#000', borderRadius: '5px', fontWeight: 'bold' }}>Go Pro</button>
          </div>
        </div>
      </div>

      {/* --- AI STUDIO SECTION --- */}
      <div style={{ padding: '60px 40px', background: '#050505' }}>
        <h2 style={{ color: '#FF0000' }}>✨ {content[lang].ai}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
          <div style={{ background: '#111', padding: '20px', borderRadius: '10px' }}>
            <h4>AI Image Generator</h4>
            <input type="text" placeholder="Describe your image..." style={{ width: '100%', padding: '10px', background: '#222', border: 'none', color: '#fff' }} />
            <button style={{ marginTop: '10px', background: '#FF0000', border: 'none', padding: '10px', color: '#fff' }}>Generate Image</button>
          </div>
          <div style={{ background: '#111', padding: '20px', borderRadius: '10px' }}>
            <h4>AI Script/Video Help</h4>
            <textarea placeholder="Write a script for my music video..." style={{ width: '100%', height: '80px', background: '#222', border: 'none', color: '#fff' }}></textarea>
            <button style={{ marginTop: '10px', background: '#FF0000', border: 'none', padding: '10px', color: '#fff' }}>Get AI Script</button>
          </div>
        </div>
      </div>

      {/* --- SOCIAL LOGIN --- */}
      <div style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid #222' }}>
        <p>Or Join with</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
          <button style={{ background: '#db4437', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Google</button>
          <button style={{ background: '#4267B2', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Facebook</button>
          <button style={{ background: '#1DA1F2', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Twitter (X)</button>
        </div>
      </div>

    </div>
  );
}

export default App;
