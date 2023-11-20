
const axios = require('axios');

let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = {bit:"10000"};

// Замените 'YOUR_BOT_TOKEN' на реальный токен вашего бота
const botToken = '6067105307:AAFDNNBsD45UN-p9qQTrjqVkhAxqC802TS4';

// Метод, который вы хотите вызвать (например, sendMessage)
const methodName = 'sendMessage';

// ID чата, куда нужно отправить сообщение
const chatId = '1710586323';

// Текст сообщения, которое нужно отправить
const messageText = 'Hello, this is a message from my bot!';

// URL для запроса
const apiUrl = `https://api.telegram.org/bot${botToken}/${methodName}`;

// Параметры запроса
const params = {
  chat_id: chatId,
  text: messageText,
};

// Выполнение POST-запроса с помощью axios



const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const cardUser = document.getElementById('first_card')
const userID = `${tg.initDataUnsafe}`
cardUser.textContent = userID

button1.addEventListener("click", function(){
	axios.post(apiUrl, params)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
	
});

button2.addEventListener("click", function(){
	
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
		tg.MainButton.show();
		
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
});



