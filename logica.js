////////////////////////////////*dropdown buttons*//////////////////////////////////////


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

const dropdownMenuVerMais = document.querySelector('.dropdownmenu')
const iconButton = document.querySelector('.iconbutton')
const icon = document .querySelector('.Icon1')
const dropdownMenuVerMais1 = document.querySelector('.dropdownmenu1')
const iconButton1 = document.querySelector('.iconbutton1')
const icon1 = document .querySelector('.Icon')


document.getElementById('boxButton1').addEventListener('click',function() {
        if(this.innerHTML === 'Ver menos'){
            this.innerHTML = 'Ver mais'
            dropdownMenuVerMais.classList.add('vermaishide')
            iconButton.classList.add('iconbutton')
            icon.classList.add('Icon1')
        }else {
            this.innerHTML = 'Ver menos';
            dropdownMenuVerMais.classList.remove('vermaishide')
            iconButton.classList.remove('iconbutton')
            icon.classList.remove('Icon1')
        }
})

document.getElementById('boxButton').addEventListener('click',function() {
        if(this.innerHTML === 'Ver menos'){
            this.innerHTML = 'Ver mais'
            dropdownMenuVerMais1.classList.add('vermaishide1')
            iconButton1.classList.add('iconbutton1')
            icon1.classList.add('Icon')
        }else {
            this.innerHTML = 'Ver menos';
            dropdownMenuVerMais1.classList.remove('vermaishide1')
            iconButton1.classList.remove('iconbutton1')
            icon1.classList.remove('Icon')
        }
})


/////////////////////////////////*buttons comparar*////////////////////////////////
const button = document.getElementById("circle-button");
const button1 = document.getElementById("circle-button1");
const button2 = document.getElementById("circle-button2");
const button3 = document.getElementById("circle-button3");
const button4 = document.getElementById("circle-button4");
const button5 = document.getElementById("circle-button5");
const button6 = document.getElementById("circle-button6");
const button7= document.getElementById("circle-button7");
const button8 = document.getElementById("circle-button8");

button.addEventListener("click", function() {
  let isChanged = false;
  return function() {
    if (isChanged) {
      button.style.backgroundColor = "white";
      isChanged = false;
    } else {
      button.style.backgroundColor = "#13d0ca";
      isChanged = true;
    }
  };
}());

button1.addEventListener("click", function() {
  let isChanged = false;
  return function() {
    if (isChanged) {
      button1.style.backgroundColor = "white";
      isChanged = false;
    } else {
      button1.style.backgroundColor = "#13d0ca";
      isChanged = true;
    }
  };
}());

button2.addEventListener("click", function() {
  let isChanged = false;
  return function() {
    if (isChanged) {
      button2.style.backgroundColor = "white";
      isChanged = false;
    } else {
      button2.style.backgroundColor = "#13d0ca";
      isChanged = true;
    }
  };
}());

button3.addEventListener("click", function() {
  let isChanged = false;
  return function() {
    if (isChanged) {
      button3.style.backgroundColor = "white";
      isChanged = false;
    } else {
      button3.style.backgroundColor = "#13d0ca";
      isChanged = true;
    }
  };
}());

button4.addEventListener("click", function() {
  let isChanged = false;
  return function() {
    if (isChanged) {
      button4.style.backgroundColor = "white";
      isChanged = false;
    } else {
      button4.style.backgroundColor = "#13d0ca";
      isChanged = true;
    }
  };
}());

button5.addEventListener("click", function() {
  let isChanged = false;
  return function() {
    if (isChanged) {
      button5.style.backgroundColor = "white";
      isChanged = false;
    } else {
      button5.style.backgroundColor = "#13d0ca";
      isChanged = true;
    }
  };
}());

button6.addEventListener("click", function() {
  let isChanged = false;
  return function() {
    if (isChanged) {
      button6.style.backgroundColor = "white";
      isChanged = false;
    } else {
      button6.style.backgroundColor = "#13d0ca";
      isChanged = true;
    }
  };
}());

button7.addEventListener("click", function() {
  let isChanged = false;
  return function() {
    if (isChanged) {
      button7.style.backgroundColor = "white";
      isChanged = false;
    } else {
      button7.style.backgroundColor = "#13d0ca";
      isChanged = true;
    }
  };
}());

button8.addEventListener("click", function() {
  let isChanged = false;
  return function() {
    if (isChanged) {
      button8.style.backgroundColor = "white";
      isChanged = false;
    } else {
      button8.style.backgroundColor = "#13d0ca";
      isChanged = true;
    }
  };
}());


/**************open website ************/
function abrirPagina() {
  window.location.href = 'http://www.google.com/';
}

//////************select the list********////////

const pages = document.querySelectorAll('.page');
let currentPage = 0;

const prevButton = document.getElementById('prev1');
const nextButton = document.getElementById('next1');
const pageButtons = document.querySelectorAll('.page-button');

prevButton.addEventListener('click', showPrevPage);
nextButton.addEventListener('click', showNextPage);
pageButtons.forEach(button => button.addEventListener('click', showPage));

showPage();

function showPrevPage() {
  currentPage--;
  if (currentPage < 0) {
    currentPage = pages.length - 1;
  }
  showPage();
}

function showNextPage() {
  currentPage++;
  if (currentPage > pages.length - 1) {
    currentPage = 0;
  }
  showPage();
}

function showPage(e) {
  if (e) {
    currentPage = parseInt(e.target.id) - 1;
  }

  pages.forEach((page, index) => {
    page.classList.remove('selected');
    pageButtons[index].classList.remove('selected');
    pageButtons[index].style.backgroundColor = "#f7f7f7";
    if (index === currentPage) {
      page.classList.add('selected');
      pageButtons[index].classList.add('selected');
      pageButtons[index].style.backgroundColor = "#13d0ca";
    }
  });
}
///////////////////////////////////////////////////////////////////////////////

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







let slideIndex = 1;
slideShow(slideIndex);

function avanca(n) {
  slideShow(slideIndex += n);
}

function atual(n) {
  slideShow(slideIndex = n);
}

function slideShow(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
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

