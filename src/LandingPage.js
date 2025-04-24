import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import React from 'react';
import './App.css';

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
  description: {
    maxWidth: '600px',
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '1.1rem',
    color: '#555',
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
};

function LandingPage({ onStart, onUpload }) {
  return (
    <div style={styles.page}>
      <div style={styles.waves}></div>
      <h1 style={styles.title}>Medistory</h1>
      <p style={styles.description}>
        Your AI medical transcription companion. Upload audio or start chatting!
      </p>
      <div style={styles.buttonGroup}>
        <button onClick={onUpload} style={styles.outlineButton}>Upload Audio</button>
        <button onClick={onStart} style={styles.primaryButton}>Chat</button>
      </div>
    </div>
  );
}

export default LandingPage;
