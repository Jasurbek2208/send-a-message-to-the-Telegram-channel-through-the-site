import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        body: JSON.stringify({ message }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (data.success) {
        setMessageSent(true);
      } else {
        setMessageSent(false);
      }
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
