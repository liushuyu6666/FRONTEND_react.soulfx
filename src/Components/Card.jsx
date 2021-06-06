import logo from '../logo.svg';
import cloudy from '../svg/wi-cloud.svg';
import fog from '../svg/wi-day-fog.svg';
import rain from '../svg/wi-day-rain.svg';
import snow from '../svg/wi-day-snow.svg';
import sunny from '../svg/wi-day-sunny.svg';

export const Card = (props) => {
    // const map = {"Clouds": cloudy, "fog": fog, "Rain": rain, "snow": snow, "sunny": sunny};
    // var weather = props.weather;
    
    return (
        <div className={"weather-card"}>
            <div className={"weather-card-first"} key="1">
                <label>{props.dt}</label>
            </div>
            <div className={"weather-card-second"} key="2">
                <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}></img>
            </div>
            <div className={"weather-card-third"} key="3">
                <label>{props.temp}</label>
            </div>
            
        </div>
    )
}