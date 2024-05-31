const key = "b839a8f3e96cb0946bf66f89fbcc8e04";
let button = document.getElementById('btn');
let city = "";
let cloudN = document.querySelector(".cloud");
cloudN.style.display = "none";


function screenData(api) {
    //Nome da Cidade
    document.querySelector(".cidade").innerHTML = "Tempo em: " + api.name.replace();
    //Graus
    document.querySelector(".tempo").innerHTML = api.main.temp.toFixed() + "°C";
    //Tempo
    document.querySelector(".wether").innerHTML = api.weather[0].description.replace();
    //Nuvem
    document.querySelector(".cloud").src = `https://openweathermap.org/img/wn/${api.weather[0].icon}.png`;
    //Umidade
    document.querySelector(".umidade").innerHTML ="Umidade: " + api.main.humidity.toFixed() + "%";
    console.log(api)
}

async function buscCidade(city) {
    city = document.getElementById('userCity').value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response  => response.json());
    cloudN.style.display = "block";
    screenData(api)
}

button.addEventListener('click',function () {
    buscCidade();
});