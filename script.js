document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChangeTransitionStart: function () {
                // Fade out previous slide's images
                var previousSlide = this.slides[this.previousIndex];
                var previousSlideImages = previousSlide.querySelectorAll('img');
                previousSlideImages.forEach(function (img) {
                    img.style.opacity = 0;
                });
            },
            slideChangeTransitionEnd: function () {
                // Fade in current slide's images
                var currentSlide = this.slides[this.activeIndex];
                var currentSlideImages = currentSlide.querySelectorAll('img');
                currentSlideImages.forEach(function (img) {
                    img.style.opacity = 1;
                });
            }
        }
    });

    // Automatic image change after 3 seconds
    var timer = setInterval(function () {
        swiper.slideNext(); // Move to the next slide
    }, 3000);

    // Reset timer when arrow buttons are clicked
    swiper.on('slideChange', function () {
        clearInterval(timer);
        timer = setInterval(function () {
            swiper.slideNext();
        }, 3000);
    });
});
