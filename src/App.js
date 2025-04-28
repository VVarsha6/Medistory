import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import React, { useState } from 'react';
import './App.css';
import ChatScreen from './ChatScreen';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import UploadScreen from './UploadScreen';



function App() {
  const [screen, setScreen] = useState('login');

  if (screen === 'login') return <LoginPage onLogin={() => setScreen('landing')} />;
  if (screen === 'landing') return (
    <LandingPage
      onStart={() => setScreen('chat')}
      onUpload={() => setScreen('upload')}
    />
  );
  if (screen === 'upload') return (
    <UploadScreen
      onBack={() => setScreen('landing')}
      onUploadComplete={() => setScreen('chat')}
    />
  );
  return <ChatScreen onBack={() => setScreen('landing')} />;
}



export default App;
