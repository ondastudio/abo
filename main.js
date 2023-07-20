$("h1").attr("text-split", "");
$("h1").attr("letters-slide-up", "");

$(".heading-style-h1").each(function () {
  $(this).attr("text-split", "");
  $(this).attr("letters-slide-up", "");
});

$(".heading-style-h2").each(function () {
  $(this).attr("text-split", "");
  $(this).attr("letters-slide-up", "");
});

//remove attributes from the homepage - stats section
$(".grow-grid_wrapper").find(".heading-style-h1").removeAttr("text-split");
$(".grow-grid_wrapper")
  .find(".heading-style-h1")
  .removeAttr("letters-slide-up");
$(".growth-stat_wrapper-simple")
  .find(".heading-style-h1")
  .removeAttr("text-split");
$(".growth-stat_wrapper-simple")
  .find(".heading-style-h1")
  .removeAttr("letters-slide-up");

$(".lines-up").each(function () {
  $(this).attr("text-split", "");
  $(this).attr("lines-up", "");
});

$(".letters-up").each(function () {
  $(this).attr("text-split", "");
  $(this).attr("letters-slide-up", "");
});

$(".hero-oppacity").css("opacity", "0");
$(".hero-opacity-animation").css("opacity", "0");

$(document).ready(function () {
  //window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]");

  //runs gsap at the beggining if we're not at home
  if ($(".section_hero-other-pages").length) {
    //console.log("here nowwww");
  } else if ($(".section_hero-news").length) {
    //is news page
    run_gsap();
  } else {
    setTimeout(() => {
      function createScrollTrigger(triggerElement, timeline, delay) {
        // Play tl when scrolled into view (100% from top of screen)
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top 100%",
          onEnter: () => timeline.play()
        });
      }

      function createScrollTrigger85(triggerElement, timeline, delay) {
        // Play tl when scrolled into view (100% from top of screen)
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top 90%",
          onEnter: () => timeline.play()
        });
      }

      // LETTERS SLIDE UP
      //â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
      //â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
      $("[lines-up]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".line"), {
          yPercent: 100,
          opacity: 0,
          rotation: 0,
          duration: 0.3,
          ease: "power1.out",
          stagger: { amount: 0.2 }
        });
        createScrollTrigger85($(this), tl);
      });

      // LETTERS
      //â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
      $("[letters-slide-up]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".char"), {
          yPercent: 200,
          rotation: 10,
          duration: 1.7,
          ease: "power2.out",
          stagger: { amount: 0.2 }
        });
        createScrollTrigger($(this), tl);
      });

      $(".hero-oppacity").css("opacity", "1");
      $(".hero-opacity-animation").css("opacity", "1");
    }, "4500");
  }

  //â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”

  if (window.matchMedia("(max-width: 991px)").matches) {
    function createScrollTrigger(triggerElement, timeline, delay) {
      // Play tl when scrolled into view (100% from top of screen)
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 100%",
        onEnter: () => timeline.play()
      });
    }

    function createScrollTrigger85(triggerElement, timeline, delay) {
      // Play tl when scrolled into view (100% from top of screen)
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 90%",
        onEnter: () => timeline.play()
      });
    }

    // LETTERS SLIDE UP
    //â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
    //â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
    $("[lines-up]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".line"), {
        yPercent: 100,
        opacity: 0,
        rotation: 0,
        duration: 0.3,
        ease: "power1.out",
        stagger: { amount: 0.2 }
      });
      createScrollTrigger85($(this), tl);
    });

    // LETTERS
    //â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
    $("[letters-slide-up]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".char"), {
        yPercent: 200,
        rotation: 10,
        duration: 1.7,
        ease: "power2.out",
        stagger: { amount: 0.2 }
      });
      createScrollTrigger($(this), tl);
    });
  }

  // Avoid flash of unstyled content
  gsap.set("[text-split]", { opacity: 1 });
  //});
});

$(".menu-sticky-link").hover(
  function () {
    $(".menu-sticky-link:not(:hover)").css("opacity", "0.5");
  },
  function () {
    $(".menu-sticky-link").css("opacity", "1");
  }
);

var close_click = true;
$(".number-of-results").css("opacity", "0");

$(".filter_radio").on("click", function () {
  $(".number-of-results").text("");
  $(".number-of-results").css("opacity", "0");

  if (close_click) {
    setTimeout(() => {
      var currentResults = $(".original-number-of-results").text();
      console.log(currentResults);
      $(".number-of-results").text("(" + currentResults + ")");
      $(this).siblings(".number-of-results").css("opacity", "1");
    }, "300");
  }
});

$(".filter-reset-link-block").on("click", function () {
  close_click = false;
  $(".number-of-results").css("opacity", "0");
  $(".number-of-results").text("");
});

$(".view-filtered").on("click", function () {
  close_click = true;
});

//Read more Button
$(".read-more-trigger").hover(
  function () {
    $(this).find(".button-ellipse").toggleClass("is-active");
    $(this).find(".is-ellipse").toggleClass("is-active");

    var btn_bordercolor = $(this).find(".button-ellipse").css("border-color");
    $(this).find(".button-ellipse").css("background-color", btn_bordercolor);
  },
  function () {
    $(this).find(".button-ellipse").toggleClass("is-active");
    $(this).find(".is-ellipse").toggleClass("is-active");
    $(this).find(".button-ellipse").css("background-color", "transparent");
  }
);

//enable read more button transition when loads more CMS items
$(".load-more-btn_wrapper").on("click", function () {
  setTimeout(() => {
    //Read more Button

    $(".read-more-trigger").hover(
      function () {
        $(this).find(".button-ellipse").addClass("is-active");
        $(this).find(".is-ellipse").addClass("is-active");

        var btn_bordercolor = $(this)
          .find(".button-ellipse")
          .css("border-color");
        $(this)
          .find(".button-ellipse")
          .css("background-color", btn_bordercolor);
      },
      function () {
        $(this).find(".button-ellipse").removeClass("is-active");
        $(this).find(".is-ellipse").removeClass("is-active");
        $(this).find(".button-ellipse").css("background-color", "transparent");
      }
    );
  }, "500");
});

//Emulate click to close contact form when clicking outside
$(".overlay-background-contact").on("click", function () {
  $(".contact-icon").click();
});

$(".overlay-background-contact").on("click", function () {
  $(".contact-icon").click();
});

$(".sticky-nav-background").on("click", function () {
  $(".is-close-fixed").click();
});

//open contact form when clicking Contact on Main Menu
$(".is-menu-contact-link").on("click", function () {
  $(".is-close-fixed").click();
});

//Submit contact form
$(".submit-message-btn").on("click", function () {
  $(".is-submit-message").click();
});

$(".submit-cv-btn").on("click", function () {
  $(".is-submit-cv").click();
});

// BUTTONS LINE ANIMATION â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
$(".line-animator_mask").hover(
  function () {
    $(this).find(".button-line-animator").toggleClass("button-state-on");
    $(this).find(".button-rotation").toggleClass("rotation-on");
  },
  function () {
    $(this).find(".button-line-animator").toggleClass("button-state-on");
    $(this).find(".button-rotation").toggleClass("rotation-on");
  }
);

if ($(".section_hero-other-pages").length) {
  if (window.matchMedia("(min-width: 991px)").matches) {
    $(".hero-anim-text-wrapper").css("opacity", "0");
    $(".hero-anim-text-anim-wrapper").css("opacity", "0");

    //Gsap anim video
    gsap.registerPlugin(Flip);

    const box = document.querySelector(".box"),
      originalcontainer = document.querySelector(".originalcontainer"),
      newcontainer = document.querySelector(".newcontainer");

    //check video loaded other pages
    let vid = document.getElementById("hero_video");
    if (vid) {
      vid.pause();
      $(".section_hero-other-pages").css("min-height", "100%");

      vid.onloadeddata = function () {
        $(".others-video-wrapper").css("opacity", "1");
        vid.play();
      };

      setTimeout(() => {
        $(".section_hero-other-pages").css("min-height", "75%");
        const state = Flip.getState(box);
        box.parentNode = document
          .querySelector(".newcontainer")
          .appendChild(box);
        Flip.from(state, { duration: 1, ease: "Power4.easeInOut" });
      }, "1300");

      setTimeout(() => {
        function createScrollTrigger(triggerElement, timeline, delay) {
          // Play tl when scrolled into view (100% from top of screen)
          ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 100%",
            onEnter: () => timeline.play()
          });
        }

        function createScrollTrigger85(triggerElement, timeline, delay) {
          // Play tl when scrolled into view (100% from top of screen)
          ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 90%",
            onEnter: () => timeline.play()
          });
        }

        // LETTERS SLIDE UP
        //â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
        //â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
        $("[lines-up]").each(function (index) {
          let tl = gsap.timeline({ paused: true });
          tl.from($(this).find(".line"), {
            yPercent: 100,
            opacity: 0,
            rotation: 0,
            duration: 0.3,
            ease: "power1.out",
            stagger: { amount: 0.2 }
          });
          createScrollTrigger85($(this), tl);
        });

        // LETTERS
        //â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
        $("[letters-slide-up]").each(function (index) {
          let tl = gsap.timeline({ paused: true });
          tl.from($(this).find(".char"), {
            yPercent: 200,
            rotation: 10,
            duration: 1.7,
            ease: "power2.out",
            stagger: { amount: 0.2 }
          });
          createScrollTrigger($(this), tl);
        });

        $(".hero-anim-text-wrapper").css("opacity", "1");
        $(".hero-anim-text-anim-wrapper").css("opacity", "1");
      }, "2400");
    }
  }
}

initLenis();

function initLenis() {
  "use strict"; // fix lenis in safari

  if (Webflow.env("editor") === undefined) {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.7,
      infinite: false,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    $("[data-lenis-start]").on("click", function () {
      lenis.start();
    });
    $("[data-lenis-stop]").on("click", function () {
      lenis.stop();
    });
    $("[data-lenis-toggle]").on("click", function () {
      $(this).toggleClass("stop-scroll");
      if ($(this).hasClass("stop-scroll")) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });

    function connectToScrollTrigger() {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
    }
    // Uncomment this if using GSAP ScrollTrigger
    //connectToScrollTrigger();
  }
}

function run_gsap() {
  function createScrollTrigger(triggerElement, timeline, delay) {
    // Play tl when scrolled into view (100% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 100%",
      onEnter: () => timeline.play()
    });
  }

  function createScrollTrigger85(triggerElement, timeline, delay) {
    // Play tl when scrolled into view (100% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 90%",
      onEnter: () => timeline.play()
    });
  }

  // LETTERS SLIDE UP
  //â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
  //â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
  $("[lines-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".line"), {
      yPercent: 100,
      opacity: 0,
      rotation: 0,
      duration: 0.3,
      ease: "power1.out",
      stagger: { amount: 0.2 }
    });
    createScrollTrigger85($(this), tl);
  });

  // LETTERS
  //â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
  $("[letters-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      yPercent: 200,
      rotation: 10,
      duration: 1.7,
      ease: "power2.out",
      stagger: { amount: 0.2 }
    });
    createScrollTrigger($(this), tl);
  });

  gsap.set("[text-split]", { opacity: 1 });
}