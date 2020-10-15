class Weather {
  constructor(city, country) {
    this.city = city;
    this.country = country;
    this.apiKey = "27d691f3d78d2cc37bfd1e6defe3fa7e";
  }

  // fetch weather
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
    );
    console.log(response);

    const responseData = await response.json();
    console.log(responseData);

    return responseData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}



// $.get("http://ipinfo.io", function(response) {
//     console.log(response.city, response.country);
// }, "jsonp");

// let locationBlocked = false;



// Using this if the user clicks the button to use current location otherwise they will input first search...

// Using locationIQ API  
// https://us1.locationiq.com/v1/reverse.php?key=<Your_API_Access_Token>&format=json&lat=48.861147&lon=2.338027
// async function reverseGeolocation (lat, lon) {
//   console.log(lat)
//   console.log(lon)
//   const response2 = await fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.bbb1488eb9e6173bc8b29d2b9f7ba941	&format=json&lat=${lat}&lon=${lon}`);

//   const responseData = await response2.json();
//   console.log(responseData);
//   console.log(responseData.address.city)
//   return responseData;
// }


// navigator.geolocation.getCurrentPosition(position => {
//   console.log(position)
//   let lat = position.coords.latitude;
//   let lon = position.coords.longitude;
  
//   reverseGeolocation(lat,lon);

// }, error => {
//   console.error(error)
//   locationBlocked = true;
// }, {
//   timeout: 1000,
//   maximumAge: 10000,
//   enableHighAccuracy: true
// })
