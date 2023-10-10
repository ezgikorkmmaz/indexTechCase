# Chat Component

OpenChat is a versatile, open-source chat interface component designed with a singular mission in mind: to encourage community contributions and make the chat experience accessible and seamless for any application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Chat Messages](#chat-messages)
- [Reset Chat](#reset-chat)

## Installation

To use the Embeddable Chat Component, follow these installation steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ezgikorkmmaz/indexTechCase.git

2. Navigate to the project directory:

   ```bash
   cd indexTechCase
   
3. Install the necessary dependencies:

   ```bash
   npm install

4. Launch the development server:

   ```bash
   npm start

5. It is now accessible locally at http://localhost:3000.

## Usage
 ```bash
import ChatInterface from './components/ChatInterface';

<ChatInterface
  primaryColor="#3498db"
  onSubmit={handleChatMessage}
  messages={chatMessages}
  emptyState={emptyStateImage}
  profilePic={userProfileImage}
/>
 ```

## Customization
OpenChat is customizable, ensuring it seamlessly aligns with your application's aesthetics and requirements. For instance, you can easily change the primary color:
 ```bash

<ChatInterface primaryColor="#ff5722" />
 ```
## Chat Messages
Chat messages are structured as objects with role and content properties. Messages can be managed using the messages prop.

## Reset Chat
To reset the chat and start a new conversation, you can use a "Reset Chat" button. For example:

 ```bash
<ChatInterface
  // ... other props
/>
<button onClick={handleResetChat} className="">
  Reset Chat
</button>
 ```

