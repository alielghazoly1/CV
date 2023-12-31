const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

        if(navToggle){
            navToggle.addEventListener('click', ()=>{
                navMenu.classList.add('show-menu')
            })
        }
        if(navClose){
            navClose.addEventListener('click', ()=>{
                navMenu.classList.remove('show-menu')
            })
        }
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
// skills
const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader= document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass= this.parentNode.className

    for(i=0; i <skillsContent.length;i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills)
})

// start services

const modelViews = document.querySelectorAll('.services__modal'),
        modelBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close')

let modal =function(modalClick){
    modelViews[modalClick].classList.add('active-modal')
}
modelBtns.forEach((modelBtn, i)=>{
    modelBtn.addEventListener('click', ()=>{
        modal(i)
    })
})
modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click', ()=>{
        modelViews.forEach((modelView)=>{
            modelView.classList.remove('active-modal')
        })
    })
})
