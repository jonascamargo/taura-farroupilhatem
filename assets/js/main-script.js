const mainMenu = document.querySelector('.main-header, .main-header-clean')

// vericia se a pagina esta no topo
const isScrolling = (() => {
    const isScrolled = window.scrollY > 0

    mainMenu.classList.toggle('scrolled', isScrolled)
})

window.addEventListener('scroll', isScrolling )
isScrolling()

// verifica se a janela chegou a 1024px MOBILE
const isMobile = (() => {
    const isMobile = window.innerWidth <= 1024

    if( isMobile ){
        mainMenu.classList.remove('desk')
        mainMenu.classList.add('mobile')
    }
    else {
        mainMenu.classList.remove('mobile')
        mainMenu.classList.add('desk')
    }
})

addEventListener( "resize", isMobile )
isMobile()