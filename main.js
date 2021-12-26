/* Interação com o menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

/* Interação com os itens do menu*/
const links = document.querySelectorAll('nav ul li a')

/* Botão voltar para o topo */
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')

    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

/* Mudar o header da página */
function chanceHeaderWhenScroll (){
    const header = document.querySelector("#header")
    const navHeight = header.offsetHeight
    
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}

window.addEventListener('scroll', function (){
    backToTop()
    chanceHeaderWhenScroll()
})


for (const element of toggle) {
   element.addEventListener('click', function (){
       nav.classList.toggle('show')
   }) 
}

for (const link of links) {
    link.addEventListener('click', function (){
        nav.classList.remove('show')
    })
}

/* Apresentando os depoimentos em forma de slide. */
const swiper = new Swiper('.swiper-container', {
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

/* Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal ({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
     #about .image, #about .text,
     #services header, #services .card,
     #testimonials header, #testimonials .testimonial,
     #contact .text, #contact .links,
     footer .brand, footer .social
    `, { interval: 100 }
)
