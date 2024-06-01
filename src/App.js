import './App.css';
import { useState } from "react";

const api = {
  key: "06b88ceaadba218edc9d775c73e2e6ae",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/*HEADER*/}
        <h1>weather-app</h1>

        {/*Search box*/}
        <div>
          <input type="text" placeholder="Enter City/Town..." onChange={(e) => setSearch(e.target.value)} />
          <button onClick={searchPressed}>Search</button>
        </div>

        {weather && weather.main && (
          <>
            {/* location */}
            <p>{weather.name}</p>

            {/* temperature F/C */}
            <p className="temperature">{weather.main.temp}°C</p>

            {/* Condition (Sunny) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
