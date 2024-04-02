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
            },
            slideChangeTransitionEnd: function () {
                // Fade in current slide's images
                var currentSlide = this.slides[this.activeIndex];
                var currentSlideImages = currentSlide.querySelectorAll('img');
                currentSlideImages.forEach(function (img) {
                    img.style.opacity = 0;
                });
            },
        },
    });

    // Automatic image change after 3 seconds
    var timer = setInterval(function () {
        swiper.slideNext(); // Move to the next slide
    }, 3500);

    // Reset timer when arrow buttons are clicked
    swiper.on('slideChange', function () {
        clearInterval(timer);
        timer = setInterval(function () {
            swiper.slideNext();
        }, 3000);
    });
});


// Search by button
document.addEventListener('DOMContentLoaded', function () {
    // Event listener for the search button
    document.getElementById('search-button').addEventListener('click', function () {
        // Get the search input value
        const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();

        // Get all elements with text content
        const elementsWithText = document.querySelectorAll('*:not(script):not(style)');
        
        // Flag to check if the search term is found
        let found = false;

        // Loop through each element and check if it contains the search term
        elementsWithText.forEach(element => {
            if (element.textContent.toLowerCase().includes(searchTerm)) {
                // Scroll to the element containing the search term
                element.scrollIntoView({ behavior: 'smooth' });
                // Set the flag to true indicating the search term is found
                found = true;
                // Exit the loop early if the search term is found
                return;
            }
        });

        // If the search term is not found, display an alert
        if (!found) {
            alert('No matching results found.');
        }
    });
});


// Search by keyup
// document.addEventListener('DOMContentLoaded', function () {
//     // Event listener for the search input field
//     document.getElementById('search-input').addEventListener('keyup', function (event) {
//         // Get the search input value
//         const searchTerm = event.target.value.trim().toLowerCase();

//         // Get all elements with text content
//         const elementsWithText = document.querySelectorAll('*:not(script):not(style)');
        
//         // Flag to check if the search term is found
//         let found = false;

//         // Loop through each element and check if it contains the search term
//         elementsWithText.forEach(element => {
//             if (element.textContent.toLowerCase().includes(searchTerm)) {
//                 // Scroll to the element containing the search term
//                 element.scrollIntoView({ behavior: 'smooth' });
//                 // Set the flag to true indicating the search term is found
//                 found = true;
//                 // Exit the loop early if the search term is found
//                 return;
//             }
//         });

//         // If the search term is not found, display an alert
//         if (!found) {
//             alert('No matching results found.');
//         }
//     });
// });



// Search by complete the word
// document.addEventListener('DOMContentLoaded', function () {
//     // Define a variable to hold the timer ID
//     let searchTimer;

//     // Event listener for the search input field
//     document.getElementById('search-input').addEventListener('keyup', function (event) {
//         // Clear the previous timer
//         clearTimeout(searchTimer);

//         // Set a new timer to execute the search function after 500 milliseconds (adjust as needed)
//         searchTimer = setTimeout(function () {
//             // Get the search input value
//             const searchTerm = event.target.value.trim().toLowerCase();

//             // Get all elements with text content
//             const elementsWithText = document.querySelectorAll('*:not(script):not(style)');
            
//             // Flag to check if the search term is found
//             let found = false;

//             // Loop through each element and check if it contains the search term
//             elementsWithText.forEach(element => {
//                 if (element.textContent.toLowerCase().includes(searchTerm)) {
//                     // Scroll to the element containing the search term
//                     element.scrollIntoView({ behavior: 'smooth' });
//                     // Set the flag to true indicating the search term is found
//                     found = true;
//                     // Exit the loop early if the search term is found
//                     return;
//                 }
//             });

//             // If the search term is not found, display an alert
//             if (!found) {
//                 alert('No matching results found.');
//             }
//         }, 500); // Adjust the delay time as needed
//     });
// });


// send contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    var firstName = document.getElementById('first-name').value.trim();
    var surname = document.getElementById('surname').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (firstName === '' || surname === '' || phone === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission if fields are not filled
    } else {
        // Form is valid, allow submission
        // You can also add additional validation here if needed
        // This example submits the form using the default form action
    }
});
