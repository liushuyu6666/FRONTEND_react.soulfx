import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { getWeather} from "../Services/openWeatherMapClient";
import { Card } from "./Card";

const Home = (props) => {

    const [weathers, setWeathers] = useState([]);

    // componentDidMount
    const weatherInfo = () =>{
        getWeather().then(res => {
            const list = res["list"];
            const weatherList = [];
            list.map((item, i) => {
                const dt = new Date(item["dt"] * 1000).toLocaleString("en-US", {weekday: "long"});
                const temp = Math.round(parseFloat(item["main"]["temp"]) - 273.15) + "°C";
                const weather = item["weather"][0]["main"];
                weatherList.push({dt: dt, temp: temp, weather: weather});
            })
            // console.log(weatherList);
            setWeathers(weatherList);
        })
        .catch(err => console.error(err));
    }

    useEffect(weatherInfo);

    return(
        <div className={"home-page"}>
            <div className={"home-page-main"}>
            {
                [{dt:"Tuesday", temp:"32", weather:"rain"},
                {dt:"Tuesday", temp:"32", weather:"cloudy"},
                {dt:"Tuesday", temp:"32", weather:"cloudy"}].map((item, i) => (
                    <Card weather={item["weather"]} dt={item["dt"]} temp={item["temp"]}/>
                ))
            }
            </div>
        </div>
    )

    
}

export default withRouter(Home);