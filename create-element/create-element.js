const getValue = document.getElementById('value');
const createElementH1 = document.createElement('h1');
const getBox = document.getElementById('box');
const createBox = document.createElement('div');

createElementH1.innerHTML = "Create H1";
createElementH1.style.color ="black";
getValue.appendChild(createElementH1);

createBox.style.backgroundColor = "black";
createBox.style.height = "200px";
createBox.style.width = "200px";

getBox.appendChild(createBox);
