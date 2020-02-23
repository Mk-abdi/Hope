var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


// custom js
const nav_display = document.getElementById('nav-display');
const nav = document.querySelector('.nav-list'); 
const bd = document.querySelector('body');
const smallNav = document.getElementById('mobile-nav');
// nav_display.addEventListener('click', () => {
//   bd.style.opacity = '.3';
//   nav.style.opacity = '1';
//   nav.classList.toggle('display');
// });
 

let mobileNav = `
<ul class="nav-mobile">
<li>
  <a href="index.html" class="nav-link">Home</a>
</li>
<li>
  <a href="Contact.html" class="nav-link">Contact</a>
</li>
<li>
  <a href="About.html" class="nav-link">About</a>
</li>
<li>
  <a href="Location.html" class="nav-link">Location</a>
</li> 
</ul>
`

if(bd.clientWidth < 731){
 smallNav.innerHTML = mobileNav;
}  
