function contador(){
  for (var i = 0; i <= 10; i++) {
  }

  console.log(`Resultado: ${i}`);
}

let btn = document.getElementById('btnCalcular')

btn.addEventListener('click', function(e) {
  e.preventDefault(); //detiene la acción predeterminada de un elemento
  contador();
  console.log(e);
});
