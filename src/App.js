import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import React, { useState } from 'react';

import './App.css';
import ChatScreen from './ChatScreen';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import NewPatientForm from './NewPatientForm';
import UploadScreen from './UploadScreen';
import SearchBar from './searchBar'; // Make sure this is imported
import PatientInfoScreen from './PatientInfoScreen';


function App() {
  const [screen, setScreen] = useState('login');
  const [selectedPatient, setSelectedPatient] = useState(null);


  const handleCreatePatient = () => {
    setScreen('new-patient');
  };

  const handleSearchPatient = () => {
    setScreen('search');
  };
  const handlePatientInfo = (patient) => {
    setSelectedPatient(patient);
    setScreen('patient-info');
  };

  if (screen === 'login') {
    return <LoginPage onLogin={() => setScreen('landing')} />;
  }

  if (screen === 'landing') {
    return (
      <LandingPage
        onStart={handleSearchPatient}
        onCreatePatient={handleCreatePatient}
      />
    );
  }

  if (screen === 'search') {
    return <SearchBar 
    onPatientInfo={handlePatientInfo}
    onBack={() => setScreen('landing')} />;
  }

  if (screen === 'upload') {
    return (
      <UploadScreen
        onBack={() => setScreen('landing')}
        onUploadComplete={() => setScreen('chat')}
      />
    );
  }

  if (screen === 'new-patient') {
    return <NewPatientForm onBack={() => setScreen('landing')} />;
  }

  if (screen === 'patient-info') {
    return (
      <PatientInfoScreen
        patient={selectedPatient}
        onUpload={() => setScreen('upload')}
        onGoToChat={() => setScreen('chat')}
      />
    );
  }
  

  return <ChatScreen onBack={() => setScreen('landing')} />;
}

export default App;
