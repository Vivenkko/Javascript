let FaC = document.getElementById('FaC');
let CaF = document.getElementById('CaF')
let btn = document.getElementById('btncomprobar');
let btn2 = document.getElementById('btn2comprobar')

var num1 = 32;
var num2 = 5;
var num3 = 9;
var celsius = CaF.Value;
var farenheit = FaC.value;

/*function conversionFaC(){
  var num1 = 32;
  var num2 = 5;
  var num3 = 9;
  celsius = (farenheit - num1) * num2/num3;
}
conversionFaC();*/

btn.addEventListener('click', (num1, num2, num3, farenheit) {
  var res = (farenheit - num1) * num2/num3;

  alert(`Los grados en Celsius son: ${res}`);

});

btn2.addEventListener('click', (num1, num2, num3, celsius) {
  var res2 = celsius * num3/num2 + num1;

  alert(`Los grados en Celsius son: ${res2}`);
});
