// let close = document.querySelector('.cross');
// close.addEventListener('click', function(){
//   close.classList.toggle('active');
// });
// document.querySelector('.burger__button').addEventListener('click', function(e) {
//   e.preventDefault();  
//   document.querySelector('.header__menu').classList.toggle('header__menu-active');
//  })
// document.querySelector('.header__list a').click(function(e) {
//   e.preventDefault();  
//    document.querySelector('.header__menu').classList.toggle('header__menu-active');
//    })


   let menuBtn = document.querySelector('.burger__button');
  let menu = document.querySelector('.header__menu');
  menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

let close = document.querySelector('.cross');
close.addEventListener('click', function (){
close.classList.toggle('active');
})