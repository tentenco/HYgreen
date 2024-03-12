SmoothScroll({ 
   frameRate: 150,
    animationTime: 1000,
    stepSize: 100,
    pulseAlgorithm: 1,
    pulseScale: 4,
    pulseNormalize: 1,
    accelerationDelta: 50,
    accelerationMax: 3,
    keyboardSupport: 1,
    arrowScroll: 50,
    fixedBackground: 0
})

function animateColorBar() {
  // Select each card section
  const cardSections = document.querySelectorAll('.bar-trigger');

  cardSections.forEach((section) => {
    const colorBar = section.querySelector('.gradient-bar');

    gsap.to(colorBar, {
      width: '100%',
      scrollTrigger: {
        trigger: section,
        ease: "power2.Out",
        start: '70% center', // Adjust as needed
        end: '100% center', // Set 5rem above the bottom
        scrub: true,
      },
    });
  });
}
animateColorBar();
    // Split the text into spans
    const splitText = new SplitType("[data-scroll-trigger='text'] h2", { types: "chars, words" });
    const splitText1 = new SplitType("[data-scroll-trigger='text1'] h2", { types: "chars, words" });

    // Create a timeline for the animation
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "[data-scroll-trigger='text']",
            start: "top 80%", // Adjust the start position as needed
            end: "bottom 80%", // Adjust the end position as needed
            scrub: true, // Smooth animation during scroll
        },
    });

    // Add animation to reveal each word and change color
    tl.from(splitText.words, {
        opacity: 0.2,
        color: "#d9d9d9", // Change the color of the revealed word
        duration: 0.5,
        stagger: 0.1, // Adjust the stagger for word-by-word reveal
    });
    
    // Create a timeline for the animation
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "[data-scroll-trigger='text1']",
            start: "top 80%", // Adjust the start position as needed
            end: "bottom 80%", // Adjust the end position as needed
            scrub: true, // Smooth animation during scroll
        },
    });

    // Add animation to reveal each word and change color
    tl1.from(splitText1.words, {
        opacity: 0.2,
        color: "#d9d9d9", // Change the color of the revealed word
        duration: 0.5,
        stagger: 0.1, // Adjust the stagger for word-by-word reveal
    });


document.addEventListener('DOMContentLoaded', function () {
  // Select all video containers
  const videoContainers = document.querySelectorAll('.video-container');

  // Iterate through each video container
  videoContainers.forEach((videoContainer, index) => {
    // Get video reference within the current container
    const video = videoContainer.querySelector('video');

    // Find the closest ancestor with the "video-sticky" class
    const triggerElement = videoContainer.closest('.video-sticky');

    // Initialize the ScrollTrigger for each video container, using the ancestor as the trigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: triggerElement, // Use the ancestor as the trigger
      start: 'top center',
      end: 'bottom 55%',
      refreshInterval: 0,
      onEnter: () => {
        // Play the video onEnter from a specific frame (adjust the frameToShow value)
        const frameToShow = Math.floor(video.duration * 0.3);
        if (window.gsap) {
          gsap.to(video, { currentTime: frameToShow, duration: 0.2, ease: 'power2.inOut' });
        } else {
          video.currentTime = frameToShow;
        }
        video.play();
        // Add grow animation onEnter
        gsap.to(videoContainer, { scale: 1, duration: 1, ease: 'power2.out' });
      },
      onLeave: () => {
        // Pause the video onLeave
        video.pause();
        // Stay at scale 1 onLeave
      },
      onLeaveBack: () => {
        // Reset the video onLeaveBack
        resetVideo(video);
        // Add scale animation onLeaveBack
        gsap.to(videoContainer, { scale: 0.8, duration: 1, ease: 'power2.inOut' });
      }
    });
  });

  // Function to reset the video to the initial state
  function resetVideo(video) {
    if (window.gsap) {
      gsap.to(video, { currentTime: 0, duration: 0.2, ease: 'power2.inOut' });
    } else {
      video.currentTime = 0;
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
    var videos = document.querySelectorAll('.w-tab-pane video');

    function playVideo(index) {
        videos[index].currentTime = 0;
        videos[index].play();
    }

    function pauseVideo(index) {
        videos[index].pause();
    }

    document.querySelectorAll('.w-tab-link').forEach(function(tab, index) {
        tab.addEventListener('click', function() {
            videos.forEach(function(video, i) {
                if (i === index) {
                    playVideo(i);
                } else {
                    pauseVideo(i);
                }
            });
        });
    });
});

// Function to open the video modal
        function openVideoModal() {
            document.getElementById('videoModal').style.display = 'flex';
        }

        // Function to close the video modal
        function closeVideoModal() {
            document.getElementById('videoModal').style.display = 'none';
        }

        // Attach the openVideoModal function to the button click event
        document.getElementById('openModalButton').addEventListener('click', openVideoModal);

        // Attach the closeVideoModal function to the close button click event
        document.getElementById('closeButton').addEventListener('click', closeVideoModal);

document.addEventListener('DOMContentLoaded', function () {
  // Drag Free Snap
  var splide = new Splide('#sliderT', {
    pagination: true,
    type: 'loop',
    focus: 'center', // 0 = left and 'center' = center
    autoplay: true,
    interval: 6000, // Set the duration in milliseconds
    speed : 1000, // transition speed in miliseconds
    pauseOnHover: false, // Disable pausing on hover
    waitForTransition : false,
    updateOnMove : true,
    trimSpace: false,
  });

  splide.mount();
  splide.on('active', function (slide) {
            var video = slide.slide.querySelector('video');
            if (video) {
                video.play();
            }
        });

        splide.on('inactive', function (slide) {
            var video = slide.slide.querySelector('video');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
});
