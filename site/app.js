let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "10000";


const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');




button1.addEventListener("click", function(){
	
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
	
	tg.sendData(item);
});