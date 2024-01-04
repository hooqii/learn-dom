const increment = document.getElementById('btn-increment');
const decrement = document.getElementById('btn-decrement');
const number = document.getElementById('number');

increment.addEventListener('click', incrementFunction);
increment.addEventListener('click', incrementFunction);

function incrementFunction(){
    number.innerText = parseInt(number.innerText) + 1;
}

function decrementFunction() { 
    if (number.innerHTML> 0) {
        number.innerText = parseInt(number.innerText) - 1;
    }
}