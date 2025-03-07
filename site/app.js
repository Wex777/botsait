Telegram.WebApp.ready();

// Получение данных пользователя
const user = Telegram.WebApp.initDataUnsafe.user;
console.log("User ID:", user.id);


// Отправка данных обратно в бота
document.getElementById('sendDataButton').addEventListener('click', () => {
    const data = { action: 'button_click', message: 'Hello from Web App!' };
    Telegram.WebApp.sendData(JSON.stringify(data));
    Telegram.WebApp.close(); // Закрыть веб-приложение после отправки
});