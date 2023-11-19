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
        bot.sendMessage(chatId, 'Нажми кнопку для открытия веб-приложения:', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Открыть', web_app: {url: 'https://botsait-1l68.vercel.app/'}}]
                ]
            }
        });
        
}

   
});
bot.on('web_app_data', async(msg)=>{
    const chatId = msg.chat.id;
    const text = msg.text;
    
        try {
            const data = JSON.parse(msg.web_app_data.data);
            console.log(data)
            await bot.sendMessage(chatId, data)
            
        } catch (error) {
            console.log('Ошибка:', error);
        }
    
})

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