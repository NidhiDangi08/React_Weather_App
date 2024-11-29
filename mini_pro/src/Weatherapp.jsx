import Inputbox from './Inputbox';
import Infobox from './assets/Infobox';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 29.22,
        humidity: 35,
        temp: 30.05,
        tempMax: 30.05,
        tempMin: 30.05,
        weather: "Haze",
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Nidhi</h2>
            <Inputbox updateInfo={updateInfo} /> {/* Ensure this name matches */}
            <Infobox info={weatherInfo} />
        </div>
    );
}
