let btn = document.getElementById('btncomprobar');
var mes = document.getElementById('mes');

btn.addEventListener('click', function(e) {
  let resultado = mes.value;

  switch (resultado) {
    case '1':
      alert('Enero tiene 31 días');
      break;
    case '2':
      alert('Febrero tiene 28 días');
      break;
    case '3':
      alert('Marzo tiene 31 días');
      break;
    case '4':
      alert('Abril tiene 30 días');
      break;
    case '5':
      alert('Mayo tiene 31 días');
      break;
    case '6':
      alert('Junio tiene 30 días');
      break;
    case '7':
      alert('Julio tiene 31 días');
      break;
    case '8':
      alert('Agosto tiene 31 días');
      break;
    case '9':
      alert('Septiembre tiene 30 días');
      break;
    case '10':
      alert('Octubre tiene 31 días');
      break;
    case '11':
      alert('Noviembre tiene 30 días');
      break;
    case '12':
      alert('Diciembre tiene 31 días');
      break;

    default:
    alert('Escriba correctamente el número del mes porfavor');
    mes.value = "";
    break;
  }


});
