const coordinates = new Coordinates();
const weather = new Weather();
const ui = new UI();
const subMenu = document.getElementById('subMenu')
var token = '304e44883edf2df5';
var key = 'c0b047223c35dedf';



var appid = token + key;
var city = 'istanbul';

const search = document.getElementById('search');

search.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        let text = event.target.value;
        x(text)
    }
})
function x(text){
    if (text != '') {
        coordinates.getCoordinates(text, appid).then(response => {
            city = response.coordinates[0].name;
            if (response.coordinates[0].name != '') {
                var latitude = response.coordinates[0].lat
                var longitude = response.coordinates[0].lon
                weather.getWeather(latitude, longitude, appid).then(response => {
                    ui.clear()
                    ui.city = city;
                    ui.showWeather(response.weather)
                    ui.showWind();

                    weather.getPicture(response.weather.weather[0].icon).then(response => {
                        ui.showPicture(response.url)
                    })
                })
            }
        })
    }
}

search.addEventListener('keyup', (event) => {
    let text = event.target.value;
    if (text != '') {
        coordinates.getCoordinates(text, appid).then(response => {
            ui.clear()
            if (response.coordinates.length > 0) {
                city = response.coordinates[0].name;
                ui.showCity(city)
            } else {
                ui.cityNotFound(search.value)
            }
        })
    }

})
subMenu.onclick = function () {
    search.value = subMenu.innerText
    ui.clear()
    x(search.value)
}

coordinates.getCoordinates(city)
    .then(response => {
        var latitude = response.coordinates[0].lat
        var longitude = response.coordinates[0].lon

        weather.getWeather(latitude, longitude).then(response => {
            
        })
    })

