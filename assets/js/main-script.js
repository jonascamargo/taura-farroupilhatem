const body = document.querySelector('body')
const mainMenu = document.querySelector('.main-header, .main-header-clean')
const menuSandwich = document.querySelector('.header-ico-mob')


// --- Vericia se a pagina esta no topo
const isScrolling = (() => {
    const isScrolled = window.scrollY > 0

    mainMenu.classList.toggle('scrolled', isScrolled)
    
    // fecha o menu caso esteja aberto NO MODO MOBILE
    if( mainMenu.classList.contains('mobile') && mainMenu.classList.contains('open') ){ menuSandwich.click() }
})

if( mainMenu ){
    window.addEventListener( 'scroll', isScrolling )
    isScrolling()
}



// --- Verifica se a janela chegou a 1024px MOBILE
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

if( mainMenu ){
    addEventListener( "resize", isMobile )
    isMobile()
}




// ////////// TROCA ABAS
const tabs = document.querySelectorAll(".tab-menu > *")

function addActive( target ){
    target.parentElement.querySelectorAll('*').forEach( sis => sis.classList.remove( 'active' ) )
    target.classList.add( 'active' )
}

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const target = e.currentTarget;
        const idTarget = '#' + e.currentTarget.dataset.tab,
              tabTarget = document.querySelector(idTarget)

        addActive( target )
        addActive( tabTarget )
    })
})




// ////////// MODAL
const modalStage   = document.querySelector('.modal-stage')
const modalCurtain = document.querySelector('.curtain')
const modalCallers = document.querySelectorAll('[data-modal]')

if( modalStage ){
    // --- abrindo
    const modalOpen = ((e) => {
        const id    = e.dataset.modal,
              modal = document.querySelector( '#'+id )
        
        // ação para modal -> EXCLUIR SERVIÇO
        if( id === 'excluir-servico' ){
            const field_title  = document.querySelector('#titulo-servico')
            const id_servico   = e.dataset.idservico
            const name_servico = (field_title) ? field_title.value : e.parentElement.querySelector('a')?.innerText

            document.querySelector('.modal_nome_servico').textContent = name_servico
        }
        
        body.classList.add('modalOpening')
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

        body.classList.remove('modalOpening')
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

    // --- adiciona evento para remover o modal
    modalCurtain.addEventListener('click', (e) => { modalClose() })

    modalCallers.forEach(btn => {
        btn.addEventListener('click', function(e){
            e.preventDefault()

            modalOpen( e.currentTarget )
        })
    })

    // --- botao pra fechar modal
    document.querySelector('.modalCloser').addEventListener('click', () => { modalClose() })
    document.querySelector('.modal-close').addEventListener('click', () => { modalClose() })

    // --- ESC para fechar modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modalStage.classList.contains('show')) modalClose()
    })
}


// --- abre fecha menu mobile
if( mainMenu ){
    menuSandwich.addEventListener( 'click', () => { mainMenu.classList.toggle('open') } )
}




// ////////// SERVIÇOS - FILTRO

const filterBox     = document.querySelector('.filter-box')
const filterBtnOpen = document.querySelector('.filter-buttom')
const filterList    = document.querySelector('.filter-group')

// --- abre e fecha o filtro no mobile
if( filterBtnOpen ){
    filterBtnOpen.addEventListener('click', () => {
        filterBox.classList.toggle('open')
    })
}




// ////////// FORMULARIO

const validators = {
    email: (input) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value),
    number: (input) => !isNaN(input.value) && input.value.trim() !== '',
    default: (input) => input.value.trim() !== ''
}

// --- tirar classe error quando começar a digitar
function keyUP(){
    this.closest('fieldset').classList.remove('error')
    this.removeEventListener('keyup', keyUP)
}

// --- evento submit
document.addEventListener('submit', (event) => {
    // barra o evento padrao do FORM
    event.preventDefault()

    let isValid = true

    const form    = event.target, // o formulario
          fields  = Array.from( form.querySelectorAll('input, textarea, select') ) // array com os campos
    
    for(const field of fields) {
        // se tiver required E vazio
        if( field.hasAttribute('required') && field.value.trim() === '' ) isValid = false
        // se for email E invalido
        if( field.type === 'email' && !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(field.value) ) isValid = false
        // se o campo indicado em data-confirm é igual
        if( field.hasAttribute('data-confirm') && ( field.value !== document.querySelector(`[name="${field.dataset.confirm}"]`).value ) )  isValid = false

        if( !isValid ){
            field.addEventListener('keyup', keyUP)
            field.focus()
            field.closest('fieldset').classList.add('error')

            break
        }
    }
    
    // executar o submit se estiver tudo certo
    if( isValid ) event.target.submit()
})




// ////////// SLIDERs

const swiperWrapper = document.querySelectorAll('.swiper-wrapper');

if( swiperWrapper.length > 0 ){

    const swiper = new Swiper('.depoimentos-slide', {
        loop: true,
        grabCursor: true,
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    })

    const heroSwiper = new Swiper('.hero-swiper', {
        effect: "fade",
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    })

}



// editor de texto personalizado
const textEditor = document.querySelectorAll('.textEditor')

if(textEditor ){
    textEditor.forEach(editor => {
        // Dentro de cada editor, pegar os botões e a área de texto
        const txEd_output  = editor.querySelector('.textEditor-input')
        const txEd_buttons = editor.querySelector('.textEditor-menu').querySelectorAll('button')
        const txEd_hidden  = editor.querySelector('input[type="hidden"]')
        
        txEd_buttons.forEach(btn => {
            btn.addEventListener('click', (b) => {
                b.preventDefault()

                const button = b.currentTarget
                const cmd    = button.dataset.command

                // Executar o comando correspondente
                document.execCommand(cmd, false, null)
            })
        })

        // atualiza input:hidden com o conteudo do editor
        txEd_output.addEventListener('focusout', () => {
            console.log('saiu!!')

            txEd_hidden.value = txEd_output.innerHTML
        })
    })
}


// atualiza o preview no upload de imagem
const imgUploads = document.querySelectorAll('.input-img')

if( imgUploads ){
    imgUploads.forEach(upImg => {
        const fileInput  = upImg.querySelector('.input-img-thumb')
        const imgPreview = upImg.querySelector('.input-img img')
        
        // Quando um arquivo de imagem é selecionado
        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0]

            if( file && file.type.startsWith('image/') ) {
                // Criar um URL para a imagem
                const reader = new FileReader()
                
                reader.onload = function(e) {
                    // Atualizar o src da imagem com o resultado da leitura
                    imgPreview.src = e.target.result;
                    upImg.classList.add('up')
                    
                }

                reader.readAsDataURL( file )
            }
        })
    })
}


// remove imagem cadastrada
const btns_remove_img = document.querySelectorAll('.img-remover')

if( btns_remove_img ){
    btns_remove_img.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
    
            const target = e.currentTarget
            const myImg  = target.parentElement.querySelector('img')
            const parent = target.closest('.input-img')
            
            if(myImg){
                // myImg.remove()
                myImg.removeAttribute('src')
                parent.classList.remove('up')
            }
        })
    })
}
