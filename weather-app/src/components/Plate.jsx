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
                 </div>)
            }
            

    </div>
}