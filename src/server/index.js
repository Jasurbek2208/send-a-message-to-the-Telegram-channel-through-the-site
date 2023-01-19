var express = require('express');
var router = express.Router();
var TelegramBot = require('telegram-bot-api');

router.post('/api/sendMessage', function (req, res) {
    var message = req.body.message;
    var bot = new TelegramBot('5117041696:AAG2IRH4POh4BWTZcF_trTkJat2ERQ6ckME');
    bot.sendMessage({
        chat_id: '5117041696',
        text: message
    }).then(function (data) {
        res.json({
            success: true,
            message: 'Message sent successfully'
        });
    }).catch(function (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error sending message'
        });
    });
});

module.exports = router;




