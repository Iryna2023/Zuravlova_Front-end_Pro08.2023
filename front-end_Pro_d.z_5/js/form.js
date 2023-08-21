let yourCitylife;

const toYear = new Date(2023);

const yourYearBirth = prompt("Write your year of birth please:","");

if (yourYearBirth === null){
    alert (`Шкода, що Ви не захотіли ввести свій рік народження.`);
} else {
    let yourCity = prompt("Write the city in which you live, please:","");

    if (yourCity === null){
    alert (`Шкода, що Ви не захотіли ввести своє місто.`);
} else {
    let yourFavoriteSport = prompt("Write your favorite sport, please:","");

    if(yourFavoriteSport === null){
    alert (`Шкода, що Ви не захотіли ввести свій улюблений спорт.`);
} else {
    function yourAge(toYear, yourYearBirth){
        return toYear - yourYearBirth;
}

let yourCitylife;

if (yourCity==="Київ"){
    yourCitylife = `Ти живеш у столиці України. `;
} else
    if (yourCity==="Вашингтон"){
        yourCitylife = `Ти живеш у столиці США. `;
} else
    if (yourCity==="Лондон"){
        yourCitylife = `Ти живеш у столиці Великобританії. `;
} else
    if (yourCity===yourCity){
        yourCitylife = `Ти живеш у місті ${yourCity}. `;
}

let yourSport;

if (yourFavoriteSport==="Футбол"){
    yourSport = `Круто! Хочеш стати Гарі Лінекером?`;
} else
    if (yourFavoriteSport==="Плавання"){
        yourSport = `Круто! Хочеш стати Ігорем Червинським?`;
} else
    if (yourFavoriteSport==="Фігурне катання"){
       yourSport = `Круто! Хочеш стати Діком Баттоном?`;
} else
    if (yourFavoriteSport===yourFavoriteSport){
        yourSport= `Твій улюблений спорт це ${yourFavoriteSport}.`
    }

{alert(`Тобі ${yourAge(toYear, yourYearBirth)} р. ${yourCitylife} ${yourSport}`)};

}}}
