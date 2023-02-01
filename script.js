let BLOCK_1 = document.querySelector("#block_1"); // получаем дивы и кнопку
let BLOCK_2 = document.querySelector("#block_2");
let BLOCK_3 = document.querySelector("#block_3");
let BLOCK_4 = document.querySelector("#block_4");
let BLOCK_5 = document.querySelector("#block_5");

let GET_DATA = document.querySelector("#get_data");
GET_DATA.addEventListener("click", () => { getData()}); // вешаем слушатель на клик

    


function getData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=f3900f064bdb1a87b698dc2d02e14ed4&units=main') // делаем запрос
        .then(response => response.json()) // преобразуем
        .then(response => {
            console.log(response);
             return response // логируем и обрабатываем дальше
        })

        /*  получаем примерно такую хуйню 
        {
         "coord": {  
             "lon": 37.6156,
             "lat": 55.7522
         },
         "weather": [
             {
                 "id": 600,
                 "main": "Snow",
                 "description": "light snow",
                 "icon": "13n"
             }
         ],
         "base": "stations",
                    }*/

        .then(response => { // и дальше по ключам можем засовывать в дивы инфу в этом блоке
            BLOCK_1.innerHTML = response.weather[0].main // засовываем в блок 1 снег
            BLOCK_2.innerHTML = response.main.feels_like

        })
}