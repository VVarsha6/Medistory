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
        <h1 style={styles.heading}>Search Patient</h1>
        <Search
          placeholder="Find patient"
          value={value}
          onChange={(v) => setValue(v)}
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
  );
}

const styles = {
  page: {
    height: '100vh',
    width: '150vh' ,
    background: '#f9fbfc',
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
  },
  backButton: {
    background: 'transparent',
    color: 'white',
    fontSize: '20px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px',
  },
  navTitle: {
    margin: 0,
  },
  container: {
    marginTop: '40px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  chatButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default SearchBar;
