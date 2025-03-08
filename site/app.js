Telegram.WebApp.ready();

        document.getElementById('sendDataButton').addEventListener("click", async function(){
            const user = Telegram.WebApp.initDataUnsafe.user
            const botToken = '6067105307:AAFDNNBsD45UN-p9qQTrjqVkhAxqC802TS4';
            const chatId = `${user.id}`;
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