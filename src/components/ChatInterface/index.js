import React, { useState, useEffect } from 'react';
import { RefreshCcw } from 'react-feather';
import './style.scss';

const EmbeddableChat = ({ 
  primaryColor, 
  onSubmit, 
  messages,
  emptyState,
  profilePic, 
  resetChat,
}) => {
  const [inputText, setInputText] = useState('');
  const [chatWidth, setChatWidth] = useState('80%');
  const [chatHeight, setChatHeight] = useState('80vh');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = () => {
    closeModal();
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setChatWidth('70%');
        setChatHeight('35vh');
      } else {
        setChatWidth('50%');
        setChatHeight('70vh');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = (e) => {
    if(e.key === 'Enter'){
      if (inputText.trim() !== '') {
      const newMessage = {
          role: 'user',
          content: inputText,
      };
      onSubmit(newMessage);
      setInputText('');
      }
    }
  };

  const chatStyle = {
    width: chatWidth,
    height: chatHeight,
    backgroundColor: primaryColor || '#3498db',
  };

  return (
    <>
    <button onClick={openModal}>Open Chat</button>
    {isModalOpen && (
    <div
        className='popup-overlay'
        onClick={handleOutsideClick}
        >
        <div 
        style={chatStyle} 
        className='chat-popup'
        onClick={(e) => e.stopPropagation()}
        > 
        <div className='chat-header'>
            <button onClick={resetChat}><RefreshCcw size={12} /> Reset</button>
            <img className='user-img' src={profilePic} alt=""/>
        </div>
        <div className={`${messages.length > 0 && 'chat-body'}`}>
            {messages.length > 0 ? messages.map((message, index) => (
                <div key={index} className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}>
                    {message.role === 'user' ? 
                        <img className="user-assistant img" src={profilePic}/> 
                        : 
                        <span className="user-assistant icon">👻</span>
                    }
                    <span className="user-content">{message.content}</span>
                </div>
                )) : (
                <div className='empty-state'>
                    <img src={emptyState} alt=""/>
                    <span>Your responses will align with all Ceramic Network's indexes.</span>
                </div>
            )}
        </div>
        <div className='chat-footer'>
            <input  
                className='input-box'
                type="text"
                placeholder="Ask to all indexes"
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleSendMessage}
            />
        </div>
        <p>Powered by <span>index.network</span></p>
        </div>
    </div>
    )}
    </>
  );
};

export default EmbeddableChat;
