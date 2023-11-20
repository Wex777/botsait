



let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = {bit:"10000"};




const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const cardUser = document.getElementById('first_card')
const userID = `${tg.initDataUnsafe}`
cardUser.textContent = userID

button1.addEventListener("click", async function(){
	const botToken = '6067105307:AAFDNNBsD45UN-p9qQTrjqVkhAxqC802TS4';
	const chatId = '1710586323';
	const messageText = 'Hello, this is a message from my bot!';
	const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

const params = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    chat_id: chatId,
    text: messageText,
  }),
};

// Выполнение POST-запроса к API Telegram
fetch(apiUrl, params)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Обработка успешного ответа от сервера
    console.log('Успешный ответ:', data);
  })
  .catch(error => {
    // Обработка ошибки
    console.error('Ошибка:', error);
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



