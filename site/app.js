let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";


const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');




button1.addEventListener("click", function(){
	
});

button2.addEventListener("click", function(){
	try{
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
		item = "6";
		tg.MainButton.show();
		
	}}catch(error){
		console.log(error)
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.showConfirm('Вы уверены?', function(userConfirmed) {
	});
	tg.sendData(item);
});