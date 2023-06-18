const weather = document.getElementById("weather");

const fetchData = async () => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?zip=64152";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "455a2a2430mshfb6021f3092028bp1a4ebfjsn49aa6d57aed2",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);

    // Extract the temperature in Celsius from the response
    const temperatureCelsius = data.temp;

    // Convert Celsius to Fahrenheit
    const temperatureFahrenheit = Math.round((temperatureCelsius * 9) / 5 + 32);
    //console.log("Temperature in Fahrenheit:", temperatureFahrenheit);

    // Update the HTML content with the temperature
    weather.textContent = `Kansas City Temperature: ${temperatureFahrenheit.toFixed(
      0
    )}°F`;
  } catch (error) {
    console.error(error);
  }
};

fetchData();
