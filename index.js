
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

    // ---------------------------------------------------------

    let mixerProducts = mixitup('.products-content',{
      selectors:{
        target: '.products-card'
      },
      animation:{
        duration: 300
      }
    });

    mixerProducts.filter('.delicacies');

    const linkProducts = document.querySelectorAll('.products-item');

    function activeProduct(){
      linkProducts.forEach(l => l.classList.remove('active-product'))
      this.classList.add('active-product')
    }

    linkProducts.forEach( l => l.addEventListener('click', activeProduct));


    // ---------------------------------------------------------------------------

     function scrollUp(){
      const scrollUp = document.querySelector('#scrollup');
      if(this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      } 
    }
      window.addEventListener('scroll', scrollUp);

      // ----------------------------------------------------------------------------

      const sections = document.querySelectorAll('section[id]')

      function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current => {
          const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58, 
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')
          

          if( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
            sectionsClass.classList.add('active-link')
          }else{
            sectionsClass.classList.remove('active-link')
          }
        })
      }
      window.addEventListener('scroll',scrollActive);


      // -------------------------------------------------------

      onload = () => {
       const load = document.querySelector('#load'); 

       setTimeout(()=>{
        load.style.display = 'none'
       }, 2500)
      }