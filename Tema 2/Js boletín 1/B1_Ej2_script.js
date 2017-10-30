let pal1 = document.getElementById('palabra1');
let pal3 = document.getElementById('palabraCorrecta');
let btn = document.getElementById('btncomprobar')
let animal;
let mapCaptcha = new Map();
let arrayGeneral = [];

var colores = ["rojo", "azul", "amarillo"];
var animales = ["perro", "gato", "conejo"];

colores = colores.sort(function() {
  return Math.random() - 0.5
});

animales = animales.sort(function() {
  return Math.random() - 0.5
});

animal = animales[0];

mapCaptcha.set(1, colores);
mapCaptcha.set(2, animal);

arrayGeneral.push(colores[0]);
arrayGeneral.push(colores[1]);
arrayGeneral.push(colores[2]);
arrayGeneral.push(animal);

arrayGeneral = arrayGeneral.sort(function() {
  return Math.random() - 0.5
});

pal1.innerHTML = arrayGeneral;



btn.addEventListener('click', function(e) {
  let resultPal = pal3.value;

  if (resultPal === mapCaptcha.get(2)) {
    alert('No eres un robot')
  } else {
    alert('Eres un robot, no hagas SPAM')
  }

});
