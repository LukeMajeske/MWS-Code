$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      dots:true
  });
});

function dropdown() {
    document.getElementById('toggle-dropdown').classList.toggle('show');
    
}