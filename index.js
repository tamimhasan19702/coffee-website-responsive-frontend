
// ---------------show-menu-----------------------------

const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close');


      if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu')
        })
      }

      if(navClose){
        navClose.addEventListener('click',()=>{
             navMenu.classList.remove('show-menu')
        })
      }

      const navLink = document.querySelectorAll('.nav-link')

      function linkAction(){
        const navMenu = document.querySelector('#nav-menu')
        navMenu.classList.remove('show-menu')
      }
      navLink.forEach(n => n.addEventListener('click',linkAction));


     function scrollHeader(){
      const header = document.querySelector('#header');
      if(this.scrollY >= 100) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header')
      } 
    }
  
    window.addEventListener('scroll',scrollHeader);