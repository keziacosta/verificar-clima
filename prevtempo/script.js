const apiKey = '6bb84d180d2eecbc979fb91b3a16d888';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const nomeCidade = document.querySelector(".busca input");
const buscaBtn = document.querySelector(".busca button");
const imagem = document.querySelector(".imagem")

async function checarTempo(cidade){
    const response = await fetch(apiUrl + cidade + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == '404'){
        document.querySelector(".erro").style.display = 'block';
        document.querySelector(".tempo").style.display = 'none';
    } else {
        document.querySelector(".cidade").innerHTML = data.name;
    document.querySelector(".graus").innerHTML = Math.round(data.main.temp) + `°c`;
    document.querySelector(".humidade").innerHTML = data.main.humidity + `%`;
    document.querySelector(".vento").innerHTML = data.wind.speed + ` km/h`;
    
    if(data.weather[0].main == 'Clouds'){
        imagem.src = 'images/clouds.png';
    } else if(data.weather[0].main == 'Clear'){
        imagem.src = 'images/clear.png';
    } else if(data.weather[0].main == 'Rain'){
        imagem.src = 'images/rain.png';
    } else if(data.weather[0].main == 'Drizzle'){
        imagem.src = 'images/drizzle.png';
    } else if(data.weather[0].main == 'Mist'){
        imagem.src = 'images/mist.png';
    }

        document.querySelector(".erro").style.display = 'none';
        document.querySelector(".tempo").style.display = 'block';

    }


}

buscaBtn.addEventListener('click', ()=>{
    checarTempo(nomeCidade.value);
})
