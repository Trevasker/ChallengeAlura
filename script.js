let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

document.getElementById('button1').addEventListener('click', function() {
  var message;
  if (numeroUm == stringUm) {
    message = ' As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes';
  } else {
    message = 'As variáveis numeroUm e stringUm não têm o mesmo valor';
  }
  displayResult(message);
});

document.getElementById('button2').addEventListener('click', function() {
  var message;
  if (numeroTrinta === parseInt(stringTrinta)) {
    message = 'As variáveis numeroTrinta e stringTrinta têm o mesmo valor e mesmo tipo';
  } else {
    message = 'As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo';
  }
  displayResult(message);
});

document.getElementById('button3').addEventListener('click', function() {
  var message;
  if (numeroDez == stringDez) {
    message = 'As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes';
  } else {
    message = 'As variáveis numeroDez e stringDez não têm o mesmo valor';
  }
  displayResult(message);
});

function displayResult(message) {
  var resultDiv = document.getElementById('result');
  resultDiv.textContent = message;
  
  if (resultDiv.style.display === 'none') {
    resultDiv.style.display = 'block';
  } else {
    resultDiv.style.display = 'none';
  }
}
