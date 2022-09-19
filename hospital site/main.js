const navItems = document.querySelector('#nav_items')
const openNavBtn = document.querySelector('#open_nav-btn')
const closeNavBtn = document.querySelector('#close_nav-btn')


openNavBtn.addEventListener('click', ()=>{
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
})

const closeNav = () =>{
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}
closeNavBtn.addEventListener('click', closeNav)


//close nav menu when a menu item is clicked

if(window.innerWidth < 1024){
  document.querySelectorAll('#nav_items li a').forEach(navItem => {
    navItem.addEventListener('click', () => {
      closeNav();
    })
  })
}

//change the navbar color on scroll

window.addEventListener('scroll', ()=>{
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 1)
})

// TESTIMONIL SECTION SWIPPER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    //Responsive Breakpoints
    breakpoints: {
      //when windows width is >= 600px(for tablets)
      600:{
        slidesPerView: 2
      },
   
      //when windows width is >= 600px(for tablets)
      1024:{
        slidesPerView: 3
      }
    }
  });