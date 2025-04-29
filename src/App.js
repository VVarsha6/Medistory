import {
  ChatContainer,
  Message,
  MessageInput,
  MessageList,
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Landing from './LandingPage';
import UploadScreen from './UploadScreen';
import LoginPage from './LoginPage';
import ChatScreen from './ChatScreen';
import SearchBar from './SearchBar';

const App = () => {
    return(
      <Router>
          <Routes>
            <Route path='/' element={<LoginPage />}/>
              <Route path="/Landing" element={<Landing />}/>
              <Route path="/ChatScreen" element = {<ChatScreen />}/>
              <Route path="/Upload" element = {<UploadScreen />}/>
              <Route path="/SearchBar" element={<SearchBar />} />
          </Routes>
      </Router>
    )
}
export default App