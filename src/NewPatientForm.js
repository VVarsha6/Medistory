import React, { useState } from 'react';

const NewPatientForm = () => {
    
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    birthday: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("New Patient Created!");
  };

   const handleBack = () => {
    if (onBack) onBack();  // 3. Use the passed prop
  };

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
      maxWidth: '400px',
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
      fontSize: '0.8rem',
      borderRadius: '8px',
      border: '1px solid #ddd',
    },
    primaryButton: {
      padding: '0.85rem 1.5rem',
      backgroundColor: '#3d4dd4',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
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
  };

  return (
    
    <div style={styles.page}>
   <div style={styles.navbar}>
  <button onClick={handleBack} style={styles.backButton}>← </button>
  <h2 style={styles.navTitle}> Medistory</h2>
</div>

 

      <div style={styles.card}>
    
        <h2 style={styles.subtitle}>New Patient Form</h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
          />
           <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
         
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="date"
            name="birthday"
            placeholder="Birthday"
            value={formData.birthday}
            onChange={handleChange}
            style={styles.input}
          />
          <button type="submit" style={styles.primaryButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NewPatientForm;
