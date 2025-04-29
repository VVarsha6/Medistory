import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
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
  card: {
    backgroundColor: '#f9f9f9',
    padding: '3rem',
    borderRadius: '16px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '500px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    margin: '1rem 0',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
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
    width: '24px',
    height: '24px',
    border: '4px solid #ccc',
    borderTop: '4px solid #3d4dd4',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }
};

function UploadScreen({ onBack, onUploadComplete }) {
  const navigate=useNavigate();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onUploadComplete();
    }, 3000); // Simulated upload delay
  };

  return (
    <div style={styles.page}>
      <button onClick={()=>navigate('/Landing')} style={styles.backButton}>← Back</button>
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

export default UploadScreen;
