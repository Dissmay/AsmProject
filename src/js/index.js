$(function(){

 $('.reviews__slide_height').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
   responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },      
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },      
    }
  ]
});


 $('.ourClients__ul').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
   responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },      
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },      
    }
  ]
});


var btnCase = document.querySelector('.cases__button');
var modalContainer = document.querySelector('.modal-container');
var closerModalContainer = document.querySelector('.modal-container__closer');
var modalContainerMain = document.querySelector('.modal-container__main');
var popap__form = document.querySelector('.popap__form');
btnCase.addEventListener('click', function(){
  modalContainer.classList.remove('d-n');
});

closerModalContainer.addEventListener('click', function(){
  modalContainer.classList.add('d-n');
});
modalContainer.addEventListener('click', function(e){
  var target = e.target;
   if(target === modalContainer){
    modalContainer.classList.add('d-n');
   }
});


});