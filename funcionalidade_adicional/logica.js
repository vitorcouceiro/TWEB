//////DROP DOWN BUTTONS
const dropdownBtn = document.querySelector('.dropdown_button')
const dropdownMenu = document.querySelector('.dropdown_menu')
const iconbutton = document.querySelector('.icon-button')
const dropDownOutros1 = document.querySelector('.dropdown_outros1')
const dropdownMenu1 = document.querySelector('.dropdown_menu1')
const iconbutton1 = document.querySelector('.icon-button1')
const dropDownOutros2 = document.querySelector('.dropdown_outros2')
const dropdownMenu2 = document.querySelector('.dropdown_menu2')
const iconbutton2 = document.querySelector('.icon-button2')
const dropDownOutros3 = document.querySelector('.dropdown_outros3')
const dropdownMenu3 = document.querySelector('.dropdown_menu3')
const iconbutton3 = document.querySelector('.icon-button3')
const dropDownOutros4 = document.querySelector('.dropdown_outros4')
const dropdownMenu4 = document.querySelector('.dropdown_menu4')
const iconbutton4 = document.querySelector('.icon-button4')
const dropDownOutros5 = document.querySelector('.dropdown_outros5')
const dropdownMenu5 = document.querySelector('.dropdown_menu5')
const iconbutton5 = document.querySelector('.icon-button5')




dropdownBtn.addEventListener('click',() =>{
    dropdownMenu.classList.toggle('hide');
    iconbutton.classList.toggle('drop-rotate')
})

dropDownOutros1.addEventListener('click',() =>{
    dropdownMenu1.classList.toggle('hide1');
    iconbutton1.classList.toggle('drop-rotate1')
})

dropDownOutros2.addEventListener('click',() =>{
    dropdownMenu2.classList.toggle('hide2');
    iconbutton2.classList.toggle('drop-rotate2')
})

dropDownOutros3.addEventListener('click',() =>{
    dropdownMenu3.classList.toggle('hide3');
    iconbutton3.classList.toggle('drop-rotate3')
})

dropDownOutros4.addEventListener('click',() =>{
    dropdownMenu4.classList.toggle('hide4');
    iconbutton4.classList.toggle('drop-rotate4')
})

dropDownOutros5.addEventListener('click',() =>{
    dropdownMenu5.classList.toggle('hide5');
    iconbutton5.classList.toggle('drop-rotate5')
})


const dropdownBtn17 = document.querySelector('.buttonopelusados')
const dropdownBtn16 = document.querySelector('.buttoncitroenusados')
const dropdownBtn15 = document.querySelector('.buttonpeugeotusados')
const dropdownBtn14 = document.querySelector('.buttondsautomobilesusados')
const dropdownBtn13 = document.querySelector('.buttonfiatusados')
const dropdownBtn12 = document.querySelector('.buttonvolkswagen')
const dropdownBtn11 = document.querySelector('.buttonrenault')
const dropdownBtn10 = document.querySelector('.buttonnissan')
const dropdownBtn9 = document.querySelector('.buttonkia')
const dropdownBtn8 = document.querySelector('.buttonford')
const dropdownBtn7 = document.querySelector('.buttonseat')
const dropdownBtn6 = document.querySelector('.buttonoutrasmarcas')


function opelUsados() {
  const dropdownMenu17 = document.querySelector('.dropdown_menu17')
  if (dropdownMenu17.style.display === 'block') {
    dropdownMenu17.style.display = 'none';
    document.querySelector('.Icon2').style.display = 'none';
    document.querySelector('.icon-button17').style.display = 'inline-block';
  } else {
    dropdownMenu17.style.display = 'block';
    document.querySelector('.Icon2').style.display = 'block';
    document.querySelector('.icon-button17').style.display = 'none';
  }
}

function citroenUsados() {
  const dropdownMenu16 = document.querySelector('.dropdown_menu16')
  if (dropdownMenu16.style.display === 'block') {
    dropdownMenu16.style.display = 'none';
    document.querySelector('.Icon3').style.display = 'none';
    document.querySelector('.icon-button16').style.display = 'inline-block';
  } else {
    dropdownMenu16.style.display = 'block';
    document.querySelector('.Icon3').style.display = 'block';
    document.querySelector('.icon-button16').style.display = 'none';
  }
}

function peugeotUsados() {
  const dropdownMenu15 = document.querySelector('.dropdown_menu15')
  if (dropdownMenu15.style.display === 'block') {
    dropdownMenu15.style.display = 'none';
    document.querySelector('.Icon4').style.display = 'none';
    document.querySelector('.icon-button15').style.display = 'inline-block';
  } else {
    dropdownMenu15.style.display = 'block';
    document.querySelector('.Icon4').style.display = 'block';
    document.querySelector('.icon-button15').style.display = 'none';
  }
}

function dsAutomobilesUsados() {
  const dropdownMenu14 = document.querySelector('.dropdown_menu14')
  if (dropdownMenu14.style.display === 'block') {
    dropdownMenu14.style.display = 'none';
    document.querySelector('.Icon5').style.display = 'none';
    document.querySelector('.icon-button14').style.display = 'inline-block';
  } else {
    dropdownMenu14.style.display = 'block';
    document.querySelector('.Icon5').style.display = 'block';
    document.querySelector('.icon-button14').style.display = 'none';
  }
}

function fiatUsados() {
  const dropdownMenu13 = document.querySelector('.dropdown_menu13')
  if (dropdownMenu13.style.display === 'block') {
    dropdownMenu13.style.display = 'none';
    document.querySelector('.Icon6').style.display = 'none';
    document.querySelector('.icon-button13').style.display = 'inline-block';
  } else {
    dropdownMenu13.style.display = 'block';
    document.querySelector('.Icon6').style.display = 'block';
    document.querySelector('.icon-button13').style.display = 'none';
  }
}

function volkswagen() {
  const dropdownMenu12 = document.querySelector('.dropdown_menu12')
  if (dropdownMenu12.style.display === 'block') {
    dropdownMenu12.style.display = 'none';
    document.querySelector('.Icon7').style.display = 'none';
    document.querySelector('.icon-button12').style.display = 'inline-block';
  } else {
    dropdownMenu12.style.display = 'block';
    document.querySelector('.Icon7').style.display = 'block';
    document.querySelector('.icon-button12').style.display = 'none';
  }
}

function renault() {
  const dropdownMenu11 = document.querySelector('.dropdown_menu11')
  if (dropdownMenu11.style.display === 'block') {
    dropdownMenu11.style.display = 'none';
    document.querySelector('.Icon8').style.display = 'none';
    document.querySelector('.icon-button11').style.display = 'inline-block';
  } else {
    dropdownMenu11.style.display = 'block';
    document.querySelector('.Icon8').style.display = 'block';
    document.querySelector('.icon-button11').style.display = 'none';
  }
}

function nissan() {
  const dropdownMenu10 = document.querySelector('.dropdown_menu10')
  if (dropdownMenu10.style.display === 'block') {
    dropdownMenu10.style.display = 'none';
    document.querySelector('.Icon9').style.display = 'none';
    document.querySelector('.icon-button10').style.display = 'inline-block';
  } else {
    dropdownMenu10.style.display = 'block';
    document.querySelector('.Icon9').style.display = 'block';
    document.querySelector('.icon-button10').style.display = 'none';
  }
}

function kia() {
  const dropdownMenu9 = document.querySelector('.dropdown_menu9')
  if (dropdownMenu9.style.display === 'block') {
    dropdownMenu9.style.display = 'none';
    document.querySelector('.Icon10').style.display = 'none';
    document.querySelector('.icon-button9').style.display = 'inline-block';
  } else {
    dropdownMenu9.style.display = 'block';
    document.querySelector('.Icon10').style.display = 'block';
    document.querySelector('.icon-button9').style.display = 'none';
  }
}

function ford() {
  const dropdownMenu8 = document.querySelector('.dropdown_menu8')
  if (dropdownMenu8.style.display === 'block') {
    dropdownMenu8.style.display = 'none';
    document.querySelector('.Icon11').style.display = 'none';
    document.querySelector('.icon-button8').style.display = 'inline-block';
  } else {
    dropdownMenu8.style.display = 'block';
    document.querySelector('.Icon11').style.display = 'block';
    document.querySelector('.icon-button8').style.display = 'none';
  }
}

function seat() {
  const dropdownMenu7 = document.querySelector('.dropdown_menu7')
  if (dropdownMenu7.style.display === 'block') {
    dropdownMenu7.style.display = 'none';
    document.querySelector('.Icon12').style.display = 'none';
    document.querySelector('.icon-button7').style.display = 'inline-block';
  } else {
    dropdownMenu7.style.display = 'block';
    document.querySelector('.Icon12').style.display = 'block';
    document.querySelector('.icon-button7').style.display = 'none';
  }
}

function outrasMarcas() {
  const dropdownMenu6 = document.querySelector('.dropdown_menu6')
  if (dropdownMenu6.style.display === 'block') {
    dropdownMenu6.style.display = 'none';
    document.querySelector('.Icon13').style.display = 'none';
    document.querySelector('.icon-button6').style.display = 'inline-block';
  } else {
    dropdownMenu6.style.display = 'block';
    document.querySelector('.Icon13').style.display = 'block';
    document.querySelector('.icon-button6').style.display = 'none';
  }
}

function openWeb() {
  if (window.innerWidth > 1010) {
    window.open(' ');
  }
}



window.addEventListener('load', ()=>{
  startQueries()
})


const startQueries = () =>{
  const MediaQueryNew = matchMedia('(max-width: 1010px)')
  const ifMatchesChange = e =>{
    if (e.matches) {
      document.querySelector('.icon-button17').style.display = 'inline-block';
      document.querySelector('.boxIcon2').style.display = 'none';
      document.querySelector('.icon-button16').style.display = 'inline-block';
      document.querySelector('.boxIcon3').style.display = 'none';
      document.querySelector('.icon-button15').style.display = 'inline-block';
      document.querySelector('.boxIcon4').style.display = 'none';
      document.querySelector('.icon-button14').style.display = 'inline-block';
      document.querySelector('.boxIcon5').style.display = 'none';
      document.querySelector('.icon-button13').style.display = 'inline-block';
      document.querySelector('.boxIcon6').style.display = 'none';
      document.querySelector('.icon-button12').style.display = 'inline-block';
      document.querySelector('.boxIcon7').style.display = 'none';
      document.querySelector('.icon-button11').style.display = 'inline-block';
      document.querySelector('.boxIcon8').style.display = 'none';
      document.querySelector('.icon-button10').style.display = 'inline-block';
      document.querySelector('.boxIcon9').style.display = 'none';
      document.querySelector('.icon-button9').style.display = 'inline-block';
      document.querySelector('.boxIcon10').style.display = 'none';
      document.querySelector('.icon-button8').style.display = 'inline-block';
      document.querySelector('.boxIcon11').style.display = 'none';
      document.querySelector('.icon-button7').style.display = 'inline-block';
      document.querySelector('.boxIcon12').style.display = 'none';
      document.querySelector('.icon-button6').style.display = 'inline-block';
      document.querySelector('.boxIcon13').style.display = 'none';

      

      
      dropdownBtn17.addEventListener("click",opelUsados)
      dropdownBtn16.addEventListener("click",citroenUsados)
      dropdownBtn15.addEventListener("click",peugeotUsados)
      dropdownBtn14.addEventListener("click",dsAutomobilesUsados)
      dropdownBtn13.addEventListener("click",fiatUsados)
      dropdownBtn12.addEventListener("click",volkswagen)
      dropdownBtn11.addEventListener("click",renault)
      dropdownBtn10.addEventListener("click",nissan)
      dropdownBtn9.addEventListener("click",kia)
      dropdownBtn8.addEventListener("click",ford)
      dropdownBtn7.addEventListener("click",seat)
      dropdownBtn6.addEventListener("click",outrasMarcas)
      document.querySelector('.dropdown_menu17').style.display = 'none';
      document.querySelector('.dropdown_menu16').style.display = 'none';
      document.querySelector('.dropdown_menu15').style.display = 'none';
      document.querySelector('.dropdown_menu14').style.display = 'none';
      document.querySelector('.dropdown_menu13').style.display = 'none';
      document.querySelector('.dropdown_menu12').style.display = 'none';
      document.querySelector('.dropdown_menu11').style.display = 'none';
      document.querySelector('.dropdown_menu10').style.display = 'none';
      document.querySelector('.dropdown_menu9').style.display = 'none';
      document.querySelector('.dropdown_menu8').style.display = 'none';
      document.querySelector('.dropdown_menu7').style.display = 'none';
      document.querySelector('.dropdown_menu6').style.display = 'none';


    }else{
      document.querySelector('.icon-button17').style.display = 'none';
      document.querySelector('.boxIcon2').style.display = 'none';
      document.querySelector('.icon-button16').style.display = 'none';
      document.querySelector('.boxIcon3').style.display = 'none';
      document.querySelector('.icon-button15').style.display = 'none';
      document.querySelector('.boxIcon4').style.display = 'none';
      document.querySelector('.icon-button14').style.display = 'none';
      document.querySelector('.boxIcon5').style.display = 'none';
      document.querySelector('.icon-button13').style.display = 'none';
      document.querySelector('.boxIcon6').style.display = 'none';
      document.querySelector('.icon-button12').style.display = 'none';
      document.querySelector('.boxIcon7').style.display = 'none';
      document.querySelector('.icon-button11').style.display = 'none';
      document.querySelector('.boxIcon8').style.display = 'none';
      document.querySelector('.icon-button10').style.display = 'none';
      document.querySelector('.boxIcon9').style.display = 'none';
      document.querySelector('.icon-button9').style.display = 'none';
      document.querySelector('.boxIcon10').style.display = 'none';
      document.querySelector('.icon-button8').style.display = 'none';
      document.querySelector('.boxIcon11').style.display = 'none';
      document.querySelector('.icon-button7').style.display = 'none';
      document.querySelector('.boxIcon12').style.display = 'none';
      document.querySelector('.icon-button6').style.display = 'none';
      document.querySelector('.boxIcon13').style.display = 'none';

      document.querySelector('.dropdown_menu17').style.display = 'block';
      document.querySelector('.dropdown_menu16').style.display = 'block';
      document.querySelector('.dropdown_menu15').style.display = 'block';
      document.querySelector('.dropdown_menu14').style.display = 'block';
      document.querySelector('.dropdown_menu13').style.display = 'block';
      document.querySelector('.dropdown_menu12').style.display = 'block';
      document.querySelector('.dropdown_menu11').style.display = 'block';
      document.querySelector('.dropdown_menu10').style.display = 'block';
      document.querySelector('.dropdown_menu9').style.display = 'block';
      document.querySelector('.dropdown_menu8').style.display = 'block';
      document.querySelector('.dropdown_menu7').style.display = 'block';
      document.querySelector('.dropdown_menu6').style.display = 'block';

    }
  }
  MediaQueryNew.addListener(ifMatchesChange)
  ifMatchesChange(MediaQueryNew)

}

// MINHA SELECAO

function mSelecao(){

  let contemMostrar = document.querySelector('.areaPessoal').classList.contains("mostrar");
  let areaPessoal = document.querySelector('.areaPessoal');

  areaPessoal.classList.add('mostrar');

  if(contemMostrar == true)
  {
    areaPessoal.classList.remove('mostrar');
  } else {
    areaPessoal.classList.add('mostrar');
  }
}

//MENU MOBILE
const btnMobile = document.querySelector('.bt-menu-mobile');

function menuMobile(){
  const nav = document.querySelector('.nav-bar');
  nav.classList.toggle('menu-ativo');
}

btnMobile.addEventListener('click', menuMobile);

/////// FUNCIONALIDADE ADICIONAL //////////


function calcula(){

  var v1 = document.getElementById('1valor').value;
  var v2 = document.getElementById('2valor').value;
  var v3 = document.getElementById('3valor').value;
  var c = 0;
  var anos = 0;
  var aux = 0;
  var resultado = document.querySelector('#valorFinal');
  var mauEstado = document.getElementById('mau-estado');
  var bomEstado = document.getElementById('bom-estado');
  var muitobomEstado = document.getElementById('muito-bom-estado');

  anos = 2022 - v2;

  if(anos > 10)
  { 
    aux = anos - 10;
    anos = 10;
    console.log(aux);
  } else if(anos > 20)
  { 
    aux = anos - 10;
    anos = 10;
    console.log(aux);
  } else if(anos > 30)
  { 
    aux = anos - 10;
    anos = 10;
    console.log(aux);
  } else if(anos > 40)
  { 
    aux = anos - 10;
    anos = 10;
    console.log(aux);
  }

  if (v3 <= 30000)
  {
    v3 = 1;
  } else if(v3 > 30000 && v3 <= 70000)
  {
    v3 = 0.95;
  } else if (v3 > 70000)
  {
    v3 = 0.9;
  }

  resultado.innerHTML =  Math.round(v1 * (1 - (anos * 0.05 + aux * 0.04 )) * v3)+'€ ';
  mauEstado.innerHTML = Math.round((v1 * (1 - (anos * 0.05 + aux * 0.04 )) * v3) * 0.6)+'€ ';
  bomEstado.innerHTML = Math.round((v1 * (1 - (anos * 0.05 + aux * 0.04 )) * v3) * 1)+'€ ';
  muitobomEstado.innerHTML = Math.round((v1 * (1 - (anos * 0.05 + aux * 0.04 )) * v3) * 1.1)+'€ ';
}

function marcas(){

  let contemMostrar = document.querySelector('.marca').classList.contains("ativa");
  let areaPessoal = document.querySelector('.marca');

  areaPessoal.classList.add('ativa');

  if(contemMostrar == true)
  {
    areaPessoal.classList.remove('ativa');
  } else {
    areaPessoal.classList.add('ativa');
  }
}

function modelo(){

  let contemMostrar = document.querySelector('.modelo').classList.contains("ativa");
  let areaPessoal = document.querySelector('.modelo');

  areaPessoal.classList.add('ativa');

  if(contemMostrar == true)
  {
    areaPessoal.classList.remove('ativa');
  } else {
    areaPessoal.classList.add('ativa');
  }
}

///////MARCA E MODELO ESCOLHIDOS/////

var palavra = document.getElementById("nome-marca");
var palavra1 = document.getElementById("nome-modelo");
var palavra2 = document.getElementById("nome-marca1");
var palavra3 = document.getElementById("nome-modelo1");
var palavra4 = document.getElementById("nome-marca2");
var palavra5 = document.getElementById("nome-modelo2");
var mau_Estado = document.querySelector(".mau-estado");
var bom_Estado = document.querySelector(".bom-estado");
var muitoBom_Estado = document.querySelector(".muito-bom-estado");
var marca="MARCA: "
var modelo="MODELO: "

mau_Estado.addEventListener("mouseover", function() {
  var input = document.getElementById("palavra1").value;
  var input2 = document.getElementById("palavra2").value;
  
  palavra.innerHTML = marca + input;
  palavra1.innerHTML = modelo + input2;
})
mau_Estado.addEventListener("mouseout", function() {
  // Limpa o conteúdo da div
  palavra.innerHTML = " ";
  palavra1.innerHTML = " ";
});

bom_Estado.addEventListener("mouseover", function() {
  var input = document.getElementById("palavra1").value;
  var input2 = document.getElementById("palavra2").value;
  
  palavra2.innerHTML = marca + input;
  palavra3.innerHTML = modelo + input2;
})

bom_Estado.addEventListener("mouseout", function() {
  // Limpa o conteúdo da div
  palavra2.innerHTML = " ";
  palavra3.innerHTML = " ";
});

muitoBom_Estado.addEventListener("mouseover", function() {
  var input = document.getElementById("palavra1").value;
  var input2 = document.getElementById("palavra2").value;
  
  palavra4.innerHTML = marca + input;
  palavra5.innerHTML = modelo + input2;
})
muitoBom_Estado.addEventListener("mouseout", function() {
  // Limpa o conteúdo da div
  palavra4.innerHTML = " ";
  palavra5.innerHTML = " ";
});



function financiamento(){
  var btFinanc = document.getElementById('dinheiro-info');

 
  var vEmp = document.getElementById('v-emprestimo').value;
  var vDur = document.getElementById('v-duracao').value;
  var vI = document.getElementById('v-inicial').value;

  var resultado1 = document.getElementById('financiamentoTaxaJuro1');
  var resultado2 = document.getElementById('financiamentoTaxaJuro2');
  var resultado3 = document.getElementById('financiamentoTaxaJuro3');

  var spread1 = document.getElementById('financiamentoSpread1');
  var spread2 = document.getElementById('financiamentoSpread2');
  var spread3 = document.getElementById('financiamentoSpread3');

  var vFinal1 = document.getElementById('financiamentoValorMensal1');
  var vFinal2 = document.getElementById('financiamentoValorMensal2');
  var vFinal3 = document.getElementById('financiamentoValorMensal3');

  
  var s1 = Math.floor(Math.random() * 5)+1;
  var s2 = Math.floor(Math.random() * 5)+1;
  var s3 = Math.floor(Math.random() * 5)+1;
  

  if(btFinanc.style.display === 'none'){
    btFinanc.setAttribute("style", "display:flex");

    resultado1.innerHTML = 5 + '%';
    resultado2.innerHTML = 5 + '%';
    resultado3.innerHTML = 5 + '%';

    spread1.innerHTML = s1+'%';
    spread2.innerHTML = s2+'%';
    spread3.innerHTML = s3+'%';

    vFinal1.innerHTML = Math.round((vEmp - vI) * (1 + (s1/100))/vDur)+"€";
    vFinal2.innerHTML = Math.round((vEmp - vI) * (1 + (s2/100))/vDur)+"€";
    vFinal3.innerHTML = Math.round((vEmp - vI) * (1 + (s1/100))/vDur)+"€";
    


  } else {
    btFinanc.setAttribute("style", "display:none");
  }
}