import logo from '../logo.svg';
import cloudy from '../svg/wi-cloud.svg';
import fog from '../svg/wi-day-fog.svg';
import rain from '../svg/wi-day-rain.svg';
import snow from '../svg/wi-day-snow.svg';
import sunny from '../svg/wi-day-sunny.svg';

export const Card = (props) => {
    const map = {"cloudy": cloudy, "fog": fog, "rain": rain, "snow": snow, "sunny": sunny};
    var weather = props.weather;
    
    return (
        <div className={"weather-card"}>
            <div className={"weather-card-first"}>
                <label>{props.dt}</label>
            </div>
            <div className={"weather-card-second"}>
                <img src={map[weather]}></img>
            </div>
            <div className={"weather-card-third"}>
                <label>{props.temp}</label>
            </div>
            
        </div>
    )
}