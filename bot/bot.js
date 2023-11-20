const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000

const token = '6067105307:AAFDNNBsD45UN-p9qQTrjqVkhAxqC802TS4';
const bot = new TelegramBot(token);




bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        bot.sendMessage(chatId, 'Нажми кнопку для открытия веб-приложения:', {
            reply_markup: {
                    keyboard: [
                    [{text: 'Открыть', web_app: {url: 'https://botsait-1l68.vercel.app/'}}]
                ],
                resize_keyboard: true
            }
        });
        
    }
    if(msg?.web_app_data?.data){
        try{
            const data = JSON.parse(msg?.web_app_data?.data)
            await bot.sendMessage(chatId, 'Спасибо!'+ data.bit)
        }catch(error){
            console.log(error)
        }
    }
   
});


// Обработка входящих обновлений
app.post('/sendMessage', async (req, res) => {
    try {
      // Здесь выполняется запрос к API Telegram
      const botToken = '6067105307:AAFDNNBsD45UN-p9qQTrjqVkhAxqC802TS4'; // Замените на ваш токен бота
      const methodName = 'sendMessage';
      const chatId = '1710586323'; // Замените на ID вашего чата
      const messageText = 'Hello, this is a message from my bot!';
      const apiUrl = `https://api.telegram.org/bot${botToken}/${methodName}`;
  
      const params = {
        chat_id: chatId,
        text: messageText,
      };
  
      // Выполнение POST-запроса к API Telegram
      const response = await axios.post(apiUrl, params);
  
      // Отправка ответа клиенту
      res.json(response.data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  });
  
 
  


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
    bot.setWebHook('https://573a-5-144-77-106.ngrok-free.app/webhook')
  });