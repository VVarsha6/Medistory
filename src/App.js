import { ChatContainer, Message, MessageInput, MessageList } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { message: 'Hello! How can I help you today?', sender: 'bot' },
  ]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { message, sender: 'user' }]);
  };

  return (
    <div style={{ height: '500px', width: '400px' }}>
      <ChatContainer>
        <MessageList>
          {messages.map((msg, index) => (
            <Message key={index} model={{ message: msg.message, sender: msg.sender }} />
          ))}
        </MessageList>
        <MessageInput onSend={handleSendMessage} />
      </ChatContainer>
    </div>
  );
}

export default App;
