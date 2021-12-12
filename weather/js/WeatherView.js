export default
class WeatherView {
  renderWeatherList(weatherList, listElement) {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let currentDay = new Date(weatherList.current.dt * 1000).getDay();
    listElement.children[0].innerHTML = `
    <div>
        <h2>Current Weather</h2>
        <h3>${weekday[currentDay]}</h3>
        <p>Temp: ${Math.round(weatherList.current.temp)}&deg;</p>
        <p>Feels like: ${Math.round(weatherList.current.feels_like)}&deg;</p>
        <p>Wind Speed: ${Math.round(weatherList.current.wind_speed)} Miles/Hour</p>
        <p>Humidity: ${Math.round(weatherList.current.humidity)}&percnt;</p>
        <p>Visibility: ${weatherList.current.visibility} Meters</p>
    </div>`;

    weatherList.daily.shift();
    weatherList.daily.forEach(element => {
        const day = document.createElement('li');
        day.setAttribute('data-id', element.dt);
        let weekDay = new Date(element.dt * 1000).getDay();
        day.innerHTML = `
          <p>${weekday[weekDay]}</p>
          <p>${Math.round(element.temp.day)}&deg;</p>
          <button class="btn-more" id="more">More Info</button>`;
          listElement.children[1].children[1].appendChild(day);
    });
  }

  renderDay(weather, element) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const weatherProperties = Object.assign(weather);
    console.log(weatherProperties);
    let day = new Date(weatherProperties.dt * 1000).getDay();
    let sunUpTime = new Date(weatherProperties.sunrise * 1000);
    let sunUp = `${sunUpTime.getHours()}:${sunUpTime.getMinutes()}`;
    let sunDownTime = new Date(weatherProperties.sunset * 1000);
    let sunDown = `${sunDownTime.getHours()}:${sunDownTime.getMinutes()}`;
    element.parentElement.parentElement.innerHTML = `<h1>${weekday[day]}</h1>
      <div class="details-container">
        <div class="temp">
          <h2>Temperature</h2>
          <p>Morning: ${Math.round(weatherProperties.temp.morn)}&deg;</p>
          <p>Day: ${Math.round(weatherProperties.temp.day)}&deg;</p>
          <p>Evening: ${Math.round(weatherProperties.temp.eve)}&deg;</p>
          <p>Night: ${Math.round(weatherProperties.temp.night)}&deg;</p>
          <p>Max: ${Math.round(weatherProperties.temp.max)}&deg;</p>
          <p>Low: ${Math.round(weatherProperties.temp.min)}&deg;</p>
        </div>
        <div class="feel">
          <h2>Feels Like</h2>
          <p>Morning: ${Math.round(weatherProperties.feels_like.morn)}&deg;</p>
          <p>Day: ${Math.round(weatherProperties.feels_like.day)}&deg;</p>
          <p>Evening: ${Math.round(weatherProperties.feels_like.eve)}&deg;</p>
          <p>Night: ${Math.round(weatherProperties.feels_like.night)}&deg;</p>
        </div>
        <div>
        <h2>Sun</h2>
          <p>Sunrise: ${sunUp}</p>
          <p>Sunset: ${sunDown}</p>
        </div>
        <div>
          <p>Wind Speed: ${Math.round(weatherProperties.wind_speed)} Miles/Hour</p>
          <p>Humidity: ${Math.round(weatherProperties.humidity)}&percnt;</p>
          <p>Atmospheric Temperature: ${Math.round(weatherProperties.dew_point)}&deg;</p
        </div>
      </div>
      </div>
      <button class="btn" onClick="window.location.reload();">Back</button>`;
  }
}