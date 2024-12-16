function displayCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector(".searchField");
    let city = searchInput.value;
  
    let apiKey = "0cca9cddf1f4t4bb307e8bfo1fa213f2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(updateWeatherData);
  }
  
  function updateWeatherData(response) {
    let currentCity = document.querySelector(".currentCity");
    currentCity.innerHTML = response.data.city;
    let temperatureValue = document.querySelector("#current-temperature");
    let temperature = Math.round(response.data.temperature.current);
    temperatureValue.innerHTML = temperature;
  }
  
  function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
  
    return `${day} ${hours}:${minutes}`;
  }
  
  let searchBar = document.querySelector("#city-search");
  searchBar.addEventListener("submit", displayCity);
  
  let currentDateDisplay = document.querySelector("#current-date");
  let currentDate = new Date();
  
  currentDateDisplay.innerHTML = formatDate(currentDate);
  