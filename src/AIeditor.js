import React, { useState } from 'react';

const AIEditor = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateThumbnail = async () => {
    if (!prompt) return alert("Kuch toh likhiye!");
    setLoading(true);
    
    try {
      // Hum yahan Hugging Face ki Free API use kar rahe hain starting ke liye
      const response = await fetch(
        "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ inputs: prompt }),
        }
      );
      const blob = await response.blob();
      setImageUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.error("AI Error:", error);
      alert("AI ne kaam nahi kiya, baad mein try karein.");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', background: '#1a1a1a', color: 'white', borderRadius: '10px' }}>
      <h2>✨ AI Cover Designer</h2>
      <input 
        type="text" 
        placeholder="Apne gaane ka mood likhein (e.g. Rock concert in space)" 
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: '80%', padding: '10px', borderRadius: '5px' }}
      />
      <button onClick={generateThumbnail} style={{ padding: '10px 20px', marginLeft: '10px', cursor: 'pointer' }}>
        {loading ? 'Bana raha hoon...' : 'Generate Art'}
      </button>
      
      {imageUrl && (
        <div style={{ marginTop: '20px' }}>
          <img src={imageUrl} alt="AI Art" style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }} />
          <p>Ye raha aapka AI se bana cover!</p>
        </div>
      )}
    </div>
  );
};

export default AIEditor;
