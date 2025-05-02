import React, { useState } from 'react';
const NewPatientForm = ({ onBack }) => {

    
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
    alert("New Patient with 11875 Created!");
  };


  const handleBack = () => {
    if (onBack) onBack();
  };
  

const  styles = {
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
        display: 'flex',
        font: 'Roboto',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#222222',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroudImage: 'url("/Users/soujanya/Medistory/Medistory/public/bg.jpg")',
        position: 'relative',
      },
    card: {
      backgroundColor: '#f9f9f9',
      padding: '4rem',
      borderRadius: '16px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '350px',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#6ea8d7',
      marginBottom: '1.5rem',
    },
    input: {
      width: '100%',
      padding: '0.45rem',
      fontSize: '0.9rem',
      borderRadius: '8px',
      border: '1px solid #ddd',
      boxSizing: 'border-box',
    },
    
    primaryButton: {
      width: '100%',
      padding: '0.5rem 0.75rem',
      backgroundColor: '#6ea8d7',
      fontWeight: '700',
      color: '#fff',
      font: 'Roboto',
      border: '1px solid #6ea8d7', 
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1.2rem',
      boxSizing: 'border-box',
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

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
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
    
          <button type="submit" style={styles.primaryButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NewPatientForm;
