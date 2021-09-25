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
  slidesPerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
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
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  {interval: 100}
)

/* back2top */
function back2Top(){
  const back2TopButton = document.querySelector('.back2top')
  
  if(window.scrollY >= 600){
    back2TopButton.classList.add('show');
  }else{
    back2TopButton.classList.remove('show');
  }
}

/* Scroll na página */  
function changeHeaderScroll(){
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  
  if(window.scrollY >= navHeight){
    header.classList.add('scroll');
  }else{
    header.classList.remove('scroll')
  }
}

/* When scroll */
window.addEventListener('scroll', function(){
  changeHeaderScroll()
  back2Top()
})