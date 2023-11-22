function getWeather() {
    const city = document.getElementById('cityName').value;
    if (!city) {
        alert('Будь ласка, введіть місто');
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let data = JSON.parse(xhr.responseText);
                document.getElementById('weather').innerHTML = 
                    `Температура: ${data.main.temp}°C<br>
                    Тиск: ${data.main.pressure} hPa<br>
                    Опис: ${data.weather[0].description}<br>
                    Вологість: ${data.main.humidity}%<br>
                    Швидкість вітру: ${data.wind.speed} м/с<br>
                    Напрям вітру: ${data.wind.deg}°<br>
                    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
            } else if (xhr.status == 404) {
                alert('Вказане місто не знайдено. Будь ласка, перевірте написання.');
            } else {
                document.getElementById('weather').innerHTML = 'Помилка при отриманні даних про погоду.';
            }
        }
    };
    xhr.send();
}