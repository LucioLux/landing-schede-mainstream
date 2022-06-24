/* ======= Navbar autohide ======= */

document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');

  if(el_autohide){

    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;

    });
    // window.addEventListener

  }
  // if

});
// DOMContentLoaded  end

/* End Navabar autohide */


// Plyr player
// document.addEventListener('DOMContentLoaded', () => {
//     const controls = [
//         'play-large', // The large play button in the center
//         'play', // Play/pause playback
//         'progress', // The progress bar and scrubber for playback and buffering
//         'current-time', // The current time of playback
//         'duration', // The full duration of the media
//         'mute', // Toggle mute
//         'volume', // Volume control
//         'fullscreen', // Toggle fullscreen
//     ];

//     const player = new Plyr('#player', {controls});

// });
/* End Plyr player */

// SLIDER
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 16,
    autoplay: {
      delay: 3000,
    },
    // init: false,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
  
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 16,
        autoplay: {
          delay: 3000,
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
        autoplay: {
          delay: 10000,
        },
      },
  
      992: {
        slidesPerView: 4,
        spaceBetween: 16,
        autoplay: {
          delay: 10000,
        },
      },
  
    }
  });