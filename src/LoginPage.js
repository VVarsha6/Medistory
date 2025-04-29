import React from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';
import './App.js';


  
  function LoginPage({ onLogin }) {
    const navigate = useNavigate();
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.title}>Welcome to Medistory</h1>
          <p style={styles.subtitle}>Sign in to get started</p>
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button onClick={()=>navigate('/Landing')} style={styles.primaryButton}>Login</button>
        </div>
      </div>
    );
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
    card: {
      backgroundColor: '#f9f9f9',
      padding: '3rem',
      borderRadius: '16px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
      textAlign: 'center',
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
    input: {
      width: '100%',
      padding: '0.75rem',
      margin: '0.5rem 0',
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
  };
  export default LoginPage;
