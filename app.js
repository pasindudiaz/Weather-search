let apiKey = "" //Add your API key here >>> https://www.weatherapi.com/
function searchWeatherData(name){
    console.log("innerfunction");
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${name}`)
    .then(res=>res.json())
    .then(data =>{ 
        document.getElementById("searchWeatherData").innerHTML = `<div><img src="${data.current.condition.icon}"></div><div> ${data.current.condition.text}</div><div>${data.location.country}</div><div>${data.current.temp_c}°C</div><div>${data.location.name}</div></p>`
    })
    
}

function enterName(){
    let name =document.getElementById("searchName").value
    console.log(name);
    searchWeatherData(name)
    

}

function getGeoLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}


function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    searchWeatherData(position.coords.latitude + "," + position.coords.longitude);
}

getGeoLocation();
