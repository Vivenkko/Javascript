let boton = document.getElementById('btn-comprobar')
let anyoNacimiento = document.getElementById('nacimiento');

let fecha = new Date();
let anyoActual = fecha.getFullYear();

boton.addEventListener('click', function(e) {
  let anyoN = anyoNacimiento.value;

  let edadUsuario = anyoActual - anyoN;

  alert(`Tienes ${edadUsuario} años`);

});
