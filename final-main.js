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

let typeSplit;

$(document).ready(function () {
  // Split text into spans
  typeSplit = new SplitType("[text-split]");

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
    }, "2500");
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
      //console.log(currentResults);
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
    $(this).find(".project-blog-image").toggleClass("is-active");
  },
  function () {
    $(this).find(".button-ellipse").toggleClass("is-active");
    $(this).find(".is-ellipse").toggleClass("is-active");
    $(this).find(".button-ellipse").css("background-color", "transparent");

    $(this).find(".project-blog-image").toggleClass("is-active");
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
        $(this).find(".project-blog-image").addClass("is-active");
      },
      function () {
        $(this).find(".button-ellipse").removeClass("is-active");
        $(this).find(".is-ellipse").removeClass("is-active");
        $(this).find(".button-ellipse").css("background-color", "transparent");
        $(this).find(".project-blog-image").removeClass("is-active");
      }
    );
  }, "200");
});

//enable read more button transition when click on category
$(".category-item").on("click", function () {
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
  }, "200");
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

// BUTTONS LINE ANIMATION
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

    $(".heading-style-h2").first().removeAttr("letters-slide-up");
    $(".heading-style-h2").first().attr("letters-slide-up-h1", "");
    setTimeout(() => {
      $(".heading-style-h2").first().css("opacity", "0");
    }, 200);

    //Gsap anim video
    gsap.registerPlugin(Flip);

    const box = document.querySelector(".box"),
      originalcontainer = document.querySelector(".originalcontainer"),
      newcontainer = document.querySelector(".newcontainer");

    //check video loaded other pages
    let vid = document.getElementById("hero_video");
    if (vid) {
      vid.pause();
      $(".section_hero-other-pages").css("min-height", "100vh");

      vid.onloadeddata = function () {
        $(".others-video-wrapper").css("opacity", "1");
        vid.play();
      };

      setTimeout(() => {
        $(".section_hero-other-pages").css("min-height", "75vh");
        const state = Flip.getState(box);
        box.parentNode = document
          .querySelector(".newcontainer")
          .appendChild(box);
        Flip.from(state, {
          duration: 1.5,
          ease: "Expo.easeInOut",
          onComplete: () => {
            setTimeout(() => {
              const styles = `
            html.lenis { 
              height: auto;
            }
          `;

              const styleSheet = document.createElement("style");
              styleSheet.innerText = styles;
              document.head.appendChild(styleSheet);
            }, 300);
          }
        });
      }, "1000");

      setTimeout(() => {
        function createScrollTrigger(triggerElement, timeline, delay) {
          // Play tl when scrolled into view (100% from top of screen)
          ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 100%",
            onEnter: () => timeline.play()
          });
        }

        // LETTERS
        $("[letters-slide-up-h1]").each(function (index) {
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

        $(".heading-style-h2").first().css("opacity", "1");
        setTimeout(() => {
          $(".hero-anim-text-wrapper").css("opacity", "1");
          $(".hero-anim-text-anim-wrapper").css("opacity", "1");
        }, 800);
      }, 1500);

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
        $("[letters-slide-up]").each(function (index) {
          let tl = gsap.timeline({ paused: true });
          tl.from($(this).find(".char"), {
            yPercent: 200,
            rotation: 10,
            duration: 1.7,
            ease: "power3.out",
            stagger: { amount: 0.2 }
          });
          createScrollTrigger($(this), tl);
        });
      }, 2500);
    }
  }
}

let lenis;

function initLenis() {
  ("use strict"); // fix lenis in safari
  if (Webflow.env("editor") === undefined) {
    lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.7,
      infinite: false,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false
    });

    if (window.location.pathname === "/") {
      document.getElementById("hero_video_home").setAttribute("src", hSrc);
      document.getElementById("cta_video").setAttribute("src", cSrc);
      document.getElementById("footer_video").setAttribute("src", fSrc);
      if (isSafari || iOSSafari)
        document.getElementById("growth_video").setAttribute("src", lSrc);

      const hero = document.querySelector(".section_hero");
      let hInside = true;
      const cta = document.querySelector(".section_cta");
      let cInside = false;
      const footer = document.querySelector(".section_footer");
      let fInside = false;
      const lottie = document.querySelector(".section_risk-growth");
      let lInside = false;

      lenis.on("scroll", () => {
        if (ScrollTrigger.isInViewport(hero, 0) && !hInside) {
          document.getElementById("hero_video_home").play();
          hInside = true;
        } else if (!ScrollTrigger.isInViewport(hero, 0) && hInside) {
          document.getElementById("hero_video_home").pause();
          hInside = false;
        }

        if (ScrollTrigger.isInViewport(cta, 0) && !cInside) {
          document.getElementById("cta_video").play();
          cInside = true;
        } else if (!ScrollTrigger.isInViewport(cta, 0) && cInside) {
          document.getElementById("cta_video").pause();
          cInside = false;
        }

        if (ScrollTrigger.isInViewport(footer, 0) && !fInside) {
          document.getElementById("footer_video").play();
          fInside = true;
        } else if (!ScrollTrigger.isInViewport(footer, 0) && fInside) {
          document.getElementById("footer_video").pause();
          fInside = false;
        }

        if (isSafari || iOSSafari) {
          if (ScrollTrigger.isInViewport(lottie, 0) && !lInside) {
            document.getElementById("growth_video").play();
            lInside = true;
          } else if (!ScrollTrigger.isInViewport(lottie, 0) && lInside) {
            document.getElementById("growth_video").pause();
            lInside = false;
          }
        }
      });
    } else if (
      window.location.pathname !== "/" &&
      !window.location.pathname.includes("/news-posts")
    ) {
      document.getElementById("footer_video").setAttribute("src", fSrc);

      const hero = document.querySelector(".section_hero-other-pages");
      let hInside = true;
      const footer = document.querySelector(".section_footer");
      let fInside = false;

      lenis.on("scroll", () => {
        if (ScrollTrigger.isInViewport(hero, 0) && !hInside) {
          document.getElementById("hero_video").play();
          hInside = true;
        } else if (!ScrollTrigger.isInViewport(hero, 0) && hInside) {
          document.getElementById("hero_video").pause();
          hInside = false;
        }

        if (ScrollTrigger.isInViewport(footer, 0) && !fInside) {
          document.getElementById("footer_video").play();
          fInside = true;
        } else if (!ScrollTrigger.isInViewport(footer, 0) && fInside) {
          document.getElementById("footer_video").pause();
          fInside = false;
        }
      });
    } else if (window.location.pathname.includes("/news-posts")) {
      document.getElementById("footer_video").setAttribute("src", fSrc);

      const footer = document.querySelector(".section_footer");
      let fInside = false;

      lenis.on("scroll", () => {
        if (ScrollTrigger.isInViewport(footer, 0) && !fInside) {
          document.getElementById("footer_video").play();
          fInside = true;
        } else if (!ScrollTrigger.isInViewport(footer, 0) && fInside) {
          document.getElementById("footer_video").pause();
          fInside = false;
        }
      });
    }

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

window.addEventListener("resize", () => {
  if (window.innerWidth > 991) typeSplit.revert();
});
