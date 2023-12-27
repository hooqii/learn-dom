const getDataMobil = document.getElementById('data-mobil');
const getDataHp = document.getElementById('data-hp');
const dataMobil = ["MARCEDES", "BMW", "TOYOTA"];
const dataHp = ["SAMSUNG", "APPLE", "XIAOMI"];

for (const element of dataMobil) {
    getDataMobil.innerHTML = getDataMobil.innerHTML + `<li>${element}</li>` 
}

for (const element of dataHp) {
    getDataHp.innerHTML(element);
}
