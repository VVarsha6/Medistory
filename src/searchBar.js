import { Search } from '@chatscope/chat-ui-kit-react';
import React, { useState } from 'react';
import './App.css';

const patients = [
  { name: "John Doe", id: "1174" },
  { name: "Michelle Wilkins", id: "2745" },
  { name: "Thomas Reacher", id: "27886" },
];

function SearchBar({ onPatientInfo, onBack }) {
  const [value, setValue] = useState("");

  const getPatient = () => {
    if (!value.trim()) return [];
    const lowerValue = value.toLowerCase();
    return patients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(lowerValue) ||
        patient.id.includes(lowerValue)
    );
  };

  const matches = getPatient();

  return (
<div style={styles.page}>
  <div style={styles.navbar}>
    <button onClick={onBack} style={styles.backButton}>←</button>
    <h2 style={styles.navTitle}>Medistory</h2>
  </div>

  <div style={styles.container}>
    <h1 style={styles.heading}>Find Patient</h1>

    <div style={styles.searchWrapper}>
    <Search
  placeholder="Search by name or ID"
  value={value}
  onChange={(v) => setValue(v)}
  style={{ width: '100%', maxWidth: '900px' }} // adjust maxWidth as needed
/>


      {matches.length === 1 && (
        <button
          onClick={() => onPatientInfo(matches[0])}
          style={styles.chatButton}
        >
          View Patient Info
        </button>
      )}
    </div>
  </div>
</div>

  );
}

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
      backButton: {
        position: 'absolute',
        left: '1rem',
        backgroundColor: 'transparent',
        border: 'none',
        color: '#3d4dd4',
        fontSize: '1.2rem',
        cursor: 'pointer',
      },
      navTitle: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        margin: 0,
        fontSize: '1.5rem',
        fontWeight: '600',
      },
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        paddingTop: '3rem',
        paddingLeft: '1rem',
        paddingRight: '1rem', // Helps responsiveness
        boxSizing: 'border-box',
      },
      
      
      heading: {
        fontSize: '28px',
        marginBottom: '20px',
      },
      
      searchWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem', // space between search and button
        width: '100%',
        maxWidth: '900px',
      },
      
      chatButton: {
        padding: '0.75rem 1.5rem',
        backgroundColor: '#3d4dd4',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '1rem',
      },
      
};

export default SearchBar;
