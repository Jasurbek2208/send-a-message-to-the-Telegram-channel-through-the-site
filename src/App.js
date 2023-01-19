import { useState } from "react";
import TelegramBot from 'telegram-bot-api';

function App() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bot = new TelegramBot('5117041696:AAG2IRH4POh4BWTZcF_trTkJat2ERQ6ckME');
    try {
      await bot.sendMessage({
        chat_id: '5117041696',
        text: message
      });
      alert('message sent successfully!');
    } catch (error) {
      console.log(error);
      alert('Error sending message');
    }
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
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default App;
