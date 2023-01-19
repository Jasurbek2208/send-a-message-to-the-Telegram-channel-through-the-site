import React, { useState } from 'react';
import TelegramBot from 'telegram-bot-api';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const bot = new TelegramBot('5117041696:AAG2IRH4POh4BWTZcF_trTkJat2ERQ6ckME');
    try {
      await bot.sendMessage({
        chat_id: '5117041696',
        text: message
      });
      setMessageSent(true);
    } catch (error) {
      console.log(error);
      setMessageSent(false);
    }
    setLoading(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {messageSent === true && <p>Message sent successfully!</p>}
      {messageSent === false && <p>Error sending message</p>}
    </>
  );
}

export default App;
