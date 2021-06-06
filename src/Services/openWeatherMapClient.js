export const getWeather = () => {
    const data = {
        method: "GET"
    }
    const url = "http://api.openweathermap.org/data/2.5/forecast?q=toronto&appid=ef789d33883afc2c00eb596fd81b40cd"
    return fetch(url, data).then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            throw response.json();
        }
    })
}