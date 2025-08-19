

const key = "85434e9fb3b5241a9ec1c2211e27d61e"


function enterdata(data){
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".text-temp").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".icon-cloud").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    
}

async function searchcity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())

    if (data.cod === "404") {
        document.querySelector(".city").innerHTML = "Cidade não encontrada 😢"
        document.querySelector(".temp").innerHTML = "--°C"
        document.querySelector(".text-temp").innerHTML = "--"
        document.querySelector(".humidity").innerHTML = "--%"
        document.querySelector(".icon-cloud").src = ""
        return
    }
    enterdata(data)
}

function clickbutton() {
    
    const city = document.querySelector(".input-city").value 

    searchcity(city)

}


