import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import React, { useState } from 'react';

const styles = {
  navbar: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0.5rem 0.5rem',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
    height: '2rem',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  navTitle: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    fontSize: '1.5rem',
    fontColor: '#6ea8d7',
    fontWeight: '600',
  },
  backButton: {
    position: 'absolute',
    left: '1rem',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#6ea8d7',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
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
    padding: '10px 20px',
    backgroundColor: '#6ea8d7',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1.2rem',
  },
  backButton: {
    position: 'absolute',
    left: '1rem',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#6ea8d7',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
  spinner: {
    marginTop: '1rem',
    width: '36px',
    height: '36px',
    border: '4px solid #ccc',
    borderTop: '4px solid #6ea8d7',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }
};

function UploadScreen({ onBack, onUploadComplete }) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploaded(false); // Reset if a new file is selected
  };

  const handleUpload = () => {
    if (!file) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUploaded(true);
    }, 3000); // Simulated upload delay
  };

  return (
    <div style={styles.page}>
        <div style={styles.navbar}>
   <button onClick={onBack} style={styles.backButton}>← </button>

  <h2 style={styles.navTitle}> Medistory</h2>
</div>

        <h2 style={styles.title}>Upload File</h2>
        <input type="file" onChange={handleFileChange} style={styles.input} />
        <button onClick={handleUpload} style={styles.primaryButton} disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
        {loading && <div style={styles.spinner}></div>}
        {uploaded && (
  <button onClick={onUploadComplete} style={{ ...styles.primaryButton, marginTop: '2rem' }}>
    Go to Chat
  </button>
)}

      </div>
   
  );
}

export default UploadScreen;
