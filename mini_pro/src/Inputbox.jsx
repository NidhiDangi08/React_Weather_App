import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./Inputbox.css";
import { useState } from 'react';

export default function Inputbox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, seterror] = useState(false);
    
    
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "84eaae4b1620bfc36702bc7efa553192";

    let getweatherinfo = async () => {
        try{
         let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
         );
         let jsonResponse = await response.json();

         let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
         };

          console.log(result);
       
          return result;
        }catch(err){
            throw err;
        }
         
    };  


    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getweatherinfo();
        updateInfo(newInfo); // Make sure to call updateInfo
        }catch{
            seterror(true)
        }
    };

    return (
        <div className="Inputbox"> 
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city"
                    label="City Name"
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange}
                />
                <br /><br />
                <Button type="submit" variant="contained">
                    Search
                </Button>  
                {error && <p style= {{color:"red"}}>No such place exit !</p>}
            </form>
        </div>
    );
}
