const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000

const token = '6067105307:AAFDNNBsD45UN-p9qQTrjqVkhAxqC802TS4';
const bot = new TelegramBot(token, { polling: true });




bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;


    // Создаем кнопку с Web App
    bot.sendMessage(chatId, 'Нажмите кнопку, чтобы открыть Web App:', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: 'Открыть Web App',
                    web_app: { url: `https://botsait-1l68.vercel.app/` }
                }]
            ]
        }
    });
});

// Обработчик ошибок
bot.on('polling_error', (error) => {
    console.error(`Polling error: ${error}`);
});
  
 
  


