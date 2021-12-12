import { getLocation } from './utilities.js';
import Weather from './Weather.js';
import WeatherView from './WeatherView.js';

// Quake controller
export default class WeatherController {
  constructor(parent, position = null) {
    this.parent = parent;
    this.parentElement = null;
    this.position = position || {
      lat: 0,
      lon: 0
    };
    this.weather = new Weather();
    this.weatherView = new WeatherView();
  }
  async init() {
    this.parentElement = document.querySelector(this.parent);
    await this.initPos();
    this.getWeather();
  }
  async initPos() {

    if (this.position.lat === 0) {
      try {

        const posFull = await getLocation();

        this.position.lat = posFull.coords.latitude;
        this.position.lon = posFull.coords.longitude;

      } catch (error) {
        console.log(error);
      }
    }
  }

  async getWeather() {
    const weatherList = await this.weather.getWeather(this.position);
    this.weatherView.renderWeatherList(weatherList, this.parentElement);

    document.querySelectorAll('#more').forEach(item => {
        item.addEventListener('click', e => {
            console.log(e.target.parentElement.dataset.id)
            this.getDayDetails(e.target.parentElement.dataset.id);
          });
    })
  }
  async getDayDetails(dayId) {
    const weather = this.weather.getDetails(dayId);
    this.weatherView.renderDay(weather, this.parentElement);
  }
}