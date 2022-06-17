let city = $("#city").val();


$("#src").click(function(e){
	getLatLon(e)
});

async function getLatLon(e) {
	let city = $("#city").val();
let response = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=49226ca17e9331a3d0cbf0efaacfa2b6&units=imperial").then(res => res.json()).then(data => data[0]);
	let {lat, lon} = response
	getCurrentWeather(lat, lon);
}


function getCurrentWeather(lat, lon) {
	var weather =
		"https://api.openweathermap.org/data/2.5/weather?lat=" +
		lat +
		"&lon=" +
		lon +
		"&appid=49226ca17e9331a3d0cbf0efaacfa2b6&units=imperial";
		fetch(weather).then(res => res.json()).then(data => console.log(data));
}