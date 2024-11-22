const mainMenu = document.querySelector('.main-header, .main-header-clean')
const menuSandwich = document.querySelector('.header-ico-mob')

// vericia se a pagina esta no topo
const isScrolling = (() => {
    const isScrolled = window.scrollY > 0

    mainMenu.classList.toggle('scrolled', isScrolled)
    
    // fecha o menu caso esteja aberto NO MODO MOBILE
    if( mainMenu.classList.contains('mobile') && mainMenu.classList.contains('open') ){ menuSandwich.click() }
})

window.addEventListener( 'scroll', isScrolling )
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



// abrindo e fechando abas
const tabs = document.querySelectorAll(".tab-menu > *")

function addActive( target ){
    target.parentElement.querySelectorAll('*').forEach( sis => sis.classList.remove( 'active' ) )
    target.classList.add( 'active' )
}

tabs.forEach(tab => {
    tab.addEventListener('click',(e) => {
        const idTarget = '#' + e.currentTarget.dataset.tab,
              tabTarget = document.querySelector(idTarget)

        addActive( e.target )
        addActive( tabTarget )
    })
})



// MODAL
const modalStage   = document.querySelector('.modal-stage')
const modalCurtain = document.querySelector('.curtain')
const modalCallers = document.querySelectorAll('[data-modal]')

// --- abrindo
const modalOpen = ((e) => {
    const id    = e.dataset.modal,
          modal = document.querySelector( '#'+id )
    
    // expoe o container do modal
    modalStage.classList.add('show')
    // prepara o modal pra animar
    modal.classList.add('wait')
    // Espera até o próximo ciclo de animação para exibir o modal
    requestAnimationFrame(() => {
        // Espera o tempo de delay para exibir a janela do modal
        setTimeout(() => {
            modal.classList.add('show')
        }, 300)
    })
})

// --- fechando
const modalClose = (() => {
    const modal = document.querySelector('.modal.wait.show')

    // animando a saida do modal
    modal.classList.add('out')
    // Espera até o próximo ciclo de animação limpar tudo
    requestAnimationFrame(() => {
        setTimeout(() => {
            modal.classList.remove('wait', 'show', 'out')
            modalStage.classList.remove('show')
        }, 300)
    })
})

// adiciona evento para remover o modal
modalCurtain.addEventListener('click', (e) => {
    modalClose()
})

modalCallers.forEach(btn => {
    btn.addEventListener('click', function(e){
        modalOpen( e.currentTarget )
    })
})


// abre fecha menu mobile
menuSandwich.addEventListener( 'click', () => { mainMenu.classList.toggle('open') } )
