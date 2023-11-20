// Необходимые импорты
const express = require('express');
const axios = require('axios');

// Создание приложения Express
const app = express();
const port = 3000; // Порт для запуска сервера
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
// Роут для обработки запросов от клиента
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

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





















// const axios = require('axios');

// // Замените 'YOUR_BOT_TOKEN' на реальный токен вашего бота
// const botToken = '6067105307:AAFDNNBsD45UN-p9qQTrjqVkhAxqC802TS4';

// // Метод, который вы хотите вызвать (например, sendMessage)
// const methodName = 'sendMessage';

// // ID чата, куда нужно отправить сообщение
// const chatId = '1710586323';

// // Текст сообщения, которое нужно отправить
// const messageText = 'Hello, this is a message from my bot!';

// // URL для запроса
// const apiUrl = `https://api.telegram.org/bot${botToken}/${methodName}`;

// // Параметры запроса
// const params = {
//   chat_id: chatId,
//   text: messageText,
// };

// // Выполнение POST-запроса с помощью axios
// axios.post(apiUrl, params)
//   .then(response => {
//     console.log('Response:', response.data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
