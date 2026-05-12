import React, { useState, useEffect } from 'react';
import { 
  Radio, Music, Search, Users, Send, 
  Video, X, Sparkles, ShieldCheck, Globe, 
  Zap, Brain, Bell, Coins 
} from 'lucide-react';

// --- STAGE AI CORE APPLICATION ---
export default function App() {
  // 1. GLOBAL STATE (Language & Money)
  const [lang, setLang] = useState('en');
  const [currency, setCurrency] = useState({ code: 'USD', symbol: '$' });
  
  // 2. STAGE STATE (Streaming & UI)
  const [isLive, setIsLive] = useState(false);
  const [showSetup, setShowSetup] = useState(false);
  const [activeTab, setActiveTab] = useState('live');
  
  // 3. AI & CHAT STATE
  const [chatMessage, setChatMessage] = useState("");
  const [isAiModActive, setIsAiModActive] = useState(true);
  const [chatLog, setChatLog] = useState([
    { id: 1, user: "System", text: "Welcome to the Stage. AI Moderation is ON.", time: "Now", isAiFlagged: false }
  ]);

  // Dictionary for Translations
  const t = {
    en: { live: "Live Stages", goLive: "Go Live", support: "Support Artist", placeholder: "Say something...", setup: "Setup Stage" },
    hi: { live: "लाइव स्टेज", goLive: "लाइव जाएं", support: "कलाकार की मदद करें", placeholder: "कुछ कहें...", setup: "स्टेज सेट करें" },
    es: { live: "Escenarios", goLive: "Transmitir", support: "Apoyar", placeholder: "Di algo...", setup: "Configurar" }
  };

  // Detect Country for Local Currency
  useEffect(() => {
    const locale = navigator.language;
    if (locale.includes('IN')) setCurrency({ code: 'INR', symbol: '₹' });
    else if (locale.includes('GB')) setCurrency({ code: 'GBP', symbol: '£' });
  }, []);

  // AI Message Processing (Simulation)
  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // AI Guard: Filter "toxic" words
    const toxicWords = ["bad", "hate", "spam"];
    const isToxic = toxicWords.some(w => chatMessage.toLowerCase().includes(w));
    
    const finalMsg = (isAiModActive && isToxic) 
      ? "[Message removed by Stage AI]" 
      : chatMessage;

    setChatLog([...chatLog, { 
      id: Date.now(), 
      user: "Me", 
      text: finalMsg, 
      time: "Now", 
      isAiFlagged: isToxic && isAiModActive 
    }]);
    setChatMessage("");
  };

  return (
    <div className="flex h-screen bg-[#09090b] text-zinc-100 font-sans overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#121214] border-r border-zinc-800/50 flex flex-col p-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center font-black italic text-black">S</div>
          <h1 className="text-xl font-black tracking-tighter">STAGE <span className="text-[10px] text-orange-500 ml-1">AI</span></h1>
        </div>

        <nav className="space-y-1 flex-1">
          <button className="flex items-center gap-4 w-full p-4 rounded-2xl bg-orange-600 text-white font-bold text-sm">
            <Radio size={18}/> {t[lang].live}
          </button>
          <button className="flex items-center gap-4 w-full p-4 rounded-2xl text-zinc-500 hover:bg-zinc-800/40 font-bold text-sm">
            <Music size={18}/> Archives
          </button>
        </nav>

        {/* AI LAB PANEL */}
        <div className="bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800 space-y-4 mb-4">
          <p className="text-[10px] font-bold text-orange-500 uppercase flex items-center gap-2"><Sparkles size={12}/> AI Settings</p>
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-400">AI Moderator</span>
            <input type="checkbox" checked={isAiModActive} onChange={() => setIsAiModActive(!isAiModActive)} className="accent-orange-500" />
          </div>
          <select onChange={(e) => setLang(e.target.value)} className="bg-transparent text-xs text-orange-500 outline-none w-full border-t border-zinc-800 pt-2 mt-2">
            <option value="en">Language: EN</option>
            <option value="hi">Language: HI</option>
            <option value="es">Language: ES</option>
          </select>
        </div>

        <button onClick={() => setShowSetup(true)} className="w-full py-3 bg-orange-600 rounded-xl font-bold flex items-center justify-center gap-2">
          <Video size={18} /> {t[lang].goLive}
        </button>
      </aside>

      {/* MAIN VIEW */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-20 border-b border-zinc-800/50 flex items-center justify-between px-8 bg-black/20 backdrop-blur-md">
          <div className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2 w-96">
            <Search size={16} className="text-zinc-600" />
            <input className="bg-transparent text-sm outline-none w-full" placeholder="Search music stages..." />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] text-orange-500 font-bold tracking-widest uppercase">AI Vibe</p>
              <p className="text-xs font-medium">Deep House / Energetic</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700"></div>
          </div>
        </header>

        <div className="flex-1 flex p-8 gap-8 overflow-hidden">
          {/* VIDEO PLAYER AREA */}
          <div className="flex-[2] flex flex-col gap-6 overflow-hidden">
            <div className="relative aspect-video bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200" className="w-full h-full object-cover opacity-50" alt="Stage" />
              <div className="absolute top-8 left-8 flex gap-2">
                <span className="bg-red-600 text-[10px] font-black px-3 py-1 rounded-full">LIVE</span>
                <span className="bg-black/40 backdrop-blur-md text-[10px] px-3 py-1 rounded-full flex items-center gap-1"><Users size={12}/> 1.2K</span>
              </div>
              <div className="absolute bottom-8 left-8">
                <h2 className="text-4xl font-black italic tracking-tighter uppercase">Neon Festival 2026</h2>
                <p className="text-orange-500 font-bold text-sm tracking-widest">DJ K-MIST LIVE</p>
              </div>
            </div>

            {/* CHAT INTERFACE */}
            <div className="flex-1 bg-[#121214] rounded-[2.5rem] border border-zinc-800/50 flex flex-col overflow-hidden">
              <div className="p-6 border-b border-zinc-800/50 bg-white/[0.02] flex justify-between">
                <h3 className="font-bold text-xs uppercase tracking-widest flex items-center gap-2"><Brain size={14}/> Live AI Chat</h3>
                <span className="text-[10px] text-zinc-500 uppercase">{currency.code} Region Detected</span>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {chatLog.map(m => (
                  <div key={m.id} className={`flex gap-3 ${m.isAiFlagged ? 'opacity-40 italic' : ''}`}>
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-[10px] font-bold">{m.user[0]}</div>
                    <div>
                      <p className="text-[10px] font-bold text-zinc-600 uppercase">{m.user}</p>
                      <p className="text-sm text-zinc-300">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendChat} className="p-4 bg-black/40 flex gap-2">
                <input 
                  value={chatMessage} 
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder={t[lang].placeholder} 
                  className="flex-1 bg-zinc-900 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-orange-600" 
                />
                <button type="submit" className="bg-orange-600 p-3 rounded-xl hover:scale-105 transition-all"><Send size={18}/></button>
              </form>
            </div>
          </div>

          {/* SUPPORT / MONEY PANEL */}
          <div className="flex-1 space-y-6">
            <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
              <Zap className="absolute -right-4 -top-4 w-24 h-24 text-white/10" />
              <h4 className="text-2xl font-black mb-1 italic uppercase">{t[lang].support}</h4>
              <p className="text-orange-200 text-[10px] font-bold mb-6 tracking-widest uppercase">100% Artist Direct</p>
              
              <div className="space-y-3">
                <SupportBtn amount={`${currency.symbol}10`} label="Artist Badge" />
                <SupportBtn amount={`${currency.symbol}50`} label="VIP Access" active />
                <SupportBtn amount="Custom" label="Direct Tip" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* SETUP MODAL */}
      {showSetup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl">
          <div className="bg-[#121214] w-[400px] rounded-[3rem] border border-zinc-800 p-10 relative">
            <X onClick={() => setShowSetup(false)} className="absolute top-6 right-6 text-zinc-500 cursor-pointer" />
            <h2 className="text-3xl font-black tracking-tighter italic mb-6 uppercase">{t[lang].setup}</h2>
            <div className="space-y-4">
              <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                <p className="text-[10px] font-bold text-zinc-500 uppercase mb-2">Stage Name</p>
                <input className="bg-transparent w-full outline-none font-bold text-orange-500" placeholder="Midnight Beats..." />
              </div>
              <button onClick={() => { setIsLive(true); setShowSetup(false); }} className="w-full bg-orange-600 py-5 rounded-2xl font-black text-xl hover:shadow-[0_0_40px_rgba(234,88,12,0.3)] transition-all uppercase">
                Launch Stage
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )import React, { useState, useEffect } from 'react';
import { 
  Radio, Music, Search, Users, Send, 
  Video, X, Sparkles, ShieldCheck, Globe, 
  Zap, Brain, Bell, Coins 
} from 'lucide-react';

// --- STAGE AI CORE APPLICATION ---
export default function App() {
  // 1. GLOBAL STATE (Language & Money)
  const [lang, setLang] = useState('en');
  const [currency, setCurrency] = useState({ code: 'USD', symbol: '$' });
  
  // 2. STAGE STATE (Streaming & UI)
  const [isLive, setIsLive] = useState(false);
  const [showSetup, setShowSetup] = useState(false);
  const [activeTab, setActiveTab] = useState('live');
  
  // 3. AI & CHAT STATE
  const [chatMessage, setChatMessage] = useState("");
  const [isAiModActive, setIsAiModActive] = useState(true);
  const [chatLog, setChatLog] = useState([
    { id: 1, user: "System", text: "Welcome to the Stage. AI Moderation is ON.", time: "Now", isAiFlagged: false }
  ]);

  // Dictionary for Translations
  const t = {
    en: { live: "Live Stages", goLive: "Go Live", support: "Support Artist", placeholder: "Say something...", setup: "Setup Stage" },
    hi: { live: "लाइव स्टेज", goLive: "लाइव जाएं", support: "कलाकार की मदद करें", placeholder: "कुछ कहें...", setup: "स्टेज सेट करें" },
    es: { live: "Escenarios", goLive: "Transmitir", support: "Apoyar", placeholder: "Di algo...", setup: "Configurar" }
  };

  // Detect Country for Local Currency
  useEffect(() => {
    const locale = navigator.language;
    if (locale.includes('IN')) setCurrency({ code: 'INR', symbol: '₹' });
    else if (locale.includes('GB')) setCurrency({ code: 'GBP', symbol: '£' });
  }, []);

  // AI Message Processing (Simulation)
  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // AI Guard: Filter "toxic" words
    const toxicWords = ["bad", "hate", "spam"];
    const isToxic = toxicWords.some(w => chatMessage.toLowerCase().includes(w));
    
    const finalMsg = (isAiModActive && isToxic) 
      ? "[Message removed by Stage AI]" 
      : chatMessage;

    setChatLog([...chatLog, { 
      id: Date.now(), 
      user: "Me", 
      text: finalMsg, 
      time: "Now", 
      isAiFlagged: isToxic && isAiModActive 
    }]);
    setChatMessage("");
  };

  return (
    <div className="flex h-screen bg-[#09090b] text-zinc-100 font-sans overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#121214] border-r border-zinc-800/50 flex flex-col p-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center font-black italic text-black">S</div>
          <h1 className="text-xl font-black tracking-tighter">STAGE <span className="text-[10px] text-orange-500 ml-1">AI</span></h1>
        </div>

        <nav className="space-y-1 flex-1">
          <button className="flex items-center gap-4 w-full p-4 rounded-2xl bg-orange-600 text-white font-bold text-sm">
            <Radio size={18}/> {t[lang].live}
          </button>
          <button className="flex items-center gap-4 w-full p-4 rounded-2xl text-zinc-500 hover:bg-zinc-800/40 font-bold text-sm">
            <Music size={18}/> Archives
          </button>
        </nav>

        {/* AI LAB PANEL */}
        <div className="bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800 space-y-4 mb-4">
          <p className="text-[10px] font-bold text-orange-500 uppercase flex items-center gap-2"><Sparkles size={12}/> AI Settings</p>
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-400">AI Moderator</span>
            <input type="checkbox" checked={isAiModActive} onChange={() => setIsAiModActive(!isAiModActive)} className="accent-orange-500" />
          </div>
          <select onChange={(e) => setLang(e.target.value)} className="bg-transparent text-xs text-orange-500 outline-none w-full border-t border-zinc-800 pt-2 mt-2">
            <option value="en">Language: EN</option>
            <option value="hi">Language: HI</option>
            <option value="es">Language: ES</option>
          </select>
        </div>

        <button onClick={() => setShowSetup(true)} className="w-full py-3 bg-orange-600 rounded-xl font-bold flex items-center justify-center gap-2">
          <Video size={18} /> {t[lang].goLive}
        </button>
      </aside>

      {/* MAIN VIEW */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-20 border-b border-zinc-800/50 flex items-center justify-between px-8 bg-black/20 backdrop-blur-md">
          <div className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2 w-96">
            <Search size={16} className="text-zinc-600" />
            <input className="bg-transparent text-sm outline-none w-full" placeholder="Search music stages..." />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] text-orange-500 font-bold tracking-widest uppercase">AI Vibe</p>
              <p className="text-xs font-medium">Deep House / Energetic</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700"></div>
          </div>
        </header>

        <div className="flex-1 flex p-8 gap-8 overflow-hidden">
          {/* VIDEO PLAYER AREA */}
          <div className="flex-[2] flex flex-col gap-6 overflow-hidden">
            <div className="relative aspect-video bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200" className="w-full h-full object-cover opacity-50" alt="Stage" />
              <div className="absolute top-8 left-8 flex gap-2">
                <span className="bg-red-600 text-[10px] font-black px-3 py-1 rounded-full">LIVE</span>
                <span className="bg-black/40 backdrop-blur-md text-[10px] px-3 py-1 rounded-full flex items-center gap-1"><Users size={12}/> 1.2K</span>
              </div>
              <div className="absolute bottom-8 left-8">
                <h2 className="text-4xl font-black italic tracking-tighter uppercase">Neon Festival 2026</h2>
                <p className="text-orange-500 font-bold text-sm tracking-widest">DJ K-MIST LIVE</p>
              </div>
            </div>

            {/* CHAT INTERFACE */}
            <div className="flex-1 bg-[#121214] rounded-[2.5rem] border border-zinc-800/50 flex flex-col overflow-hidden">
              <div className="p-6 border-b border-zinc-800/50 bg-white/[0.02] flex justify-between">
                <h3 className="font-bold text-xs uppercase tracking-widest flex items-center gap-2"><Brain size={14}/> Live AI Chat</h3>
                <span className="text-[10px] text-zinc-500 uppercase">{currency.code} Region Detected</span>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {chatLog.map(m => (
                  <div key={m.id} className={`flex gap-3 ${m.isAiFlagged ? 'opacity-40 italic' : ''}`}>
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-[10px] font-bold">{m.user[0]}</div>
                    <div>
                      <p className="text-[10px] font-bold text-zinc-600 uppercase">{m.user}</p>
                      <p className="text-sm text-zinc-300">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendChat} className="p-4 bg-black/40 flex gap-2">
                <input 
                  value={chatMessage} 
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder={t[lang].placeholder} 
                  className="flex-1 bg-zinc-900 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-orange-600" 
                />
                <button type="submit" className="bg-orange-600 p-3 rounded-xl hover:scale-105 transition-all"><Send size={18}/></button>
              </form>
            </div>
          </div>

          {/* SUPPORT / MONEY PANEL */}
          <div className="flex-1 space-y-6">
            <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
              <Zap className="absolute -right-4 -top-4 w-24 h-24 text-white/10" />
              <h4 className="text-2xl font-black mb-1 italic uppercase">{t[lang].support}</h4>
              <p className="text-orange-200 text-[10px] font-bold mb-6 tracking-widest uppercase">100% Artist Direct</p>
              
              <div className="space-y-3">
                <SupportBtn amount={`${currency.symbol}10`} label="Artist Badge" />
                <SupportBtn amount={`${currency.symbol}50`} label="VIP Access" active />
                <SupportBtn amount="Custom" label="Direct Tip" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* SETUP MODAL */}
      {showSetup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl">
          <div className="bg-[#121214] w-[400px] rounded-[3rem] border border-zinc-800 p-10 relative">
            <X onClick={() => setShowSetup(false)} className="absolute top-6 right-6 text-zinc-500 cursor-pointer" />
            <h2 className="text-3xl font-black tracking-tighter italic mb-6 uppercase">{t[lang].setup}</h2>
            <div className="space-y-4">
              <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                <p className="text-[10px] font-bold text-zinc-500 uppercase mb-2">Stage Name</p>
                <input className="bg-transparent w-full outline-none font-bold text-orange-500" placeholder="Midnight Beats..." />
              </div>
              <button onClick={() => { setIsLive(true); setShowSetup(false); }} className="w-full bg-orange-600 py-5 rounded-2xl font-black text-xl hover:shadow-[0_0_40px_rgba(234,88,12,0.3)] transition-all uppercase">
                Launch Stage
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
