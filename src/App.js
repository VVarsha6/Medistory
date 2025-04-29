import {
  ChatContainer,
  Message,
  MessageInput,
  MessageList,
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import React, { useState } from 'react';
import './App.css';
import searchBar from './searchBar';



function LoginPage({ onLogin }) {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to Medistory</h1>
        <p style={styles.subtitle}>Sign in to get started</p>
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button onClick={onLogin} style={styles.primaryButton}>Login</button>
      </div>
    </div>
  );
}
/*
 <>
        <nav className="nav">
        <Link to="/" className="site-title">Medistory</Link>
        <ul>
            <li >
                <Link to="/App">Chat Page</Link>
            </li>
            <li>
                <Link to="/NoteGen">Note Generator</Link>
            </li>
        </ul>
    </nav>
    <h1>Welcome, John Doe</h1>
    </>
    <button onClick={onUpload} style={styles.outlineButton}>Upload Audio</button>
        <button onClick={onStart} style={styles.primaryButton}>Chat</button>
*/

function LandingPage({ onStart, onUpload }) {
  return (
    <>
        <nav className="nav">
          <h1>Medistory</h1>
        <ul>
            <li >
            <button onClick={onUpload} className='navButton'>Upload Audio</button>
            </li>
            <li>
            <button onClick={searchBar}>Chat</button>
*/
            </li>
        </ul>
    </nav>
    <h1>Welcome, John Doe</h1>
    </>
  );
}

function UploadScreen({ onBack, onUploadComplete }) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    setLoading(true);
    // Simulate an upload with timeout
    setTimeout(() => {
      setLoading(false);
      onUploadComplete(); // Navigate to chat
    }, 3000); // fake 2 second upload
  };

  return (
    <div style={styles.page}>
      <button onClick={onBack} style={styles.backButton}>← Back</button>
      <div style={styles.card}>
        <h2 style={styles.title}>Upload Audio File</h2>
        <input type="file" accept="audio/*" onChange={handleFileChange} style={styles.input} />
        <button onClick={handleUpload} style={styles.primaryButton} disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
        {loading && <div style={styles.spinner}></div>}
      </div>
    </div>
  );
}

function ChatScreen({ onBack }) {
  const [messages, setMessages] = useState([
    { message: 'Medical SOAP Notes', sender: 'bot' },
    { message: 'How can I help you today?', sender: 'bot' },
  ]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { message: text, sender: 'user' }]);
  };

  return (
    <div style={{ height: '105vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button onClick={onBack} style={styles.backButton}>← Back</button>
      <div style={{ height: '750px', width: '750px', marginTop: '3rem' }}>
        <ChatContainer>
          <MessageList>
            {messages.map((msg, index) => (
              <Message
                key={index}
                model={{
                  message: msg.message,
                  sentTime: 'just now',
                  sender: msg.sender === 'bot' ? 'ChatBot' : 'user',
                  direction: msg.sender === 'bot' ? 'incoming' : 'outgoing',
                }}
              />
            ))}
          </MessageList>
          <MessageInput onSend={handleSendMessage} placeholder="Type your message..." />
        </ChatContainer>
      </div>
    </div>
  );
}

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

const styles = {
  page: {
    height: '100vh',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },
  waves: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '200px',
    background: 'linear-gradient(to right, #f1f1f1 50%, #fff 50%)',
    borderBottomLeftRadius: '50% 20%',
    borderBottomRightRadius: '50% 20%',
    zIndex: -1,
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#777',
    marginBottom: '1.5rem',
  },
  description: {
    maxWidth: '600px',
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '1.1rem',
    color: '#555',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '3rem',
    borderRadius: '16px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    margin: '0.5rem 0',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
  },
  primaryButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#3d4dd4',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  outlineButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#fff',
    color: '#3d4dd4',
    border: '2px solid #3d4dd4',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  backButton: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#eee',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  spinner: {
    marginTop: '1rem',
    width: '30px',
    height: '30px',
    border: '4px solid #ccc',
    borderTop: '4px solid #3d4dd4',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};

export default App;
