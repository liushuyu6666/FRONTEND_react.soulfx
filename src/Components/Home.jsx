import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { getWeather} from "../Services/openWeatherMapClient";
import { Card } from "./Card";

const Home = (props) => {

    const [weathers, setWeathers] = useState([]);
    const [error, setError] = useState({isError: false, msg:""});
    
    // componentDidMount
    const weatherInfo = () =>{
        getWeather().then(res => {
            const list = res["list"];
            const weatherList = [];
            list.map((item, i) => {
                const dt = new Date(item["dt"] * 1000).toLocaleString("en-US", {weekday: "long"});
                const temp = Math.round(parseFloat(item["main"]["temp"]) - 273.15) + "°C";
                const weather = item["weather"][0]["main"];
                const icon = item["weather"][0]["icon"];
                weatherList.push({dt: dt, temp: temp, weather: weather, icon: icon});
            })
            console.log(weatherList);
            setWeathers(weatherList);
        })
        .catch(err => {
            err.then(res => {
                console.error(res);
                setError({isError: true, msg:res.message});
            });
        });
    }

    useEffect(weatherInfo,[]);

    if(error["isError"]){
        return(
            <p>{error["msg"]}</p>
        )
    }
    return(
        <div className={"home-page"} key="1">
            <div className={"home-page-main"}>
            {
                weathers.map((item, i) => (
                    <Card icon={item["icon"]} dt={item["dt"]} temp={item["temp"]} key={i.toString()}/>
                ))
            }
            </div>
        </div>
    )

    
}

export default withRouter(Home);