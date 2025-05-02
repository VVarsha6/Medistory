import {
  ChatContainer,
  Message,
  MessageInput,
  MessageList,
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import React, { useState } from 'react';
import './App.css';
  
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
    navTitle: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      margin: 0,
      fontSize: '1.5rem',
      fontColor: '#6ea8d7',
      fontWeight: '600',
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
  };
  
  function ChatScreen({ onBack }) {
    const [messages, setMessages] = useState([
      { message: 'Medical SOAP Notes', sender: 'bot' },
      { message: 'How can I help you today?', sender: 'bot' },
    ]);
  
    const handleSendMessage = (text) => {
      if (!text.trim()) return;
      setMessages(prev => [...prev, { message: text, sender: 'user' }]);
    };
  
    return (

      <div style={{ height: '105vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <div style={styles.navbar}>
   <button onClick={onBack} style={styles.backButton}>← </button>

  <h2 style={styles.navTitle}> Medistory</h2>
</div>
        <div style={{ height: '600px', width: '750px', marginTop: '3rem' }}>
          <ChatContainer>
            <MessageList>
              {messages.map((msg, index) => (
                <Message
                  key={index}
                  model={{
                    message: msg.message,
                    sentTime: 'just now',
                    sender: msg.sender === 'bot' ? 'ChatBot' : 'user',
                    direction: msg.sender === 'bot' ? 'incoming' : 'outgoing',
                  }}
                />
              ))}
            </MessageList>
            <MessageInput onSend={handleSendMessage} placeholder="Type your message..." />
          </ChatContainer>
        </div>
      </div>
    );
  }
  
  export default ChatScreen;
  