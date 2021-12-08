/* Troca de ícones e interage com o menu */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show');
  })
}

/* links do menu escondem a tela dele */
const links = document.querySelectorAll('nav ul li a');

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show');
  })
}

/* Carrossel */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

/* Carregamento automático de itens da página de acordo com o scroll */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #events .image, #events .text,
  #testemonials header, #testemonials .testemonials,
  #contact .links, #contact .text,
  footer .brand, footer .social`,
  {interval: 100}
)

/* back2top */
const back2TopButton = document.querySelector('.back2top')

function back2Top(){
  
  if(window.scrollY >= 600){
    back2TopButton.classList.add('show');
  }else{
    back2TopButton.classList.remove('show');
  }
}

/* Scroll na página */  
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderScroll(){
  
  if(window.scrollY >= navHeight){
    header.classList.add('scroll');
  }else{
    header.classList.remove('scroll')
  }
}

/* Menu ativo de acordo seção visível na pagina */
const sections = document.querySelectorAll('main section[id]');/* forma de pegar o que contem nas section nesse caso */

function activatMenuAtcurrent(){

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 /* Pega o deslocamento do eixo Y, e soma com 8 partes da tela da janela divida em 4 */
  for(const section of sections){
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd){
      document
        .querySelector('nav ul li a[href*='+ sectionId +']')
        .classList.add('active')
      
    }else{
      document
        .querySelector('nav ul li a[href*='+ sectionId +']')
        .classList.remove('active')

    }
  }
}

function iniciaModal(params) {
  const modal = document.getElementById(params);
  if(modal){
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
      if(e.target.id == params || e.target.className == 'fechar'){
        modal.classList.remove('mostrar');
      }
  })
}}

const btn = document.querySelector('.button');

btn.addEventListener('click', () => iniciaModal('modalCadastro'));

function clicou() {
  iniciaModal('modalCadastro');
}

/* When scroll */
window.addEventListener('scroll', function(){
  changeHeaderScroll()
  back2Top()
  activatMenuAtcurrent()
})

