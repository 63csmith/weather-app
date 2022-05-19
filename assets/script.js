var weather = {
    apiKey: "49226ca17e9331a3d0cbf0efaacfa2b6",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}"
        ).then((response) => response.json())
        .then((data) => console.log(data));
    }
}