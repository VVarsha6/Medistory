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
    backButton: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      padding: '0.5rem 1rem',
      backgroundColor: '#eee',
      border: 'none',
      borderRadius: '6px',
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
        <button onClick={onBack} style={styles.backButton}>← Back</button>
        <div style={{ height: '600px', width: '750px', marginTop: '2rem' }}>
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
  