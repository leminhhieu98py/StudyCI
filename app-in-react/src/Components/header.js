import { useState } from 'react'
import CreateContainer from './container'
import '../Asset/Css/header.css'

export default function CreateHeader() {
    let [input, setInput] = useState("");
    let [outputWeather, setOutputWeather] = useState([])
    let handleClick = (event) => {
        event.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`)
            .then(res => res.json())
            .then(data => {
                setOutputWeather([...outputWeather, <CreateContainer
                    name={data.name}
                    country={data.sys.country}
                    temp={`${data.main.temp}°C`}
                    img={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`}
                    weather={data.weather[0].main}
                />])
            })
        setInput("")
    }
    return (
        <div className="body">
            <div className="header">
                <h1>Simple Weather App</h1>
                <form action="submit" >
                    <input className="search-bar" value={input} onChange={event => setInput(event.target.value)} placeholder="Search for a city" />
                    <button className="btn" disabled={input == ""} onClick={handleClick}>SUBMIT</button>
                </form>
            </div>
            <div className="list">
                {outputWeather}
            </div>
        </div>

    )
}