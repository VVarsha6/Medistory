import React from 'react';

const styles = {
  page: {
    height: '100vh',
    width: '100vw',
    padding: '2rem',
    backgroundColor: '#222222',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#333333',
    padding: '2.5rem',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '500px',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    color: 'white',
  },
  info: {
    fontSize: '1.2rem',
    margin: '0.5rem 0',
    color: 'white'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  uploadBtn: {
    padding: '10px 20px',
    width: '20vw',
    backgroundColor: '#971b55',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  chatBtn: {
    padding: '10px 20px',
    width: '20vw',
    backgroundColor: '#971b55',
    color: 'white',
    border: '2px solid #971b55',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

function PatientInfoScreen({ patient, onUpload, onGoToChat }) {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Patient Information</h2>
        <p style={styles.info}><strong>Name:</strong> {patient.name}</p>
        <p style={styles.info}><strong>ID:</strong> {patient.id}</p>

        <div style={styles.buttonGroup}>
          <button
            style={{ ...styles.button, ...styles.uploadBtn }}
            onClick={onUpload}
          >
            Upload Reports
          </button>
          <button
            style={{ ...styles.button, ...styles.chatBtn }}
            onClick={onGoToChat}
          >
            Start Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientInfoScreen;
