class Coordinates{
    constructor(){

    }
    async getCoordinates(city,appid){
        const cityResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${appid}`)

        const coordinates = await cityResponse.json()
        
        return {coordinates};
    }
}