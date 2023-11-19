let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');


button2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		function showConfirm(message, callback) {
			const confirmation = confirm(message);
			callback(confirmation);
		}
		
		
		showConfirm('Вы уверены?', function(result) {
			if (result) {
				console.log('Пользователь подтвердил действие');
				// Действия при подтверждении
			} else {
				console.log('Пользователь отменил действие');
				// Действия при отмене
			}
		});
		
	}
});