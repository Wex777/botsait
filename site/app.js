
const axios = require('axios');


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
	try {
		app.use((req, res, next) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
			next();
		  });
		// Отправка POST-запроса к вашему серверу
		const response = await axios.post('https://573a-5-144-77-106.ngrok-free.app/sendMessage');
		console.log('Response:', response.data);
	  } catch (error) {
		console.error('Error:', error);
	  }
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



