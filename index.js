const {TelegramBot} = require("telegram-bot-api");

const form = document.getElementById('form');
const message = document.getElementById('message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const bot = new TelegramBot('5117041696:AAG2IRH4POh4BWTZcF_trTkJat2ERQ6ckME');
  try {
    await bot.sendMessage({
      chat_id: '5117041696',
      text: message.value
    });
    alert('message sent successfully!');
  } catch (error) {
    console.log(error);
    alert('Error sending message');
  }
});
