let tg = window.Telegram.WebApp;
tg.expand();

// Получение данных пользователя
const user = Telegram.WebApp.initDataUnsafe.user;



// Отправка данных обратно в бота
document.getElementById('sendDataButton').addEventListener('click', () => {
    const data = { action: 'button_click', message: 'Hello from Web App!' };
    Telegram.WebApp.sendData(JSON.stringify(data));
    
});