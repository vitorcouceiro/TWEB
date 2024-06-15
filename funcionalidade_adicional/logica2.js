/////// FUNCIONALIDADE ADICIONAL //////////
const v1 = document.querySelector('#1valor')
const v2 = document.querySelector('#2valor')
const resultado = document.querySelector('#valorFinal')

function calcula(){
  resultado.innerHTML = parseInt(v1.value) + parseint(v2.value)
}

