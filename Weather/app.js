const coordinates = new Coordinates();
const weather = new Weather();
var token = config.token;
var key = config.key;

var appid = token + key;   
var city = 'istanbul';

const search = document.getElementById('search');

search.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        let text = event.target.value;
        if (text != '') {
            coordinates.getCoordinates(text,appid).then(response => {
                city =response.coordinates[0].name ;
                if (response.coordinates[0].name != '') {
                    var latitude = response.coordinates[0].lat
                    var longitude = response.coordinates[0].lon
                    weather.getWeather(latitude, longitude,appid).then(response => {
                        const ui = new UI(city);
                        console.log(ui)
                        ui.showWeather(response.weather)
                        ui.showWind();
                        weatherCondition(response.weather.weather[0].description)
            
                        weather.getPicture(response.weather.weather[0].icon).then(response=>{
                            ui.showPicture(response.url)
                        })
                    })
                }
            })
        }
    }
})

search.addEventListener('keyup', (event) => {
})

coordinates.getCoordinates(city)
    .then(response => {
        console.log(response.coordinates)
        var latitude = response.coordinates[0].lat
        var longitude = response.coordinates[0].lon

        weather.getWeather(latitude, longitude).then(response => {
            console.log(response.weather)
        })
    })

function weatherCondition(description){
    pic='03'
    if(description == 'clear sky'){
        pic = '01';
    }
    if(description == 'few clouds'){
        pic = '02';
    }
    if(description == 'scattered clouds'){
        pic = '03';
    }
    if(description == 'broken clouds'){
        pic = '04';
    }
    if(description == 'shower rain'){
        pic = '09';
    }
    if(description == 'rain'){
        pic = '10';
    }
    if(description == 'thunderstorm'){
        pic = '11';
    }
    if(description == 'snow'){
        pic = '13';
    }
    if(description == 'mist'){
        pic = '50';
    }

    return pic;
}