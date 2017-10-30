var select = document.getElementById('s');
var btn = document.getElementById('btncomprobar');
var op1 = document.getElementById('operando1');
var op2 = document.getElementById('operando2');

var suma;
var resta;
var multiplicacion;
var division;

var operando1 = op1.value;
var operando2 = op2.value;

function sumar(){
  suma = operando1 + operando2;
}

function restar(){
  resta = operando1 - operando2;
}

function multiplicar(){
  multiplicacion = operando1 * operando2;
}

function dividir(){
  division = operando1 / operando2;
}


sumar();
restar();
multiplicar();
dividir();


btn.addEventListener('click', function(e) {
  let indiceOpcion = select.selectedIndex;
  let valorOpcionSeleccionada = select.options[indiceOpcion].value;

  if (valorOpcionSeleccionada === "Sumar") {
    alert(`La suma es: ${suma}`);
  }else if (valorOpcionSeleccionada === "Restar") {
    alert(`La resta es: ${resta}`);
  } else if (valorOpcionSeleccionada === "Multiplicar") {
    alert(`La multiplicacion es: ${multiplicacion}`);
  } else if (valorOpcionSeleccionada === "Dividir") {
    alert(`La division es: ${division}`);
  } else {
    alert('Está escogiendo mal');
  }
});
