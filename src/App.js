import './App.css';
import { useState } from 'react';
import ChatInt from './components/ChatInterface';
import EmptyState from './assets/emptyState2.png';
import Profile from './assets/ezgikorkmaz.jpg';

function App() {
  const [userMessages, setUserMessages] = useState([]);
  const [assistantMessages, setAssistantMessages] = useState([]);

  const sendChatMessageToServer = (message) => {
    fetch('https://index.network/api/chat_stream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [message, ...userMessages],
        id: 'random-b56998d5',
        indexes: [
          'kjzl6kcym7w8y9obp8tq6cqa5rgkkcyyohtxj83p8m1zr0m7fyjrwfiav4xi333',
        ],
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((responseData) => {
        const responseMessage = {
          role: 'assistant',
          content: responseData,
        };
        setUserMessages([...userMessages, message, responseMessage]);
        setAssistantMessages([...assistantMessages, responseMessage]);
      })
      .catch((error) => {
        console.error('Error sending chat message:', error);
      });
  };

  const resetChat = () => {
    setUserMessages([]);
  };

  return (
    <div className="App">
        <ChatInt
          primaryColor="#fff"
          onSubmit={sendChatMessageToServer}
          messages={userMessages}
          emptyState={EmptyState}
          profilePic={Profile}
          resetChat={resetChat}
        />
    </div>
  );
}

export default App;
