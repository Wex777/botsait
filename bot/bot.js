const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000

const token = '6067105307:AAFDNNBsD45UN-p9qQTrjqVkhAxqC802TS4';
const bot = new TelegramBot(token);




bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        bot.sendMessage(chatId, 'Привет! Выбери одну из функций.');
    }

    if (msg.web_app_data && msg.web_app_data.data !== undefined) {
        try {
            const data = JSON.parse(msg.web_app_data.data);
            console.log(data);
            
        } catch (error) {
            console.log('Ошибка:', error);
        }
    }
});


// Обработка входящих обновлений

  
 
  


// Настройка вебхука на сервере
app.use(bodyParser.json());
app.post('/webhook', (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

  
  // Запуск сервера
  app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
    // Установка вебхука на сервере Telegram
    bot.setWebHook('https://e2c8-5-144-77-177.ngrok-free.app/webhook')
  });