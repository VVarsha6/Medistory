import React from 'react';

function LandingPage({ onStart, onCreatePatient }) {
  return (
    <div style={styles.page}>
      <div style={styles.waves}></div>
      <h1 style={styles.title}>Medistory</h1>
      <p style={styles.description}>
      Where Every Patient Record Becomes a Clear Medical Story — Powered by AI
      </p>
      <div style={styles.buttonGroup}>
        <button onClick={onCreatePatient} style={styles.outlineButton}>
          Create New Patient
        </button>
        <button onClick={onStart} style={styles.primaryButton}>
          Search Patient
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f0f4f8',
    textAlign: 'center'
  },
  waves: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '200px',
    //background: 'lightblue'
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px'
  },
  description: {
    fontSize: '18px',
    marginBottom: '40px'
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px'
  },
  outlineButton: {
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: '#6ea8d7',
    border: '2px solid #6ea8d7',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
  primaryButton: {
    padding: '10px 20px',
    backgroundColor: '#6ea8d7',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
};

export default LandingPage;
