import React from 'react';
import AIEditor from './AIeditor'; // AI file ko connect kiya

function App() {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#121212', minHeight: '100vh', color: 'white', padding: '20px' }}>
      <h1>Stage-ai: Music & Live Stream</h1>
      <p>Welcome to the future of music streaming!</p>
      <hr style={{ margin: '30px 0', borderColor: '#333' }} />
      
      {/* AI Section yahan dikhega */}
      <AIEditor /> 
      
      <div style={{ marginTop: '50px' }}>
        <h3>Upcoming Streams</h3>
        <p>No live streams currently. Start your first AI-powered stream!</p>
      </div>
    </div>
  );
}

export default App;
