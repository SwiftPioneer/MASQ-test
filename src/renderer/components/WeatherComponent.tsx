import React, { useState, ChangeEvent } from 'react';

function WeatherComponent() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=67cb3facfb84232db40503216b70eccc`,
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (e) {
        // setError(e.message || 'An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h2>Weather App</h2>
      <div>
        <label htmlFor="cityInput">Enter City: </label>
        <input
          type="text"
          id="cityInput"
          value={city}
          onChange={handleCityChange}
        />
        <button type="button" onClick={fetchData} disabled={!city || loading}>
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && (
        <div>
          <h3>
            {weatherData.name}, {weatherData.sys.country}
          </h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherComponent;
