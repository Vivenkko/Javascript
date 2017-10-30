var select = document.getElementById('s');
var btn = document.getElementById('btncomprobar');


btn.addEventListener('click', function(e) {
  let indiceOpcion = select.selectedIndex;
  let valorOpcionSeleccionada = select.options[select.selectedIndex].value;

  if (valorOpcionSeleccionada === 'Ford Fiesta') {
    alert('Descuento del 5% para el ford fiesta');
  }else {
    alert('Descuento del 10% para el ford focus');
  }
});
