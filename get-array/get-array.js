const getDataMobil = document.getElementById('data-mobil');
const getDataHp = document.getElementById('data-hp');
const getDataFruit = document.getElementById('data-fruit');
const dataMobil = ["MARCEDES", "BMW", "TOYOTA"];
const dataHp = ["SAMSUNG", "APPLE", "XIAOMI"];
const dataFruit = ["MANGGO", "ORANGE", "BANANA"];

for (const element of dataMobil) {
    getDataMobil.innerHTML = getDataMobil.innerHTML + `<li>${element}</li>`; 
}

for (const element of dataHp) {
    getDataHp.innerHTML = getDataHp.innerHTML + `<li>${element}</li>`;
}

for (const element of dataFruit) {
    getDataFruit.innerHTML = getDataFruit.innerHTML + `<li>${element}</li>`;
}
