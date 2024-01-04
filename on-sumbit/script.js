const getForm = document.getElementById('myForm');
getForm.addEventListener('submit', function (event){
    event.preventDefault();
    const getNumber1 = document.getElementById('number1');
    const getNumber2 = document.getElementById('number2');
    const getResult = document.getElementById('result');
    getResult.value = Number(getNumber1.value) + Number(getNumber2.value);
})