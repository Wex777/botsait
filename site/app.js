Telegram.WebApp.ready();

        document.getElementById('sendDataButton').addEventListener('click', async () => {
            const data = { action: 'button_click', message: 'Hello from Web App!' };

            // Отправка данных через Telegram Bot API
            const response = await fetch('https://api.telegram.org/bot<6067105307:AAFDNNBsD45UN-p9qQTrjqVkhAxqC802TS4>/answerWebAppQuery', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    web_app_query_id: Telegram.WebApp.initDataUnsafe.query_id, // Уникальный ID запроса
                    result: {
                        type: 'article',
                        id: '1',
                        title: 'Данные из Web App',
                        input_message_content: {
                            message_text: JSON.stringify(data)
                        }
                    }
                })
            });

            const result = await response.json();
            console.log("Ответ от Telegram API:", result);

    
        });