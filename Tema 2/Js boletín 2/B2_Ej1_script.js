let nota1 = document.getElementById('nota1');
let nota2 = document.getElementById('nota2');
let nota3 = document.getElementById('nota3');
let btn = document.getElementById('btncomprobar')


btn.addEventListener('click', function(e) {
  let not1 = parseInt(nota1.value,10);
  let not2 = parseInt(nota2.value,10);
  let not3 = parseInt(nota3.value,10);

  var media = not1 + not2 + not3;
  var calculo = media / 3;

  if (calculo >= 5) {
    alert('Enhorabuena, has aprobado');
  } else{
    alert('Lo siento, has suspendido');
  }

});
