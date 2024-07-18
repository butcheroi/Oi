import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Func = () => {
    const [weather, setWeather] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [city,setCity] = useState("");
    const [submittedCity,setSubmittedCity]=useState("");

    //const city = "Hyderabad";
    const key ='493b7f82b397903fd2201ac34b55d9b2';

    useEffect(() => {
        if(submittedCity){
            const fetchWeather = async () => {
                setLoading(true);
                setError(null);
                try {
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${submittedCity}&appid=${key}&&units=metric`);
                    setWeather(response.data);
                    setLoading(false);
                } catch (err) {
                    setError(err);
                    setLoading(false);
                }
            };
    
            fetchWeather();

        }
        
    }, [submittedCity]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSubmittedCity(city);
    } 
    

    return(
        <div>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter City'/>
                <button type="submit" value="Submit">GetWeather</button>
            </form>
            
            
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {weather && !loading && !error && (
                <div>
                    <h2>Weather at {weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Condition: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    )

}

export default Func;
