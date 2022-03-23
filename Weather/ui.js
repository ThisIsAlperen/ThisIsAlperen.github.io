class UI {
    constructor(city) {
        this.weatherContainer = document.getElementById('weatherContainer')
        this.subMenu = document.getElementById('subMenu')
        this.city = city;
        this.weather = ''
    }
    
    showWeather(weather) {
        this.weather = weather;
        console.log(weather)
        this.weatherContainer.innerHTML = `
        <div class="card card-body">
        <div class="row">
            <div id="left" class="col-md-3">
                <img class="img-thumbnail" id="picture" src="" alt="">
                <p>${String(weather.weather[0].description).capitalize()}</p>
                <p>${Math.round(weather.main.temp - 273)} \xB0C</p>
            </div>
            <div id="right" class="col-md-9">
                <h3 >${this.city} - ${weather.sys.country}</h3>
                <h4>${weather.name}</h4>
                <hr>

                <div class="row">
                    <div class="col-md-9">
                        <p>Feels like: ${Math.round(weather.main.feels_like - 273)} \xB0C</p>
                        <p>Humidity: ${weather.main.humidity}%</p>
                        <p>Pressure: ${weather.main.pressure}</p>
                        <p>Temperature: ${Math.round(weather.main.feels_like - 273)} \xB0C</p>
                        <p>Max Temperature: ${Math.round(weather.main.temp_max - 273)} \xB0C </p>
                        <p>Min Temperature: ${Math.round(weather.main.temp_min - 273)} \xB0C </p>
                    </div>
                    <div id="wind" class="col-md-3">
                        <h4>Wind</h4>
                        <hr>
                        <i id="angle" class="fa-solid fa-arrow-down-long"></i>
                        <p> ${Math.round(weather.wind.speed*3.6)} km/h</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    }
    clear(){
        this.weatherContainer.innerHTML = '';
        this.subMenu.classList = ''
        this.subMenu.innerText = ''
    }
    showPicture(picture) {
        this.weatherContainer.querySelector('#picture').setAttribute('src', picture)
    }
    showWind(){
        this.weatherContainer.querySelector('#angle').setAttribute('style',`transform: rotate(${90 - this.weather.wind.deg}deg);`)
    }
    showCity(city){
        this.subMenu.innerHTML = city;
        this.subMenu.classList.add('bg-secondary')

    }
    cityNotFound(city){
        this.subMenu.innerHTML = city + ' not found'
        this.subMenu.classList.add('bg-danger')
    }

}

String.prototype.capitalize = function () {
    var total = this.toString().split(' ')
    var result = '';
    total.forEach(element => {
        var first = element.charAt().toUpperCase()

        element = element.split('')

        element.splice(0, 1, first)
        var word = ''
        element.forEach(letter => {
            word += letter
        })
        result += word+' ';
    })
    return result;

}