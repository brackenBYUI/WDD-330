import { getJSON } from "./utilities.js";

export default class Weather {
  constructor() {
    this.baseUrl =
      "https://api.openweathermap.org/data/2.5/onecall";
    this._weather;
  }
  async getWeather(position) {
    const query =
      this.baseUrl +
      `?lat=${position.lat}&lon=${position.lon}&units=imperial&appid=fc01f49750cab6700d6ea5f55cc7936a`;
    this._weather = await getJSON(query);
    return this._weather;
  }

  getDetails(id) {
    return this._weather.daily.filter(item => item.dt === parseInt(id))[0];
  }
}