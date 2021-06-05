export const getWeather = () => {
    const data = {
        method: "GET"
    }
    const url = "http://api.openweathermap.org/data/2.5/forecast?q=toronto&appid=083160e8fe8a9deda114381c598392d0"
    return fetch(url, data).then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            throw response.json();
        }
    })
}