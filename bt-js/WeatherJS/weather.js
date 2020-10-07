class Weather {
  constructor (city, country) {
    this.apiKey = 27d691f3d78d2cc37bfd1e6defe3fa7e;
    this.city = city;
    this.coutnry = country;
  }

  // fetch weather
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();
    console.log(responseData);

    return responseData;
  }
}

