    function getWeather(cityID, cardId) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=8dcd8738b395a8257ed3ee866a7b2c71`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                const cityData = {
                    cityName: data.name,
                    id: cityID,
                    tempature: Math.round((data.main.temp - 273)),
                    status: data.weather[0].main,
                    icon: data.weather[0].icon
                }

                const cardsHolder = document.querySelector('.cards-holder');
                cardsHolder.innerHTML += `
                <div class="weather-card" id ="${cardId}">
                    <div class="card-title-holder">
                        <h2 class="card-title">${cityData.cityName}</h2>
                    </div>
                    <div class="card-info-holder">
                        <strong class="degree">${cityData.tempature} &deg;</strong>
                        <strong class="status">${cityData.status}</strong>
                    </div>
                    <div class="card-icon-holder">
                        <img src="http://openweathermap.org/img/wn/${cityData.icon}@2x.png" alt="icon weather">
                    </div>
                </div>
                `

                localStorage.setItem(data.name, JSON.stringify(cityData))
            })
    }


    const cityIdList = ['706483', '703448', '702550', '1850147', '3068345', '709930'];
    const weatherData = []

    function refreshWeatherData() {
        const cardsHolder = document.querySelector('.cards-holder');
        cardsHolder.innerHTML = ''
        localStorage.clear()

        cityIdList.forEach((item, index) => {
            getWeather(item, index);
        })

        

    }
    
    refreshWeatherData()
    console.log('refreshed FIRST TIME')

    setInterval(refreshWeatherData, 7200000)