(function (){ 
   'use strict'

   const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');
const slideWidth = slides[0].getBoundingClientRect().width;

let currentSlide = 0;

nextButton.addEventListener('click', e => {
    const totalSlides = slides.length;
    currentSlide = (currentSlide + 1) % totalSlides;
    track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
});

prevButton.addEventListener('click', e => {
    const totalSlides = slides.length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    let observer = new IntersectionObserver(handleSlideChange, options);

    slides.forEach(slide => {
        observer.observe(slide);
    });

    function handleSlideChange(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }
});

    })();

