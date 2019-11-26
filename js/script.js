//выподающее меню
menu.onclick = function myFunction(){
    var x = document.getElementById("myTopnav");

    if(x.className === "topnav") {
        x.className += " responsive";
    }else{
        x.className = "topnav";
    }
};


//кнопка "Наверх"
var $btnTop = $(".btn-top");
$(window).on("scroll", function(){
    if ($(window).scrollTop() >= 90) {
        $btnTop.fadeIn();
    } else{
        $btnTop.fadeOut();
    }
});
$btnTop.on("click", function(){
    $("html, body").animate({scrollTop:0}, 900);
});


//слайдер простой автоматический
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}


//слайдер с кнопками
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    
    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}