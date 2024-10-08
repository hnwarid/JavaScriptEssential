function showweatherDetails(event) {
    event.preventDefault();

    const cityInput = document.getElementById('city').value;
    const latInput = document.getElementById('lat').value;
    const lonInput = document.getElementById('lon').value;

    const apiKey = 'c4f86ece00bc8aa272652ac9065af12d';  // supposedly replace with own actual API key, but already works...


    // Practice Task: use Latitude and Longitude data to fetch Weather Info
    // const city = `?q=${cityInput}`;
    // const API = `&appid=${apiKey}`
    // const lat = `?lat=${latInput}`;
    // const lon = `&lon=${lonInput}`;
    const units = '&units=metric';
    
    const mainUrl = `https://api.openweathermap.org/data/2.5/weather`
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let apiUrl = '';
    // if else logic to create apiUrl from the city name OR latitude and longitude data
    if (cityInput) {
        // apiUrl = `${mainUrl}${city}${API}${units}`; 
        apiUrl = `${mainUrl}?q=${cityInput}&appid=${apiKey}${units}`;
    } else if (latInput && lonInput) {
        // apiUrl = `${mainUrl}${lat}${lon}${API}${units}`;
        apiUrl = `${mainUrl}?lat=${latInput}&lon=${lonInput}&appid=${apiKey}${units}`;
    } else {
        alert('Pleaes enter either a city name or both latitude and longitude data');
        return;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temnperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;  
    });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);