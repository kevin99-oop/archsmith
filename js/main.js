(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


})(jQuery);

// Function to update the active class based on scroll position
function updateActiveNavLink() {
    // Get all the nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Iterate over each nav link
    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').slice(1);
        const section = document.getElementById(sectionId);

        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            // If the section is in the viewport, add active class
            link.classList.add('active');
        } else {
            // Otherwise, remove active class
            link.classList.remove('active');
        }
    });
}
var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider");

function moveDivisor() {
    handle.style.left = slider.value + "%";
    divisor.style.width = slider.value + "%";
}

window.onload = function () {
    moveDivisor();
};
// Add event listener to window scroll event
window.addEventListener('scroll', updateActiveNavLink);

// Call the function on page load to set initial active state
updateActiveNavLink();

// Brand carousel
$('.brand-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    dots: false,
    items: 5,
    dotsData: true,
    responsive: {
        0: {
            items: 2 // Display 1 item on small screens (less than 576px)
        },
        576: {
            items: 2 // Display 2 items on medium screens (576px and up)
        },
        768: {
            items: 3 // Display 3 items on tablets and larger screens (768px and up)
        },
        992: {
            items: 4 // Display 4 items on medium desktops and larger screens (992px and up)
        },
        1200: {
            items: 5 // Display 5 items on large desktops and larger screens (1200px and up)
        }
    }
});
