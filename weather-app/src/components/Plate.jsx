import Search from "./Search";
import styles from './Plate.module.css'
import { useEffect, useState } from "react";



export default function Plate() {
    const [city,setCity] = useState('')
    const [loading,setLoading] = useState(false) ; 
    const [weatherData,setWeatherdata] = useState(null)

    const APIKEY = "ce84fb179b85e9494c8de9398646a1a6"

    async function fetchWeatherdata(param) {
        setLoading(true)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${APIKEY}`)

            const data = await response.json();
            console.log(data,"data");
            if (data) {
                setWeatherdata(data)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }
    

    async function handleClick() {
        fetchWeatherdata(city);
    }

    console.log(loading);

    function getCurrentDate() {
        // const date = new Date();
        // const year = date.getFullYear();
        // console.log(year);
        return new Date().toLocaleDateString('en-us',{
            weekday:"long",
            month:"long",
            day:"numeric",
            year:"numeric"
        })
    }
    useEffect(()=>{
        fetchWeatherdata("nairobi")
        console.log(weatherData);
    },[])
    return <div className={styles.plate} >
            <Search  city={city}
            setCity={setCity} 
            handleClick={handleClick}
            />

            {
                loading ? (<div>Loading...</div>)  : 
                 (<div>
                    <div className="city-name" >
                        <h4>
                            {weatherData?.name} , <span> {weatherData?.sys?.country} </span>
                        </h4>
                    </div>

                    <div  className="city-date" >
                        <span> {getCurrentDate()} </span>
                    </div>

                    <div className="City-temp" >
                        {
                            weatherData?.main?.temp
                        }
                       
                    </div>

                    <p className="description" >
                            {
                                weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ""
                            }
                        </p>
                    <div className="weather-info" >
                        <div>
                            <div>
                                <h4>Wind speed</h4>
                                <p className="wind" > {weatherData?.wind?.speed} </p>
                               
                            </div>
                        </div>


                        <div>
                            <div>
                                <h4>humidity</h4>
                                <p className="humidity" > {weatherData?.main?.humidity} </p>
                               
                            </div>
                        </div>



                    </div>

                 </div>)
            }
            

    </div>
}