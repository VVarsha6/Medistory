
  import React from 'react';
import './App.css';
import './App.js';
  
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
  const styles = {
    page: {
      height: '100vh',
      width: '150vh',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      position: 'relative',
    },
    card: {
      backgroundColor: 'white',
      padding: '7rem',
      borderRadius: '16px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
      textAlign: 'center',
    },
    title: {
      fontSize: '2.5rem',
      font: 'Roboto' ,
      fontWeight: 'bold',
      marginBottom: '1rem',
      textAlign: 'center',
      color: 'black'
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
      backgroundColor: '#6ea8d7',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
  };
  export default LoginPage;
