class Coordinates{
    constructor(){

    }
    async getCoordinates(city){
        const cityResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=304e44883edf2df5c0b047223c35dedf`)

        const coordinates = await cityResponse.json()
        
        return {coordinates};
    }
}