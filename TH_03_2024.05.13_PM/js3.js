$(document).ready(function(){
  let slideIndex = 0;
  let timer;

  function showSlides() {
    let slides = $(".slide");
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides.hide();
    slides.eq(slideIndex - 1).show();
    timer = setTimeout(showSlides, 5000);
  }

  showSlides();

  $(".next").click(function() {
    clearTimeout(timer);
    let slides = $(".slide");
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides.hide();
    slides.eq(slideIndex - 1).show();
  });

  $(".prev").click(function() {
    clearTimeout(timer);
    let slides = $(".slide");
    slideIndex--;
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    slides.hide();
    slides.eq(slideIndex - 1).show();
  });
});