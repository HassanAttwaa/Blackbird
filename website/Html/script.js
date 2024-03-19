document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal', // Specify horizontal direction
        loop: true, // Enable loop mode
        speed: 800, // Set transition speed to 600 milliseconds
        effect: 'fade', // Use the slide effect for transitions

        // If you need pagination
        pagination: {
            el: '.swiper-pagination', // Selector for pagination container
            clickable: true, // Enable clickable pagination
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next', // Selector for next button
            prevEl: '.swiper-button-prev', // Selector for previous button
        },
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



let slideIndex = 0;

function moveSlider(n) {
    const slider = document.querySelector('.slider');
    const cardWidth = document.querySelector('.card').offsetWidth;
    const sliderWidth = slider.offsetWidth;
    const cardsPerRow = 5; // Number of cards per row
    const slides = document.querySelectorAll('.content .card');
    const totalSlides = slides.length;

    // Update slide index
    slideIndex += n * cardsPerRow;

    // Ensure slide index remains within bounds
    if (slideIndex < 0) {
        slideIndex = 0;
    } else if (slideIndex >= totalSlides) {
        slideIndex = totalSlides - 1;
    }

    // Calculate translate value
    const translateValue = -Math.min(slideIndex, totalSlides - cardsPerRow) * cardWidth;

    // Apply transform to slider
    slider.style.transform = `translateX(${translateValue}px)`;
}
