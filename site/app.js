let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener("click", function(){
	const data = {
		bit: '123'
	}
	tg.sendData(JSON.stringify(data))
});

button2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		
		
	}
});